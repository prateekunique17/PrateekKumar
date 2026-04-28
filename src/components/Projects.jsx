import { motion } from 'framer-motion';
import { Code, ExternalLink, Image as ImageIcon } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Silent Hunt",
      desc: "Interactive quiz game where users guess locations in Chandigarh with hints. Solves the problem of lack of engaging local tourism apps.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/prateekunique17/the-silent-hunt",
      demo: "https://thesilenthunt.vercel.app/",
      image: "/silent-hunt.png"
    },
    {
      title: "DevShare",
      desc: "Comprehensive platform enabling developers to showcase projects while building in public. Bridges the gap between developers and discovery.",
      tech: "React.js, Node.js, Supabase",
      github: "https://github.com/prateekunique17/devshare",
      demo: "",
      image: "/devshare.png"
    },
    {
      title: "MediQueue",
      desc: "Healthcare platform where patients describe symptoms and receive appointments. Reduces hospital wait times and simplifies bookings.",
      tech: "React.js, FastAPI, Supabase",
      github: "https://github.com/prateekunique17/Mediqueue",
      demo: "",
      image: "/mediqueue.png"
    }
  ];

  return (
    <section id="projects" className="brutalist-section" style={{ backgroundColor: 'var(--color-white)', position: 'relative' }}>
      <div className="brutalist-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ fontSize: '4rem', borderBottom: '8px solid var(--color-black)', paddingBottom: '0.5rem', marginBottom: '4rem' }}>
            PROJECTS
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {projects.map((proj, i) => (
              <motion.div 
                key={i}
                className="brutalist-card"
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: 0, border: '6px solid var(--color-black)' }}
              >
                {/* Image Placeholder */}
                <div style={{ flex: '1 1 min(100%, 400px)', backgroundColor: 'var(--color-black)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px', color: 'var(--color-gray)' }}>
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ textAlign: 'center' }}>
                      <ImageIcon size={64} />
                      <p style={{ marginTop: '1rem', fontWeight: 700, letterSpacing: '2px' }}>PROJECT PREVIEW</p>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div style={{ flex: '1 1 min(100%, 400px)', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>{proj.title}</h3>
                  <p style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '2rem', flex: 1 }}>{proj.desc}</p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>TECH STACK:</div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {proj.tech.split(', ').map((t, idx) => (
                        <span key={idx} style={{ padding: '0.25rem 0.5rem', backgroundColor: 'var(--color-offwhite)', border: '2px solid var(--color-black)', fontWeight: 700 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href={proj.github} target="_blank" rel="noreferrer" className="brutalist-button" style={{ padding: '0.75rem 1rem', fontSize: '1rem' }}>
                      GITHUB
                    </a>
                    {proj.demo && (
                      <a href={proj.demo} target="_blank" rel="noreferrer" className="brutalist-button" style={{ padding: '0.75rem 1rem', fontSize: '1rem', backgroundColor: 'var(--color-gray)', color: 'var(--color-white)', borderColor: 'var(--color-black)' }}>
                        LIVE DEMO <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
