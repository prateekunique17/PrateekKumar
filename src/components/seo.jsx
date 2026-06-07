import { useEffect } from 'react';

const SEO = () => {
  useEffect(() => {
    // 1. Force the browser tab title to show your high-priority searchable keywords
    document.title = "Prateek Kumar | Founder of Mediqueue | Software Engineer Portfolio";

    // 2. Clear out any preexisting or default metadata nodes to prevent search conflicts
    const existingMeta = document.querySelectorAll(
      'meta[name="description"], meta[name="keywords"], script[type="application/ld+json"]'
    );
    existingMeta.forEach(el => el.remove());

    // 3. Inject Search Engine Snippet Description
    const descMeta = document.createElement('meta');
    descMeta.name = "description";
    descMeta.content = "Official software engineering portfolio of Prateek Kumar, founder of Mediqueue, DevShare, Gap2Growth, and TheSilentHunt. Exploring production applications and modern tech stacks.";
    document.head.appendChild(descMeta);

    // 4. Inject Targeted Search Keyword Identifiers
    const keyMeta = document.createElement('meta');
    keyMeta.name = "keywords";
    keyMeta.content = "Prateek Kumar, Mediqueue, DevShare, Gap2Growth, TheSilentHunt, Prateek Kumar developer, portfolio, founder of Mediqueue";
    document.head.appendChild(keyMeta);

    // 5. Inject Structured JSON-LD Schema to tie your identity permanently to your products
    const schemaScript = document.createElement('script');
    schemaScript.type = "application/ld+json";
    schemaScript.innerText = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Prateek Kumar",
      "jobTitle": "Software Engineer & Founder",
      "url": "https://vercel.app",
      "sameAs": [
        "https://linkedin.com", // Verified Chitkara/Coriolis Engineering Profile Link
        "https://github.com"                 // Your active public code repository hub
      ],
      "publishingPrinciples": [
        {
          "@type": "DigitalDocument",
          "name": "Mediqueue",
          "description": "Healthcare management system and queuing optimization platform built by Prateek Kumar."
        },
        {
          "@type": "DigitalDocument",
          "name": "DevShare",
          "description": "Developer asset collaboration and code sharing infrastructure platform built by Prateek Kumar."
        },
        {
          "@type": "DigitalDocument",
          "name": "Gap2Growth",
          "description": "Skill assessment, analytical performance tracking, and strategic growth engine built by Prateek Kumar."
        },
        {
          "@type": "DigitalDocument",
          "name": "TheSilentHunt",
          "description": "Security-focused threat emulation, vulnerability tracking, or capture-the-flag workspace built by Prateek Kumar."
        }
      ]
    });
    document.head.appendChild(schemaScript);
  }, []);

  return null; // Explictly renders nothing on screen to keep your UI 100% untouched
};

export default SEO;
