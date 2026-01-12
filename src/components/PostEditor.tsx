import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { X, Upload, Image as ImageIcon, Loader2 } from 'lucide-react';
import { useCreatePost, useUpdatePost, uploadImage, PortfolioPost } from '@/hooks/usePortfolioPosts';

interface PostEditorProps {
  post?: PortfolioPost;
  onClose: () => void;
}

const PROJECT_TYPES = ['NexVox AI', 'MOTOFIX', 'Sweet Trish', 'Spec Work', 'Other'];

const PostEditor = ({ post, onClose }: PostEditorProps) => {
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    title: post?.title || '',
    caption: post?.caption || '',
    project_type: post?.project_type || '',
    challenge: post?.challenge || '',
    role: post?.role || '',
    results: post?.results || '',
    image_url: post?.image_url || '',
    is_published: post?.is_published ?? true,
    sort_order: post?.sort_order ?? 0,
  });

  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(post?.image_url || '');

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview
    const reader = new FileReader();
    reader.onload = (e) => setPreviewUrl(e.target?.result as string);
    reader.readAsDataURL(file);

    // Upload
    setUploading(true);
    try {
      const url = await uploadImage(file);
      setFormData((prev) => ({ ...prev, image_url: url }));
    } catch (error) {
      console.error('Upload failed:', error);
    }
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (post) {
      await updatePost.mutateAsync({ id: post.id, ...formData });
    } else {
      await createPost.mutateAsync(formData);
    }
    onClose();
  };

  const isLoading = createPost.isPending || updatePost.isPending;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full p-6 my-8 relative animate-fadeUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-display text-2xl mb-6">
          {post ? 'Edit Post' : 'Create New Post'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Image Upload - Like Facebook/LinkedIn */}
          <div className="space-y-2">
            <Label>Screenshot / Image</Label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-colors text-center"
            >
              {previewUrl ? (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {uploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                      <Loader2 className="w-8 h-8 text-white animate-spin" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="py-8">
                  <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground/50 mb-2" />
                  <p className="text-muted-foreground text-sm">
                    Click to upload image
                  </p>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Title */}
          <div>
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              placeholder="e.g., NexVox AI — Building Awareness"
              required
            />
          </div>

          {/* Caption - Like a social post */}
          <div>
            <Label htmlFor="caption">Caption *</Label>
            <Textarea
              id="caption"
              value={formData.caption}
              onChange={(e) => setFormData((prev) => ({ ...prev, caption: e.target.value }))}
              placeholder="Write your post caption here..."
              rows={3}
              required
            />
          </div>

          {/* Project Type */}
          <div>
            <Label htmlFor="project_type">Project Type</Label>
            <select
              id="project_type"
              value={formData.project_type}
              onChange={(e) => setFormData((prev) => ({ ...prev, project_type: e.target.value }))}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              <option value="">Select project type</option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Challenge / Role / Results */}
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Label htmlFor="challenge">Challenge</Label>
              <Textarea
                id="challenge"
                value={formData.challenge || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, challenge: e.target.value }))}
                placeholder="What was the challenge?"
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="role">Your Role</Label>
              <Textarea
                id="role"
                value={formData.role || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                placeholder="What did you do?"
                rows={2}
              />
            </div>
            <div>
              <Label htmlFor="results">Results</Label>
              <Textarea
                id="results"
                value={formData.results || ''}
                onChange={(e) => setFormData((prev) => ({ ...prev, results: e.target.value }))}
                placeholder="What was the outcome?"
                rows={2}
              />
            </div>
          </div>

          {/* Published toggle */}
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-medium text-sm">Publish immediately</p>
              <p className="text-xs text-muted-foreground">
                Hidden posts won't appear on your portfolio
              </p>
            </div>
            <Switch
              checked={formData.is_published}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, is_published: checked }))
              }
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading || uploading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : post ? (
                'Update Post'
              ) : (
                'Publish Post'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEditor;
