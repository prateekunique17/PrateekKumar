import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy } from 'lucide-react';

export default function Experience() {
  const projects = [
    {
      title: "Silent Hunt",
      desc: "Interactive quiz game where users guess locations in Chandigarh with hints.",
      tech: "HTML, CSS, JavaScript"
    },
    {
      title: "DevShare",
      desc: "Comprehensive platform enabling developers to showcase projects while building in public.",
      tech: "React.js, Node.js, Supabase, Antigravity"
    },
    {
      title: "MediQueue",
      desc: "Healthcare platform where patients describe symptoms and receive appointments.",
      tech: "React.js, FastAPI, Supabase"
    }
  ];

  const education = [
    {
      school: "Chitkara University, Rajpura",
      degree: "B.E. in Computer Science Engineering (AI & ML) | 1st Year"
    },
    {
      school: "SD SR SEC School, Chandigarh",
      degree: "Senior Secondary (Classes XI - XII)"
    }
  ];

  const hackathons = [
    "Winner - Envox Hackathon",
    "Participant - Thapar's Makeathon 8",
    "Participant - Next Quantum Hackathon 3.0",
    "Participant - Startup Sprint (IIT Ropar)",
    "Participant - Hackshastra (Online)",
    "Participant - Watch the Code (Haldwani)"
  ];

  return (
    <section id="projects" className="brutalist-section" style={{ backgroundColor: 'var(--color-white)', position: 'relative' }}>
      <div className="brutalist-container">
        
        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Briefcase size={48} strokeWidth={2} />
            <h2 style={{ fontSize: '3rem', borderBottom: '4px solid var(--color-black)', paddingBottom: '0.5rem', margin: 0 }}>
              PROJECTS
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {projects.map((proj, i) => (
              <motion.div 
                key={i}
                className="brutalist-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {/* Decorative index number */}
                <span style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-10px',
                  fontSize: '8rem',
                  fontWeight: 700,
                  opacity: 0.1,
                  lineHeight: 1,
                  pointerEvents: 'none'
                }}>0{i + 1}</span>

                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>{proj.title}</h3>
                <p style={{ marginBottom: '2rem', color: 'var(--color-black)', fontSize: '1.125rem', fontWeight: 500, position: 'relative', zIndex: 1 }}>{proj.desc}</p>
                <div style={{ 
                  backgroundColor: 'var(--color-gray)', 
                  color: 'var(--color-white)', 
                  padding: '0.5rem 1rem', 
                  display: 'inline-block',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  border: '3px solid var(--color-black)',
                  boxShadow: '4px 4px 0px var(--color-black)',
                  position: 'relative', zIndex: 1
                }}>
                  TECH: {proj.tech}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginTop: '8rem' }}>
          
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            style={{ flex: '1 1 400px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <GraduationCap size={48} strokeWidth={2} />
              <h2 style={{ fontSize: '3rem', borderBottom: '4px solid var(--color-black)', paddingBottom: '0.5rem', margin: 0 }}>
                EDUCATION
              </h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: 'var(--color-offwhite)', padding: '2rem', border: '4px solid var(--color-black)' }}>
              {education.map((edu, i) => (
                <div key={i} style={{ 
                  borderLeft: '6px solid var(--color-black)', 
                  paddingLeft: '1.5rem',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-16px',
                    top: '0',
                    width: '24px',
                    height: '24px',
                    backgroundColor: 'var(--color-gray)',
                    border: '4px solid var(--color-black)'
                  }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{edu.school}</h3>
                  <p style={{ fontSize: '1.125rem', color: 'var(--color-black)', fontWeight: 500, marginTop: '0.5rem' }}>{edu.degree}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hackathons Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            style={{ flex: '1 1 400px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <Trophy size={48} strokeWidth={2} />
              <h2 style={{ fontSize: '3rem', borderBottom: '4px solid var(--color-black)', paddingBottom: '0.5rem', margin: 0 }}>
                AWARDS
              </h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {hackathons.map((achieve, i) => (
                <div key={i} style={{ 
                  padding: '1rem 1.5rem', 
                  backgroundColor: 'var(--color-black)', 
                  color: 'var(--color-white)',
                  border: '3px solid var(--color-gray)',
                  fontWeight: 700, 
                  fontSize: '1.125rem',
                  transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05) rotate(0deg)'}
                onMouseOut={(e) => e.currentTarget.style.transform = i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'}
                >
                  {achieve}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
