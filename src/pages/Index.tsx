import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Patricia Asiimire — Copywriter & Product Storyteller | Uganda</title>
        <meta
          name="description"
          content="Patricia Asiimire is a Ugandan copywriter and product storyteller specializing in persuasive, local-impact copy for startups and brands. Founder of MOTOFIX."
        />
        <meta
          name="keywords"
          content="copywriter Uganda, product storyteller, brand messaging, startup copy, Patricia Asiimire, MOTOFIX, NexVox AI"
        />
        <meta property="og:title" content="Patricia Asiimire — Copywriter & Product Storyteller" />
        <meta
          property="og:description"
          content="Turning Uganda's real problems into trusted, engaging brand stories that connect and convert."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://patricia-asiimire.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
