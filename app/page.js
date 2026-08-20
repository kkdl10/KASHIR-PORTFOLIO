'use client';

import "./globals.css";

const skills = [
  ["Networking", "TCP/IP · Network Configuration · Troubleshooting"],
  ["Operating Systems", "Windows · Linux · macOS"],
  ["Hardware & Design", "Multisim · Tinkercad · Computer Hardware"],
  ["Tools", "Microsoft Office · AutoCAD · Arduino IDE · Packet Tracer"],
];

const certifications = [
  ["CCNA: Switching, Routing, and Wireless Essentials", "Cisco", "ccna.jpg"],
  ["Data Analytics Essentials", "Cisco", "data-analytics.jpg"],
  ["Computer Hardware Basics", "Cisco", "hardware.jpg"],
  ["Operating Systems Basics", "Cisco", "operating-systems.jpg"],
  ["NDG Linux Essentials", "Cisco Partner", "linux.jpg"],
  ["Introduction to Packet Tracer", "Cisco", "packet-tracer.jpg"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">KASIER<span>.</span></a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certificates</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">COMPUTER ENGINEERING GRADUATE</p>
          <h1>Hi, I’m <span>Kasier.</span></h1>
          <p className="lead">
            An aspiring IT professional with hands-on experience in IT support,
            troubleshooting, hardware, software, and basic networking.
          </p>
          <div className="actions">
            <a className="button primary" href="#contact">Let’s Connect</a>
            <a className="button secondary" href="#projects">View Thesis Project</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="avatar">
            <img src="/profile.jpg" alt="Kasier De Leon" />
          </div>
          <p>IT Support · Networking · Troubleshooting</p>
          <div className="mini-line"><span>Location</span><b>Cabanatuan City, Nueva Ecija</b></div>
          <div className="mini-line"><span>Experience</span><b>360 Hours IT Internship</b></div>
        </div>
      </section>

      <section id="about" className="section two-col">
        <div>
          <p className="eyebrow">01 — ABOUT ME</p>
          <h2>Building my career<br />in <span>technology.</span></h2>
        </div>
        <div className="section-text">
          <p>
            I’m a Computer Engineering graduate from Wesleyan University – Philippines
            with hands-on experience in IT support gained through On-the-Job Training.
          </p>
          <p>
            I’m familiar with computer hardware, software troubleshooting, basic
            networking, and other technical tasks. I’m adaptable, detail-oriented,
            and eager to learn new technologies while contributing effectively in a
            collaborative work environment.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <p className="eyebrow">02 — SKILLS</p>
        <h2>Technical <span>toolkit.</span></h2>
        <div className="grid skills-grid">
          {skills.map(([title, items], index) => (
            <article className="card" key={title}>
              <div className="card-number">0{index + 1}</div>
              <h3>{title}</h3>
              <p>{items}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <p className="eyebrow">03 — EXPERIENCE</p>
        <div className="experience">
          <div>
            <p className="date">ON-THE-JOB TRAINING · 360 HOURS</p>
            <h2>IT Intern</h2>
            <h3>Datamatics</h3>
          </div>
          <ul>
            <li>Assisted with basic IT troubleshooting and technical support.</li>
            <li>Helped set up and maintain computers, peripherals, and other IT equipment.</li>
            <li>Assisted in resolving software and hardware-related issues.</li>
            <li>Performed basic system maintenance and troubleshooting tasks.</li>
            <li>Supported day-to-day IT operations and other technical requests.</li>
            <li>Collaborated with staff to ensure smooth operation of computer systems and equipment.</li>
          </ul>
        </div>
      </section>

      {/* UPDATED FEATURED PROJECT SECTION */}
      <section id="projects" className="section">
        <p className="eyebrow">04 — FEATURED PROJECT</p>
        <h2>Academic <span>thesis.</span></h2>
        
        <div className="experience" style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'start' }}>
          <div>
            <p className="date">CAPSTONE / THESIS PROJECT</p>
            <h2>BitGrader: AI-Enhanced LMS for Programming</h2>
            <h3>Computer Engineering Capstone Project</h3>

            {/* Award Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              padding: '6px 12px',
              borderRadius: '8px',
              margin: '16px 0',
              color: '#22c55e',
              fontSize: '0.85rem',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              <span>🏆</span> Awarded 2nd Best Capstone Project
            </div>

            <p style={{ margin: '12px 0 20px', color: 'var(--muted)', lineHeight: '1.6' }}>
              Engineered a specialized web-based Learning Management System designed to automate code evaluation, streamline grading workflows, and provide instant AI-assisted feedback.
            </p>

            <ul>
              <li>Developed an automated code execution pipeline using Judge0 and integrated AI for rubric-based grading.</li>
              <li>Built anti-cheating mechanisms including tab-switch tracking and copy-paste prevention to maintain test integrity.</li>
              <li>Achieved an Overall Usability score of <strong>3.80 / 4.00</strong> and <strong>0.940</strong> Cronbach's Alpha (ISO/IEC 25010 evaluation).</li>
            </ul>

            <div style={{ marginTop: '28px' }}>
              <a 
                className="button primary" 
                href="https://www.bitgrader.app/login" 
                target="_blank" 
                rel="noreferrer"
              >
                Visit Thesis Website ↗
              </a>
            </div>
          </div>

          {/* Certificate Image Frame */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)'
            }}>
              <img 
                src="/certificates/bitgrader-award.jpg" 
                alt="2nd Best Capstone Project Certificate" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
              />
              <p style={{
                padding: '10px 14px',
                fontSize: '0.8rem',
                color: 'var(--muted)',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                margin: 0
              }}>
                📜 Certificate of Recognition — 2nd Best Capstone Project
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="section">
        <p className="eyebrow">05 — CERTIFICATIONS</p>
        <h2>Proof of <span>learning.</span></h2>
        <p className="muted">Click a certificate to view it in full size.</p>
        <div className="grid cert-grid">
          {certifications.map(([title, issuer, image]) => (
            <article className="cert-card" key={title}>
              <a href={`/certificates/${image}`} target="_blank" rel="noreferrer">
                <div className="cert-image">
                  <img src={`/certificates/${image}`} alt={title} />
                </div>
              </a>
              <div className="cert-info">
                <p>{issuer}</p>
                <h3>{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section education">
        <p className="eyebrow">06 — EDUCATION</p>
        <h2>Academic <span>background.</span></h2>
        
        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>
              Bachelor of Science in <span>Computer Engineering</span>
            </h3>
            <p style={{ color: 'var(--muted)', marginTop: '4px' }}>
              Wesleyan University – Philippines · 2022–2026
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>
              STEM Strand <span>(Science, Technology, Engineering, and Mathematics)</span>
            </h3>
            <p style={{ color: 'var(--muted)', marginTop: '4px' }}>
              Honorato C. Perez Sr. Memorial Science High School · 2016–2022
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="eyebrow">07 — CONTACT</p>
        <h2>Let’s work<br /><span>together.</span></h2>
        <a className="email" href="mailto:deleonkasier10@gmail.com">deleonkasier10@gmail.com</a>
        <p>Cabanatuan City, Nueva Ecija · +63 920 283 3810</p>
      </section>

      <footer>© 2026 Kasier Klimt M. De Leon · Built for the next opportunity.</footer>
    </main>
  );
}