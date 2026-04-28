import { motion } from 'framer-motion';

export default function Skills() {
  const categories = [
    {
      title: "LANGUAGES",
      skills: ["HTML5", "CSS3", "JavaScript", "Python", "C++"]
    },
    {
      title: "FRAMEWORKS",
      skills: ["React.js", "Node.js", "FastAPI", "Tailwind CSS"]
    },
    {
      title: "AI / ML",
      skills: ["Machine Learning", "Data Structures", "Algorithms"]
    },
    {
      title: "TOOLS",
      skills: ["Git", "GitHub", "Supabase", "Streamlit", "Antigravity"]
    }
  ];

  return (
    <section id="skills" style={{ 
      backgroundColor: 'var(--color-black)', 
      color: 'var(--color-offwhite)',
      padding: '6rem 0',
      borderTop: '8px solid var(--color-gray)',
      borderBottom: '8px solid var(--color-gray)',
      position: 'relative'
    }}>
      <div className="brutalist-container">
        
        <h2 style={{ fontSize: '4rem', borderBottom: '8px solid var(--color-gray)', paddingBottom: '0.5rem', marginBottom: '4rem' }}>
          SKILLS
        </h2>

        <div className="mobile-carousel" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', overflowX: 'auto', paddingBottom: '1rem' }}>
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                border: '4px solid var(--color-gray)',
                padding: '2rem',
                backgroundColor: 'var(--color-black)',
                boxShadow: '8px 8px 0px var(--color-white)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(-4px, -4px)'; e.currentTarget.style.boxShadow = '12px 12px 0px var(--color-white)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0, 0)'; e.currentTarget.style.boxShadow = '8px 8px 0px var(--color-white)'; }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--color-white)', letterSpacing: '1px' }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {cat.skills.map((skill, idx) => (
                  <span key={idx} style={{ 
                    padding: '0.5rem 1rem', 
                    border: '2px solid var(--color-gray)', 
                    fontWeight: 700, 
                    backgroundColor: 'var(--color-white)', 
                    color: 'var(--color-black)',
                    textTransform: 'uppercase'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
