-- Create portfolio_posts table for blog-style portfolio entries
CREATE TABLE public.portfolio_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  caption TEXT NOT NULL,
  project_type TEXT, -- e.g., 'NexVox AI', 'MOTOFIX', 'Sweet Trish', 'Spec Work'
  challenge TEXT,
  role TEXT,
  results TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_published BOOLEAN NOT NULL DEFAULT true,
  sort_order INTEGER DEFAULT 0
);

-- Enable Row Level Security
ALTER TABLE public.portfolio_posts ENABLE ROW LEVEL SECURITY;

-- Public can view published posts
CREATE POLICY "Anyone can view published posts" 
ON public.portfolio_posts 
FOR SELECT 
USING (is_published = true);

-- Admin can do everything (we'll use a simple admin email check)
CREATE POLICY "Admin can manage all posts" 
ON public.portfolio_posts 
FOR ALL 
USING (auth.jwt() ->> 'email' = 'asiimirepatricia26@gmail.com')
WITH CHECK (auth.jwt() ->> 'email' = 'asiimirepatricia26@gmail.com');

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_portfolio_posts_updated_at
BEFORE UPDATE ON public.portfolio_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for portfolio images
INSERT INTO storage.buckets (id, name, public) VALUES ('portfolio-images', 'portfolio-images', true);

-- Storage policies
CREATE POLICY "Anyone can view portfolio images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'portfolio-images');

CREATE POLICY "Admin can upload portfolio images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'portfolio-images' AND auth.jwt() ->> 'email' = 'asiimirepatricia26@gmail.com');

CREATE POLICY "Admin can update portfolio images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'portfolio-images' AND auth.jwt() ->> 'email' = 'asiimirepatricia26@gmail.com');

CREATE POLICY "Admin can delete portfolio images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'portfolio-images' AND auth.jwt() ->> 'email' = 'asiimirepatricia26@gmail.com');