import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Job Queue Based Resume Analyzer",
    description:
      "A backend system that processes resumes asynchronously using a job queue architecture. Users can upload resumes which are queued and analyzed in the background using worker processes. The system extracts key information and evaluates resumes based on predefined criteria, demonstrating scalable task processing.",
    tech: ["Python", "FastAPI", "Redis", "RQ"],
    github: "https://github.com/your-username/resume-analyzer",
    demo: "",
    status: "Live",
    year: "2025",
  },
  {
    id: 2,
    title: "Personal Expense Tracker",
    description:
      "A full-stack application for tracking daily expenses with features like income/expense categorization, transaction history, and basic financial insights. Designed to help users manage their spending efficiently.",
    tech: ["React", "FastAPI", "mySQL"],
    github: "https://github.com/Pujith-y/Expense_Tracker",
    demo: "",
    status: "Completed",
    year: "2025",
  },
  {
    id: 4,
    title: "Sunken Sanctum",
    description:
      "An interactive game project set in an underwater environment, featuring exploration-based mechanics and immersive design. Focused on creating atmosphere, user interaction, and engaging gameplay elements, showcasing creativity alongside technical implementation.",
    tech: ["JavaScript", "Game Logic", "UI/UX Design"],
    github: "https://github.com/Pujith-y/Pathal_Lokh",
    demo: "",
    status: "Completed",
    year: "2025",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "This very portfolio — a single-page application built with React Router, featuring smooth navigation, responsive design, and deployed to GitHub Pages.",
    tech: ["React", "React Router", "CSS3", "GitHub Pages"],
    github: "https://github.com/your-username/portfolio",
    demo: "https://your-username.github.io/portfolio",
    status: "Live",
    year: "2026",
  },
];

const statusColor = {
  "Completed": "status-done",
  "In Progress": "status-wip",
  "Live": "status-live",
};

export default function Projects() {
  return (
    <div className="projects-page">

      <div className="projects-header fade-up">
        <p className="section-label">My Work</p>
        <h1 className="section-title">Projects</h1>
        <p className="projects-sub">
          A collection of things I've built — from university assignments to personal experiments.
          All source code is available on GitHub.
        </p>
      </div>

      <div className="projects-grid fade-up" style={{ animationDelay: "0.1s" }}>
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="card-top">
              <div className="card-meta">
                <span className={`project-status ${statusColor[project.status]}`}>
                  {project.status === "Live" && <span className="live-dot" />}
                  {project.status}
                </span>
                <span className="project-year">{project.year}</span>
              </div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-desc">{project.description}</p>
            </div>

            <div className="card-bottom">
              <div className="tech-stack">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="link-github"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="link-demo"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer fade-up" style={{ animationDelay: "0.2s" }}>
        <p>Want to see more?</p>
        <a href="https://github.com/Pujith-y" target="_blank" rel="noreferrer" className="btn-primary">
          View All on GitHub ↗
        </a>
      </div>
    </div>
  );
}
