import { motion } from 'framer-motion';
import { Trophy, Award, Medal, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    { type: 'Hackathon', icon: <Trophy size={32} />, title: "Winner - Envox Hackathon" },
    { type: 'Hackathon', icon: <Medal size={32} />, title: "Participant - Thapar's Makeathon 8" },
    { type: 'Hackathon', icon: <Medal size={32} />, title: "Participant - Next Quantum Hackathon 3.0" },
    { type: 'Competition', icon: <Award size={32} />, title: "Participant - Startup Sprint (IIT Ropar)" },
    { type: 'Competition', icon: <Award size={32} />, title: "Participant - Hackshastra (Online)" },
    { type: 'Certification', icon: <CheckCircle2 size={32} />, title: "Participant - Watch the Code (Haldwani)" }
  ];

  return (
    <section id="achievements" className="brutalist-section" style={{ backgroundColor: 'var(--color-offwhite)' }}>
      <div className="brutalist-container">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ fontSize: '4rem', borderBottom: '8px solid var(--color-black)', paddingBottom: '0.5rem', marginBottom: '4rem' }}>
            ACHIEVEMENTS
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {achievements.map((achieve, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="brutalist-card"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.5rem',
                  padding: '2rem',
                  backgroundColor: i === 0 ? 'var(--color-black)' : 'var(--color-white)',
                  color: i === 0 ? 'var(--color-white)' : 'var(--color-black)',
                  border: '4px solid var(--color-black)',
                  transform: i % 2 === 0 ? 'rotate(-1deg)' : 'rotate(1deg)'
                }}
              >
                <div style={{ 
                  padding: '1rem', 
                  backgroundColor: i === 0 ? 'var(--color-white)' : 'var(--color-offwhite)', 
                  color: 'var(--color-black)',
                  border: '2px solid var(--color-black)',
                  borderRadius: '50%'
                }}>
                  {achieve.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '0.25rem', color: i === 0 ? 'var(--color-gray)' : 'var(--color-gray)' }}>
                    {achieve.type.toUpperCase()}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', lineHeight: 1.2 }}>{achieve.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
