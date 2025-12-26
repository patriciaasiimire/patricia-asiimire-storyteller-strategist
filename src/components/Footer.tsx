import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <a
              href="#home"
              className="font-display text-2xl font-normal tracking-tight"
            >
              Patricia<span className="text-primary">.</span>
            </a>
            <p className="font-body text-sm text-cream/60 mt-2">
              Copywriter & Product Storyteller
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="font-body text-sm text-cream/60 hover:text-cream transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 font-body text-sm text-cream/60">
            <span>© {currentYear} Made with</span>
            <Heart size={14} className="text-primary fill-primary" />
            <span>in Uganda</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
