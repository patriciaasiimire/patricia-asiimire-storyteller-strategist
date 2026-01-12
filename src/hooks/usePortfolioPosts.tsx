import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface PortfolioPost {
  id: string;
  title: string;
  caption: string;
  project_type: string | null;
  challenge: string | null;
  role: string | null;
  results: string | null;
  image_url: string | null;
  created_at: string;
  updated_at: string;
  is_published: boolean;
  sort_order: number | null;
}

export const usePortfolioPosts = () => {
  return useQuery({
    queryKey: ['portfolio-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('portfolio_posts')
        .select('*')
        .order('sort_order', { ascending: true })
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as PortfolioPost[];
    },
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (post: Omit<PortfolioPost, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('portfolio_posts')
        .insert(post)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio-posts'] });
      toast.success('Post created successfully!');
    },
    onError: (error) => {
      toast.error(`Failed to create post: ${error.message}`);
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<PortfolioPost> & { id: string }) => {
      const { data, error } = await supabase
        .from('portfolio_posts')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio-posts'] });
      toast.success('Post updated!');
    },
    onError: (error) => {
      toast.error(`Failed to update post: ${error.message}`);
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('portfolio_posts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio-posts'] });
      toast.success('Post deleted!');
    },
    onError: (error) => {
      toast.error(`Failed to delete post: ${error.message}`);
    },
  });
};

export const uploadImage = async (file: File): Promise<string> => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
  
  const { error: uploadError } = await supabase.storage
    .from('portfolio-images')
    .upload(fileName, file);
  
  if (uploadError) throw uploadError;
  
  const { data } = supabase.storage
    .from('portfolio-images')
    .getPublicUrl(fileName);
  
  return data.publicUrl;
};
