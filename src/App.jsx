import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

const Divider = ({ text }) => (
  <div className="brutalist-divider-marquee">
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
      style={{ display: 'flex', gap: '2rem' }}
    >
      {[...Array(20)].map((_, i) => (
        <span key={i}>/// {text} </span>
      ))}
    </motion.div>
  </div>
);

function App() {
  return (
    <>
    <SEO />

      <Navbar />
      <main>
        <Hero />
        <Divider text="PRATEEK KUMAR" />
        <About />
        <Divider text="BUILD IN PUBLIC" />
        <Projects />
        <Divider text="TECH STACK" />
        <Skills />
        <Divider text="RECOGNITION" />
        <Achievements />
        <Divider text="AVAILABLE FOR WORK" />
        <Contact />
      </main>
    </>
  )
}

export default App
