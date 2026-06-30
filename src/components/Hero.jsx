import { motion } from 'framer-motion';
import { Download, Asterisk, Code2, ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="brutalist-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '120px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Huge Background Text */}
      <motion.div 
        initial={{ x: '-10%' }}
        animate={{ x: '10%' }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        className="bg-text" 
        style={{ top: '15%' }}
      >
        FULL-STACK DEVELOPER
      </motion.div>
      <motion.div 
        initial={{ x: '10%' }}
        animate={{ x: '-10%' }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        className="bg-text" 
        style={{ bottom: '10%' }}
      >
        PRATEEK KUMAR
      </motion.div>

      {/* Floating Elements */}
      <div style={{ position: 'absolute', right: '5%', top: '20%', border: '4px solid var(--color-black)', padding: '1rem', backgroundColor: 'var(--color-white)', transform: 'rotate(5deg)' }}>
        <div style={{ fontSize: '2rem', fontWeight: 900 }}>EST. 2026</div>
        <div className="brutalist-stripe-bg" style={{ width: '100%', height: '20px', marginTop: '10px' }}></div>
      </div>

      <div className="brutalist-container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div className="brutalist-badge" style={{ marginBottom: '2rem', fontSize: 'clamp(1rem, 4vw, 1.5rem)', padding: '0.75rem 1.5rem' }}>
                <span style={{ width: '15px', height: '15px', backgroundColor: 'var(--color-black)', borderRadius: '50%', display: 'inline-block' }}></span>
                AVAILABLE FOR WORK
              </div>
              
              <br />
              <div style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', marginBottom: '0.5rem', color: 'var(--color-white)', border: '4px solid var(--color-black)', display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'var(--color-black)', fontWeight: 'bold' }}>
                HELLO, I AM
              </div>
              
              {/* Optimized H1 with visually hidden context keywords for crawlers */}
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 12vw, 8rem)', 
                lineHeight: 0.85, 
                marginBottom: '2rem',
                marginLeft: '-5px'
              }}>
                PRATEEK<br/>KUMAR
                <span style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  padding: '0',
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  whiteSpace: 'nowrap',
                  border: '0'
                }}>
                  {" "}— Software Engineer & Founder Portfolio
                </span>
              </h1>
            </div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              style={{ padding: '2rem', backgroundColor: 'var(--color-white)', border: '6px solid var(--color-black)', borderRadius: '50%', display: 'none' }}
              className="desktop-only"
            >
              <Asterisk size={100} strokeWidth={1} />
            </motion.div>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}>
            <p className="solid-block" style={{ 
              fontSize: '1.5rem', 
              maxWidth: '600px', 
              fontWeight: 500,
              padding: '1.5rem'
            }}>
              Passionate <span style={{ fontWeight: 700, backgroundColor: 'var(--color-gray)', color: 'var(--color-white)', padding: '0 10px' }}>full-stack developer</span> & creative problem-solver building impactful web applications.
            </p>
            <ArrowDownRight size={80} strokeWidth={2} style={{ color: 'var(--color-gray)' }} />
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="/Prateek_Kumar_Resume.pdf" download className="brutalist-button" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
              DOWNLOAD RESUME <Download size={24} strokeWidth={3} />
            </a>
            
            <a href="#projects" className="brutalist-button" style={{ fontSize: '1.25rem', padding: '1rem 2rem', backgroundColor: 'var(--color-black)', color: 'var(--color-white)', borderColor: 'var(--color-black)' }}>
              VIEW WORK <Code2 size={24} strokeWidth={3} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
