import { ArrowDown } from 'lucide-react';
import patriciaHeadshot from '@/assets/patricia-headshot.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-background relative overflow-hidden"
    >
      {/* Subtle decorative accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5" />

      <div className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 max-w-xl">
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
            >
              Patricia Asiimire
              <span className="block text-primary mt-2">—</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">
                Copywriter & Product Storyteller
              </span>
            </h1>

            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Persuasive copy that connects with Ugandan audiences and drives results.
            </p>

            <div className="border-l-2 border-primary pl-6 mb-6">
              <p className="font-body text-foreground/90 leading-relaxed">
                Founder of 2 companies. I work on product and brand copy that connects
                with informal-economy audiences.
              </p>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="bg-background/60 px-4 py-2 rounded-lg text-center">
                <div className="font-display text-xl">2</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="bg-background/60 px-4 py-2 rounded-lg text-center">
                <div className="font-display text-xl">2</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="bg-background/60 px-4 py-2 rounded-lg text-center">
                <div className="font-display text-xl">2</div>
                <div className="text-sm text-muted-foreground">Years’ experience</div>
              </div>
            </div>

            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-body font-semibold hover:bg-charcoal-light transition-colors"
            >
              View Work
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-primary rounded-2xl" />
              <img
                src={patriciaHeadshot}
                alt="Patricia Asiimire - Copywriter & Product Storyteller"
                className="w-64 md:w-72 lg:w-80 h-auto rounded-2xl shadow-elevated object-cover relative z-10"
              />
              <div className="absolute -bottom-3 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-body text-sm font-medium z-20">
                🇺🇬 Kampala, Uganda
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
