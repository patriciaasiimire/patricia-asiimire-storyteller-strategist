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

          {/* Quick Stats removed per request */}
        </div>
      </div>
    </section>
  );
};

export default About;
