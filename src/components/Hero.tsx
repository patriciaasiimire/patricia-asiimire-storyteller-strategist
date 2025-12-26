import { ArrowDown } from 'lucide-react';
import patriciaHeadshot from '@/assets/patricia-headshot.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div
              className="inline-flex items-center gap-2 bg-primary/10 text-foreground px-4 py-2 rounded-full mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-gold" />
              <span className="font-body text-sm font-medium">
                Available for Projects
              </span>
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              Patricia Asiimire
              <span className="block text-primary">—</span>
              Copywriter & Product Storyteller
            </h1>

            <p
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              Turning Uganda's real problems into trusted, engaging brand
              stories that connect and convert.
            </p>

            <div
              className="bg-secondary/50 border border-border rounded-2xl p-6 mb-8 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <p className="font-body text-foreground/90 leading-relaxed">
                Founder of <span className="font-semibold text-foreground">MOTOFIX</span>{' '}
                (roadside marketplace) and{' '}
                <span className="font-semibold text-foreground">Sweet Trish</span>{' '}
                (confectionery business). Crafted messaging for{' '}
                <span className="font-semibold text-foreground">NexVox AI</span>{' '}
                (local-language AI agents). Passionate about intuitive, impactful
                copy that solves local problems at scale.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-center hover:bg-gold-dark transition-all shadow-gold hover:shadow-elevated"
              >
                Hire Me
              </a>
              <a
                href="#portfolio"
                className="border-2 border-foreground text-foreground px-8 py-4 rounded-full font-body font-semibold text-center hover:bg-foreground hover:text-background transition-all"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Image */}
          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative">
              {/* Yellow accent shape */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-primary rounded-3xl" />
              <div className="relative">
                <img
                  src={patriciaHeadshot}
                  alt="Patricia Asiimire - Copywriter & Product Storyteller"
                  className="w-72 md:w-80 lg:w-96 h-auto rounded-3xl shadow-elevated object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-2xl px-5 py-3 shadow-elevated">
                <p className="font-body text-sm font-semibold text-foreground">
                  🇺🇬 Based in Uganda
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-body text-xs text-muted-foreground uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown size={20} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
