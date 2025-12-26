import nexvoxScreenshot from '@/assets/nexvox-screenshot.png';
import motofixScreenshot from '@/assets/motofix-screenshot.png';
import sweetTrishScreenshot from '@/assets/sweettrish-screenshot.png';
import bodaScreenshot from '@/assets/boda-screenshot.png';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  screenshot: string;
  challenge: string;
  role: string;
  results: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NexVox AI',
    subtitle: 'AI Agents for Businesses in Local Languages',
    screenshot: nexvoxScreenshot,
    challenge: 'Build awareness for AI voice agents in local languages',
    role: 'Developed messaging, taglines, and content strategy',
    results: 'Early engagement from Ugandan businesses',
  },
  {
    id: 2,
    title: 'MOTOFIX',
    subtitle: 'On-Demand Roadside Mechanic Marketplace',
    screenshot: motofixScreenshot,
    challenge: 'Build trust in informal sector',
    role: 'Wrote vision, user messaging, social copy, outreach',
    results: 'Strong interest ahead of January 2026 pilot',
  },
  {
    id: 3,
    title: 'Sweet Trish',
    subtitle: 'Confectionery Business',
    screenshot: sweetTrishScreenshot,
    challenge: 'Drive revenue for bootstrapped brand',
    role: 'Created sales copy, marketing channels, descriptions',
    results: 'Consistent monthly revenue from UGX 20,000 capital',
  },
  {
    id: 4,
    title: 'Spec Ad Copy',
    subtitle: 'Local Boda Service Rewrite',
    screenshot: bodaScreenshot,
    challenge: 'Make boda service feel trusted and urgent',
    role: 'Rewrote for emotional connection',
    results: 'Spec example of local advertising style',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="font-body text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
            Portfolio
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Copy that connects
          </h2>

          <p className="font-body text-lg text-muted-foreground">
            Real work for Ugandan startups and brands. Big screenshots, short bullets.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Screenshot - Always First on Mobile */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform" />
                  <img
                    src={project.screenshot}
                    alt={`${project.title} - Copy samples`}
                    className="relative w-full rounded-2xl shadow-elevated border border-border"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="font-body text-xs font-semibold text-primary uppercase tracking-widest mb-2 block">
                  Project {project.id}
                </span>

                <h3 className="font-display text-2xl md:text-3xl mb-2">
                  {project.title}
                </h3>

                <p className="font-body text-muted-foreground mb-6">
                  {project.subtitle}
                </p>

                {/* Bullets */}
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-body font-semibold text-foreground">Challenge:</span>{' '}
                      <span className="font-body text-muted-foreground">{project.challenge}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-body font-semibold text-foreground">Role:</span>{' '}
                      <span className="font-body text-muted-foreground">{project.role}</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-body font-semibold text-foreground">Results:</span>{' '}
                      <span className="font-body text-muted-foreground">{project.results}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
