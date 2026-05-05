import { useState } from 'react';
import { Code, Link, Mail, Phone, ArrowUpRight, TerminalSquare, Send } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "3d1f3e85-8c83-4113-bc2a-348e4bbfee6c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset(); // clear the form
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <footer id="contact" style={{ backgroundColor: 'var(--color-white)', borderTop: '4px solid var(--color-black)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        
        {/* Left side massive text & Form */}
        <div style={{ flex: '1 1 50%', padding: '4rem 2rem', borderRight: '4px solid var(--color-black)', minWidth: '350px' }}>
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
            lineHeight: 0.9, 
            marginBottom: '2rem',
            marginLeft: '-5px' 
          }}>
            LET'S<br/>CONNECT
          </h2>
          <p style={{ fontSize: '1.5rem', fontWeight: 500, maxWidth: '400px', borderLeft: '4px solid var(--color-gray)', paddingLeft: '1rem', marginBottom: '3rem' }}>
            Open for new opportunities, collaborations, and building impactful projects.
          </p>

          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
            <div>
              <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.25rem' }}>NAME</label>
              <input type="text" name="name" required style={{ width: '100%', padding: '1rem', border: '4px solid var(--color-black)', fontSize: '1.25rem', backgroundColor: 'var(--color-offwhite)', outline: 'none' }} placeholder="YOUR NAME" />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.25rem' }}>EMAIL</label>
              <input type="email" name="email" required style={{ width: '100%', padding: '1rem', border: '4px solid var(--color-black)', fontSize: '1.25rem', backgroundColor: 'var(--color-offwhite)', outline: 'none' }} placeholder="YOUR EMAIL" />
            </div>
            <div>
              <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.25rem' }}>MESSAGE</label>
              <textarea rows="4" name="message" required style={{ width: '100%', padding: '1rem', border: '4px solid var(--color-black)', fontSize: '1.25rem', backgroundColor: 'var(--color-offwhite)', outline: 'none', resize: 'vertical' }} placeholder="YOUR MESSAGE"></textarea>
            </div>
            
            <button type="submit" disabled={result === "Sending..."} className="brutalist-button" style={{ width: 'fit-content', marginTop: '1rem', opacity: result === "Sending..." ? 0.7 : 1 }}>
              {result === "Sending..." ? "SENDING..." : "SEND MESSAGE"} <Send size={24} />
            </button>
            
            {result && result !== "Sending..." && (
              <p style={{ 
                fontWeight: 'bold', 
                marginTop: '1rem', 
                color: result.includes("success") ? 'var(--color-black)' : 'red',
                borderLeft: `4px solid ${result.includes("success") ? 'var(--color-black)' : 'red'}`,
                paddingLeft: '1rem'
              }}>
                {result}
              </p>
            )}
          </form>
        </div>

        {/* Right side links */}
        <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', minWidth: '350px' }}>
          
          <a href="mailto:prateekunique17@gmail.com" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '2rem', borderBottom: '4px solid var(--color-black)', flex: 1,
            textDecoration: 'none', color: 'var(--color-black)',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-black)'; e.currentTarget.style.color = 'var(--color-white)'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-black)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mail size={32} />
              <span style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>EMAIL</span>
            </div>
            <ArrowUpRight size={40} />
          </a>

          <a href="https://linkedin.com/in/prateek-kumar-a31ab5323/" target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '2rem', borderBottom: '4px solid var(--color-black)', flex: 1,
            textDecoration: 'none', color: 'var(--color-black)',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-black)'; e.currentTarget.style.color = 'var(--color-white)'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-black)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link size={32} />
              <span style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>LINKEDIN</span>
            </div>
            <ArrowUpRight size={40} />
          </a>

          <a href="https://github.com/prateekunique17" target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '2rem', borderBottom: '4px solid var(--color-black)', flex: 1,
            textDecoration: 'none', color: 'var(--color-black)',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-black)'; e.currentTarget.style.color = 'var(--color-white)'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-black)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Code size={32} />
              <span style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>GITHUB</span>
            </div>
            <ArrowUpRight size={40} />
          </a>

          <a href="https://codeforces.com/profile/kindprateek17" target="_blank" rel="noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '2rem', flex: 1,
            textDecoration: 'none', color: 'var(--color-black)',
            transition: 'background-color 0.2s',
          }}
          onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-black)'; e.currentTarget.style.color = 'var(--color-white)'; }}
          onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--color-black)'; }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <TerminalSquare size={32} />
              <span style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}>CODEFORCES</span>
            </div>
            <ArrowUpRight size={40} />
          </a>

        </div>
      </div>
      
    </footer>
  );
}
