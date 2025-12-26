const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <span className="font-body text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
            About
          </span>

          <h2 className="font-display text-3xl md:text-4xl mb-8">
            Building products that solve local problems
          </h2>

          <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
            <p>
              Product-focused founder with hands-on experience defining vision, 
              designing user flows, and driving execution for two-sided marketplaces 
              in Uganda's informal sector.
            </p>

            <p>
              Proven ability to identify real user pain, bootstrap profitable products, 
              and coordinate cross-functional teams. Engineering background combined with 
              strong storytelling and community-building skills — passionate about building 
              intuitive, impactful products that solve local problems at scale.
            </p>

            <p className="text-foreground font-medium border-l-2 border-primary pl-6">
              My copy is clear, persuasive, and feels authentically Ugandan.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div>
              <p className="font-display text-3xl text-foreground">2</p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Startups Founded
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-foreground">10+</p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Copy Projects
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-foreground">3+</p>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
