import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'var(--color-white)',
      borderBottom: '4px solid var(--color-black)',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="brutalist-container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '1.5rem', margin: 0, cursor: 'pointer' }}
          onClick={() => window.scrollTo(0, 0)}
        >
          Prateek
        </motion.h1>
        <div style={{ display: 'flex', gap: '1.5rem', fontWeight: 700, flexWrap: 'wrap' }}>
          <a href="#about" className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>ABOUT</a>
          <a href="#projects" className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>PROJECTS</a>
          <a href="#skills" className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>SKILLS</a>
          <a href="#achievements" className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>ACHIEVEMENTS</a>
          <a href="#contact" className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
}
