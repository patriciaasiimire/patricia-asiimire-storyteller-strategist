import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { usePortfolioPosts, useDeletePost, PortfolioPost } from '@/hooks/usePortfolioPosts';
import AdminLogin from './AdminLogin';
import PostEditor from './PostEditor';
import { Button } from '@/components/ui/button';
import { Plus, Edit2, Trash2, LogIn, LogOut, Loader2 } from 'lucide-react';

// Fallback static posts for when database is empty
import img1 from '../assets/nexvox.jpg';
import img2 from '../assets/jovi.jpg';
import img3 from '../assets/jov.jpg';
import img4 from '../assets/content1.png';
import img6 from '../assets/banner.jpg';

const staticPosts = [
  {
    id: '1',
    title: 'NexVox AI — Building Awareness for Local-Language AI',
    caption: 'Introducing voice AI agents that speak the languages of your customers.',
    project_type: 'NexVox AI',
    image_url: img1,
    challenge: 'Introduce AI voice agents that speak like true Ugandans to a skeptical audience.',
    role: 'Wrote playful, relatable social copy and tagline to highlight the language barrier problem.',
    results: 'Sparked conversations and engagement, making complex tech feel accessible.',
  },
  {
    id: '2',
    title: 'MOTOFIX — Driver Pain Research & Social Engagement',
    caption: 'Raw, headline-driven social copy capturing authentic driver voices.',
    project_type: 'MOTOFIX',
    image_url: img2,
    challenge: 'Uncover real user frustrations to inform product and build community trust.',
    role: 'Wrote raw, headline-driven social copy that captured authentic driver voices.',
    results: 'High engagement and comments, valuable insights for product messaging.',
  },
  {
    id: '3',
    title: 'MOTOFIX — Street Research & Trust-Building Campaign',
    caption: 'Empathetic, question-driven social copy to spark honest conversations.',
    project_type: 'MOTOFIX',
    image_url: img3,
    challenge: 'Address deep mistrust in informal mechanics through on-ground research.',
    role: 'Wrote empathetic, question-driven social copy to humanize the problem.',
    results: 'Strong community interaction, real feedback that shaped product vision.',
  },
  {
    id: '4',
    title: 'MOTOFIX — Team Vision & Product Thinking',
    caption: 'Thoughtful, aspirational caption showcasing team brainstorming.',
    project_type: 'MOTOFIX',
    image_url: img4,
    challenge: 'Share startup process and position MOTOFIX as innovative solution.',
    role: 'Wrote thoughtful, aspirational caption to showcase team brainstorming.',
    results: 'Humanized the brand, built follower connection and anticipation.',
  },
  {
    id: '5',
    title: "MOTOFIX — On-Ground Activation & Community Gratitude",
    caption: 'Reflective, grateful copy that turned promotion into storytelling.',
    project_type: 'MOTOFIX',
    image_url: img6,
    challenge: 'Capture energy of street promotion and thank community.',
    role: 'Wrote reflective, grateful copy that turned promotion into storytelling.',
    results: 'High engagement, reinforced "Your Car\'s Best Friend" brand.',
  },
];

const Portfolio = () => {
  const { user, isAdmin, signOut, loading: authLoading } = useAuth();
  const { data: dbPosts, isLoading: postsLoading } = usePortfolioPosts();
  const deletePost = useDeletePost();

  const [showLogin, setShowLogin] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState<PortfolioPost | undefined>();
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Use database posts if available, otherwise show static fallback
  const posts = dbPosts && dbPosts.length > 0 ? dbPosts : staticPosts;

  // Get unique project types for filter tabs
  const projectTypes = ['All', ...Array.from(new Set(posts.map(p => p.project_type).filter(Boolean)))];

  // Filter posts based on active filter
  const filteredPosts = activeFilter === 'All' 
    ? posts 
    : posts.filter(p => p.project_type === activeFilter);

  const handleEdit = (post: PortfolioPost) => {
    setEditingPost(post);
    setShowEditor(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      await deletePost.mutateAsync(id);
    }
  };

  const handleNewPost = () => {
    setEditingPost(undefined);
    setShowEditor(true);
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="font-body text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              Copy that connects
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Real work for Ugandan startups and brands.
            </p>
          </div>

          {/* Admin Controls */}
          <div className="flex items-center gap-3">
            {!authLoading && (
              <>
                {isAdmin ? (
                  <>
                    <Button onClick={handleNewPost} size="sm" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Add Post
                    </Button>
                    <Button
                      onClick={signOut}
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-muted-foreground"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => setShowLogin(true)}
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-muted-foreground hover:text-primary"
                  >
                    <LogIn className="w-4 h-4" />
                    Admin
                  </Button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        {!postsLoading && posts.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type as string)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeFilter === type
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        {/* Loading State */}
        {postsLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        )}

        {/* Posts Grid - Social Media Style */}
        {!postsLoading && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
              >
                {/* Admin overlay */}
                {isAdmin && (
                  <div className="absolute top-3 right-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEdit(post as PortfolioPost)}
                      className="p-2 bg-white/90 rounded-full shadow hover:bg-primary hover:text-white transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 bg-white/90 rounded-full shadow hover:bg-red-500 hover:text-white transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Image - Big and prominent */}
                {post.image_url && (
                  <div className="w-full aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-5">
                  {/* Project Type Badge */}
                  {post.project_type && (
                    <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                      {post.project_type}
                    </span>
                  )}

                  <h3 className="font-display text-lg mb-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.caption}
                  </p>

                  {/* Short bullets */}
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {post.challenge && (
                      <li>
                        <strong className="text-foreground">Challenge:</strong>{' '}
                        {post.challenge}
                      </li>
                    )}
                    {post.role && (
                      <li>
                        <strong className="text-foreground">Role:</strong>{' '}
                        {post.role}
                      </li>
                    )}
                    {post.results && (
                      <li>
                        <strong className="text-foreground">Results:</strong>{' '}
                        {post.results}
                      </li>
                    )}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State for Admin */}
        {isAdmin && dbPosts && dbPosts.length === 0 && !postsLoading && (
          <div className="text-center py-16 border-2 border-dashed border-muted-foreground/20 rounded-2xl mt-8">
            <p className="text-muted-foreground mb-4">
              No posts yet. Start building your portfolio!
            </p>
            <Button onClick={handleNewPost} className="gap-2">
              <Plus className="w-4 h-4" />
              Create First Post
            </Button>
          </div>
        )}
      </div>

      {/* Modals */}
      {showLogin && <AdminLogin onClose={() => setShowLogin(false)} />}
      {showEditor && (
        <PostEditor
          post={editingPost}
          onClose={() => {
            setShowEditor(false);
            setEditingPost(undefined);
          }}
        />
      )}
    </section>
  );
};

export default Portfolio;
