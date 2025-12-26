import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  challenge: string;
  role: string;
  results: string;
  tags: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NexVox AI',
    subtitle: 'AI Agents for Businesses in Local Languages',
    category: 'Product Messaging',
    challenge:
      'Build awareness for AI voice agents that speak local Ugandan languages to businesses unfamiliar with AI technology.',
    role: 'Developed product messaging, taglines, and LinkedIn content strategy. Created content plans, wrote engaging posts, and crafted value propositions that resonate with local business owners.',
    results:
      'Early user interest and engagement from businesses. Successfully positioned complex AI technology as accessible and practical for the Ugandan market.',
    tags: ['LinkedIn Strategy', 'Product Copy', 'Taglines', 'B2B Messaging'],
    color: 'bg-primary',
  },
  {
    id: 2,
    title: 'MOTOFIX Uganda',
    subtitle: 'On-Demand Roadside Mechanic Marketplace',
    category: 'Brand & Product Copy',
    challenge:
      'Build trust in the informal mechanic sector and create messaging that resonates with both motorists and mechanics.',
    role: 'Wrote the complete product vision, user flow messaging, social media copy, and outreach communications. Developed the brand voice from scratch.',
    results:
      'Preparing for January 2026 pilot with strong community interest. Built a trusted brand presence through consistent, human-centered messaging.',
    tags: ['Vision Docs', 'Social Copy', 'User Flows', 'Outreach'],
    color: 'bg-charcoal',
  },
  {
    id: 3,
    title: 'Sweet Trish',
    subtitle: 'Confectionery Business',
    category: 'Sales & Marketing Copy',
    challenge:
      'Drive revenue for a bootstrapped confectionery brand with minimal marketing budget.',
    role: 'Created iterative sales copy, managed marketing channels, and wrote compelling product descriptions that converted browsers to buyers.',
    results:
      'Generated consistent monthly revenue starting from just UGX 20,000 capital. Proved the power of persuasive copy for small businesses.',
    tags: ['Sales Posts', 'Product Descriptions', 'Direct Response'],
    color: 'bg-gold-dark',
  },
  {
    id: 4,
    title: 'Spec Ad Copy',
    subtitle: 'Before/After Ad Transformations',
    category: 'Advertising Copy',
    challenge:
      'Demonstrate the impact of professional copywriting by transforming generic local ads into compelling, conversion-focused copy.',
    role: 'Rewrote real local advertisements (boda services, street food vendors) to showcase the difference professional copy makes.',
    results:
      'Created portfolio pieces that demonstrate clear before/after improvements in messaging clarity, emotional appeal, and call-to-action strength.',
    tags: ['Ad Copy', 'Before/After', 'Local Businesses', 'Transformation'],
    color: 'bg-primary',
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-foreground px-4 py-2 rounded-full mb-6">
            <span className="font-body text-sm font-medium">Portfolio</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Work that <span className="text-primary">connects</span> and{' '}
            <span className="text-primary">converts</span>
          </h2>

          <p className="font-body text-lg text-muted-foreground">
            A selection of copywriting projects that demonstrate my ability to
            craft compelling narratives for startups and brands in Uganda.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-background rounded-3xl overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Color Bar */}
              <div className={`h-2 ${project.color}`} />

              <div className="p-8 md:p-10">
                {/* Category */}
                <span className="inline-block font-body text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="font-body text-muted-foreground mb-6">
                  {project.subtitle}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-body text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 font-body font-semibold text-foreground group-hover:text-primary transition-colors">
                  <span>View Case Study</span>
                  <ArrowUpRight
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-background rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Color Bar */}
            <div className={`h-2 ${selectedProject.color}`} />

            <div className="p-8 md:p-10">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-secondary rounded-full hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Category */}
              <span className="inline-block font-body text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                {selectedProject.category}
              </span>

              {/* Title */}
              <h3 className="font-display text-3xl md:text-4xl mb-2">
                {selectedProject.title}
              </h3>

              <p className="font-body text-lg text-muted-foreground mb-8">
                {selectedProject.subtitle}
              </p>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    The Challenge
                  </h4>
                  <p className="font-body text-muted-foreground pl-4">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-body font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    My Role
                  </h4>
                  <p className="font-body text-muted-foreground pl-4">
                    {selectedProject.role}
                  </p>
                </div>

                <div>
                  <h4 className="font-body font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Results
                  </h4>
                  <p className="font-body text-muted-foreground pl-4">
                    {selectedProject.results}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-body text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
