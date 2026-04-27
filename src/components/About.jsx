import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="brutalist-section" style={{ backgroundColor: 'var(--color-gray)', color: 'var(--color-white)' }}>
      <div className="brutalist-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '3rem', borderBottom: '4px solid var(--color-black)', paddingBottom: '0.5rem', display: 'inline-block', color: 'var(--color-black)' }}>
            ABOUT ME
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <div className="brutalist-card" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-black)' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-black)' }}>BACKGROUND</h3>
              <p style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '1rem' }}>
                Currently in my 1st Year of B.E. in Computer Science Engineering with Artificial Intelligence and Machine Learning at Chitkara University, Rajpura.
              </p>
              <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                I have a strong foundation in web development, data structures, and algorithms, transitioning from a passionate student to an impactful developer.
              </p>
            </div>

            <div className="brutalist-card" style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-white)' }}>INTERESTS</h3>
              <ul style={{ listStyle: 'none', fontSize: '1.125rem', fontWeight: 700, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>▸ Artificial Intelligence & Machine Learning</li>
                <li>▸ Full-Stack Web Development</li>
                <li>▸ Problem Solving & Algorithms</li>
                <li>▸ Building impactful open-source tools</li>
              </ul>
            </div>

            <div className="brutalist-card" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-black)' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-black)' }}>CAREER GOALS</h3>
              <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                To become an expert AI Engineer and Full Stack Developer, building robust software solutions that solve real-world problems. Committed to continuous learning and eager to contribute to innovative tech teams.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
