import "./Home.css";

const skills = [
  "React", "JavaScript", "Python", "Node.js","fastAPI", "mySQL",
  "HTML/CSS", "Git", "SQL", "Java", "REST APIs", "CSS","C#", "MongoDB", "Express"
];

const interests = [
  {
    icon: "⬡",
    title: "Web Development",
    desc: "Building responsive, accessible, and performant web applications using modern frameworks and best practices."
  },
  {
    icon: "◎",
    title: "Open Source",
    desc: "Contributing to community projects, reviewing code, and collaborating with developers worldwide."
  }
];

const details = [
  { label: "Name", value: "Yadam Pujith" },
  { label: "Phone", value: "+91 94930 80348" },
  { label: "Personal Email", value: "pujith14l06@gmail.com" },
  { label: "College Email", value: "se23ucse188@mahindrauniversity.edu.in" },
  { label: "GitHub", value: "github.com/Pujith-y" },
  { label: "Location", value: "Hyderabad, Telangana" },
];

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ── */}
      <section className="hero fade-up">
        <div className="hero-text">
          <p className="section-label">Portfolio · 2026</p>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Yadam Pujith</span>
          </h1>
          <p className="hero-subtitle">
            Full-Stack Developer &amp; Computer Science Student passionate about crafting
            elegant solutions to complex problems.
          </p>
          <div className="hero-badges">
            <span className="tag accent">B.Tech CSE</span>
            <span className="tag">Available for Internships</span>
          </div>
          <div className="hero-cta">
            <a href="https://github.com/Pujith-y" target="_blank" rel="noreferrer" className="btn-primary">
              GitHub Profile ↗
            </a>
            <a href="mailto:pujith14l06@gmail.com" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="hero-avatar-wrap">
          <div className="avatar-ring" />
          <div className="avatar-img">
            <span className="avatar-initials">YP</span>
          </div>
          <div className="avatar-badge">
            <span className="dot-live" />
            Open to Work
          </div>
        </div>
      </section>

      {/* ── ABOUT ME ── */}
      <section className="about-section fade-up" style={{ animationDelay: "0.1s" }}>
        <p className="section-label">About Me</p>
        <h2 className="section-title">Who I Am</h2>
        <div className="about-grid">
          <p className="about-text">
            I'm a <strong>Computer Science student</strong> with a passion for building things that live on the internet.
            I love turning complex problems into simple, beautiful, and intuitive solutions.
            When I'm not coding, you'll find me exploring new technologies, reading tech blogs,
            or contributing to open-source projects.
          </p>
          <p className="about-text">
            I believe in writing <strong>clean, maintainable code</strong> and continuously improving
            my skills. My goal is to work on impactful projects that make a real difference in people's lives.
          </p>
        </div>
      </section>

      {/* ── RESEARCH INTERESTS ── */}
      <section className="interests-section fade-up" style={{ animationDelay: "0.15s" }}>
        <p className="section-label">Research Interests</p>
        <h2 className="section-title">What I Explore</h2>
        <div className="interests-grid">
          {interests.map((item) => (
            <div key={item.title} className="interest-card">
              <div className="interest-icon">{item.icon}</div>
              <h3 className="interest-title">{item.title}</h3>
              <p className="interest-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="skills-section fade-up" style={{ animationDelay: "0.2s" }}>
        <p className="section-label">Technical Skills</p>
        <h2 className="section-title">My Toolkit</h2>
        <div className="skills-wrap">
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">{skill}</span>
          ))}
        </div>
      </section>

      {/* ── PERSONAL DETAILS ── */}
      <section className="details-section fade-up" style={{ animationDelay: "0.25s" }}>
        <p className="section-label">Personal Details</p>
        <h2 className="section-title">Contact &amp; Info</h2>
        <div className="details-grid">
          {details.map(({ label, value }) => (
            <div key={label} className="detail-card">
              <span className="detail-label">{label}</span>
              <span className="detail-value">{value}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
