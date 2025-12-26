import img1 from '../assets/nexvox.jpg';
import img2 from '../assets/jovi.jpg';
import img3 from '../assets/jov.jpg';
import img4 from '../assets/content1.png';
import img5 from '../assets/nexvox.jpg';
import img6 from '../assets/banner.jpg';
import img7 from '../assets/patricia-headshot.jpg';
import img8 from '../assets/sorry.jpg';
import img9 from '../assets/teardrop.jpg';

type PostCard = {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  excerpt?: string;
  linkedinUrl?: string;
  challenge?: string;
  role?: string;
  results?: string;
};

const posts: PostCard[] = [
  {
    id: 1,
    title: 'NexVox AI — Building Awareness for Local-Language AI',
    subtitle: 'Lost in Translation',
    image: img1,
    excerpt: 'Introducing voice AI agents that speak the languages of your customers.',
    linkedinUrl: 'https://www.linkedin.com/posts/nexvox-ai_nexvoxai-ugandatech-voiceai-activity-7399479341543460866-LpBa?utm_source=share&utm_medium=member_desktop&rcm=ACoAADre6ZsBX3Id2l8mIZ0OiOyiARvtx2vXcaE',
    challenge: 'Introduce AI voice agents that speak like true Ugandans to a skeptical audience.',
    role: 'Wrote playful, relatable social copy and tagline ("Lost in Translation") to highlight the language barrier problem in a fun, memorable way.',
    results: 'Sparked conversations and engagement, making complex tech feel accessible and exciting.',
  },
  {
    id: 2,
    title: 'MOTOFIX — Driver Pain Research & Social Engagement',
    subtitle: 'We Asked 10 Drivers What Pisses Them Off Most',
    image: img2,
    excerpt: 'Raw, headline-driven social copy capturing authentic driver voices.',
    linkedinUrl: 'https://www.linkedin.com/posts/motofix-uganda-2a7a17361_entrepreneurship-startups-mvp-activity-7371133658394537984-HRL_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADre6ZsBX3Id2l8mIZ0OiOyiARvtx2vXcaE',
    challenge: 'Uncover real user frustrations to inform product and build community trust.',
    role: 'Wrote raw, headline-driven social copy that captured authentic driver voices and positioned MOTOFIX as the solution.',
    results: 'High engagement and comments, valuable insights for product messaging.',
  },
  {
    id: 3,
    title: 'MOTOFIX — Street Research & Trust-Building Campaign',
    subtitle: 'What would it take to trust a mechanic again?',
    image: img3,
    excerpt: 'Empathetic, question-driven social copy to spark honest conversations.',
    linkedinUrl: 'https://www.linkedin.com/posts/motofix-uganda-2a7a17361_ugandatech-motofix-nomoregettingstranded-activity-7349459269454385152-4UGy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADre6ZsBX3Id2l8mIZ0OiOyiARvtx2vXcaE',
    challenge: 'Address deep mistrust in informal mechanics through on-ground research.',
    role: 'Wrote empathetic, question-driven social copy to spark honest conversations and humanize the problem.',
    results: 'Strong community interaction, real feedback that shaped product vision.',
  },
  {
    id: 4,
    title: 'MOTOFIX — Team Vision & Product Thinking',
    subtitle: 'What if car breakdowns were predictable—and preventable?',
    image: img4,
    excerpt: 'Thoughtful, aspirational caption showcasing team brainstorming.',
    linkedinUrl: 'https://www.linkedin.com/posts/motofix-uganda-2a7a17361_motofix-automotivecare-mobilityinuganda-activity-7351211691453440002-uHyP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADre6ZsBX3Id2l8mIZ0OiOyiARvtx2vXcaE',
    challenge: 'Share startup process and position MOTOFIX as innovative solution.',
    role: 'Wrote thoughtful, aspirational caption to showcase team brainstorming and forward-thinking approach.',
    results: 'Humanized the brand, built follower connection and anticipation.',
  },
  {
    id: 5,
    title: "MOTOFIX — On-Ground Activation & Community Gratitude",
    subtitle: 'A Day to Remember',
    image: img6,
    excerpt: 'Reflective, grateful copy that turned promotion into storytelling.',
    linkedinUrl: 'https://www.linkedin.com/posts/patricia-asiimire-38b936236_motofixuganda-bodaboda-kampalahustle-ugcPost-7391944599365226496-ay1D?utm_source=share&utm_medium=member_desktop&rcm=ACoAADre6ZsBX3Id2l8mIZ0OiOyiARvtx2vXcaE',
    challenge: 'Capture energy of street promotion and thank community.',
    role: 'Wrote reflective, grateful copy that turned promotion into storytelling.',
    results: 'High engagement, items distributed, reinforced "Your Car\'s Best Friend" brand.',
  },
];

const Portfolio = () => {
  const allImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  const imagesPerPost = Math.ceil(allImages.length / posts.length);
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
            Real work for Ugandan startups and brands.
          </p>
        </div>

        {/* Posts grid - card layout (LinkedIn-style posts) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => {
            const start = (p.id - 1) * imagesPerPost;
            const thumbs = allImages.slice(start, start + imagesPerPost);
            return (
              <article key={p.id} className="group bg-card rounded-2xl overflow-hidden shadow-sm">
                <div className="block">
                  <div className="w-full h-56 md:h-48 lg:h-40 overflow-hidden bg-muted-foreground/5">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-lg mb-1">{p.title}</h3>
                    {p.subtitle && <p className="text-sm text-muted-foreground mb-2">{p.subtitle}</p>}
                    {p.excerpt && <p className="text-sm text-muted-foreground mb-3">{p.excerpt}</p>}

                    {/* Short bullets: Challenge / Role / Results */}
                    <ul className="text-sm text-muted-foreground space-y-2 mb-3">
                      {p.challenge && (
                        <li>
                          <strong className="text-foreground">Challenge:</strong> {p.challenge}
                        </li>
                      )}
                      {p.role && (
                        <li>
                          <strong className="text-foreground">Role:</strong> {p.role}
                        </li>
                      )}
                      {p.results && (
                        <li>
                          <strong className="text-foreground">Results:</strong> {p.results}
                        </li>
                      )}
                    </ul>

                    {/* Thumbnail strip (uses all assets distributed across posts) */}
                    {thumbs.length > 0 && (
                      <div className="flex items-center gap-2 mb-3">
                        {thumbs.map((t, i) => (
                          <img key={i} src={t} alt={`thumb-${i}`} className="w-20 h-12 object-cover rounded-md border" />
                        ))}
                      </div>
                    )}

                    <a
                      href={p.linkedinUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 text-primary font-semibold"
                    >
                      View full LinkedIn post →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
