const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#home" className="font-display text-xl">
            Patricia<span className="text-primary">.</span>
          </a>

          <p className="font-body text-sm text-background/60">
            © {new Date().getFullYear()} Patricia Asiimire. Made in Uganda 🇺🇬
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
