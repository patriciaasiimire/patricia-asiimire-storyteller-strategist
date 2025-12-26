import { useState } from 'react';
import { Mail, Phone, Linkedin, Send, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '';

      if (!endpoint) {
        // Fallback: open user's email client with mailto so messages still reach your inbox.
        const to = 'asiimirepatricia26@gmail.com';
        const subject = encodeURIComponent(`Website contact from ${formData.name || 'Visitor'}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        const mailto = `mailto:${to}?subject=${subject}&body=${body}`;

        // Open mail client and show toast; we still reset form state for UX.
        window.location.href = mailto;
        setIsSubmitted(true);
        toast({ title: 'Opening mail client', description: 'Your email app will open so you can send the message.' });

        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitted(false);
        }, 3000);

        setIsSubmitting(false);
        return;
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Failed to send message');
      }

      setIsSubmitted(true);
      toast({ title: 'Message sent!', description: "I'll get back to you within 24 hours." });

      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    } catch (err: any) {
      console.error('Contact submit error', err);
      toast({ title: 'Send failed', description: err?.message || 'Could not send message.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-body text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
              Contact
            </span>

            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Let's create copy that connects
            </h2>

            <p className="font-body text-lg text-muted-foreground">
              Available for advertising, brand messaging, and product copy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:asiimirepatricia26@gmail.com"
                className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-soft transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Email</p>
                  <p className="font-body font-medium text-foreground text-sm">
                    asiimirepatricia26@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+256758969973"
                className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-soft transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">Phone</p>
                  <p className="font-body font-medium text-foreground text-sm">
                    +256 758 969 973
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/patricia-asiimire"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background rounded-xl hover:shadow-soft transition-shadow"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-body font-medium text-foreground text-sm">
                    Connect with me
                  </p>
                </div>
              </a>
            </div>

            {/* Form */}
            <div className="bg-background rounded-2xl p-6 md:p-8">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-12 h-12 text-primary mb-4" />
                  <h4 className="font-display text-xl mb-2">Sent!</h4>
                  <p className="font-body text-muted-foreground text-sm">
                    I'll reply within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream-dark border-0 rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream-dark border-0 rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-cream-dark border-0 rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-foreground text-background px-6 py-3 rounded-lg font-body font-semibold flex items-center justify-center gap-2 hover:bg-charcoal-light transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
