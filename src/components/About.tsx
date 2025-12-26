import { Sparkles, Users, Target, Lightbulb } from 'lucide-react';

const skills = [
  {
    icon: Sparkles,
    title: 'Brand Storytelling',
    description: 'Crafting narratives that resonate with local audiences',
  },
  {
    icon: Users,
    title: 'Stakeholder Communication',
    description: 'Clear messaging that aligns teams and builds trust',
  },
  {
    icon: Target,
    title: 'Go-to-Market Strategy',
    description: 'Launch copy that drives awareness and conversions',
  },
  {
    icon: Lightbulb,
    title: 'Product Messaging',
    description: 'Turning complex features into compelling benefits',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-foreground px-4 py-2 rounded-full mb-6">
              <span className="font-body text-sm font-medium">About Me</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
              I write copy that feels{' '}
              <span className="text-primary">human</span>
            </h2>

            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I am a passionate and results-driven Product Manager with a strong
                foundation in customer-centric design, agile methodologies, and
                go-to-market strategies.
              </p>

              <p>
                With hands-on experience building and scaling digital products across
                the transport, informal sector, and tech industries, I specialize in
                identifying customer pain points, aligning stakeholders, and
                delivering impactful solutions that balance user needs with business
                goals.
              </p>

              <p>
                My work includes founding MOTOFIX, a marketplace connecting motorists
                with roadside mechanics, and leading product initiatives at Wulira AI
                (formerly NexVox AI) — a B2B AI company building voice agents that
                speak local languages.
              </p>

              <p className="text-foreground font-medium text-lg border-l-4 border-primary pl-6">
                "I write copy that feels human — clear, persuasive, rooted in
                Uganda's informal sector realities."
              </p>

              <p>
                With a keen eye for storytelling and stakeholder communication, I
                translate complex product visions into compelling messaging that
                builds trust, drives engagement, and creates real impact in
                communities across East Africa.
              </p>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-cream-dark rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-2xl mb-8">What I Bring</h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-background rounded-2xl hover-lift cursor-default"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground mb-1">
                        {skill.title}
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
                <div className="text-center">
                  <p className="font-display text-3xl text-primary">3+</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    Years Exp
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-primary">10+</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    Projects
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl text-primary">2</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    Startups Founded
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
