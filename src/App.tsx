import { useState } from "react";
import "./App.css";

type Tech = "React" | "TypeScript" | "Next.js" | "Node.js" | "AWS" | "Testing";

type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  techStack: Tech[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "Report Rendering Platform (React + Next.js)",
    role: "Front-End Developer",
    period: "2024 – 2025",
    description:
      "Built a dynamic reporting UI that renders complex JSON/Jasper report definitions into pixel-perfect, printable layouts using React and Next.js.",
    techStack: ["React", "TypeScript", "Next.js"],
    highlights: [
      "Implemented dynamic component rendering (tables, images, text fields) driven by JSON schemas.",
      "Optimized performance by moving heavy transformations to build-time Node scripts.",
      "Improved DX with TypeScript types for report schemas and rendering components.",
    ],
    githubUrl: "https://github.com/your-username/report-rendering-platform",
  },
  {
    title: "Microfrontend Reporting Widget",
    role: "Front-End Engineer",
    period: "2024",
    description:
      "Self-contained microfrontend that can be embedded into other applications to display interactive reports.",
    techStack: ["React", "TypeScript"],
    highlights: [
      "Designed a minimal public API (`init`, `build`, `destroy`) to integrate with host apps.",
      "Used React + TypeScript to build configurable UI components.",
      "Exposed events and callbacks so host apps can react to user interactions.",
    ],
    githubUrl: "https://github.com/your-username/microfrontend-report-widget",
  },
  {
    title: "Data Manipulation Practice (LeetCode-style)",
    role: "Developer",
    period: "2025",
    description:
      "Collection of JavaScript/TypeScript solutions focused on arrays, objects, and real-world data manipulation problems.",
    techStack: ["TypeScript", "Testing"],
    highlights: [
      "Implemented solutions using `map`, `filter`, `reduce`, `Set`, and `Map`.",
      "Added unit tests for each problem using Jest/Vitest.",
      "Documented time/space complexity and alternative solutions.",
    ],
    githubUrl: "https://github.com/your-username/data-manipulation-challenges",
  },
];

const skillsPrimary = [
  "React 18",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3 / Tailwind / Sass",
];

const skillsSecondary = [
  "Node.js",
  "REST APIs",
  "Git & GitHub",
  "Jest / Vitest",
  "Vite",
  "Figma (basic)",
];

function App() {
  const [selectedTech, setSelectedTech] = useState<Tech | "All">("All");

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((p) => p.techStack.includes(selectedTech));

  return (
    <div className="page">
      {/* HERO */}
      <header className="section hero">
        <div>
          <p className="eyebrow">Front-End Developer</p>
          <h1>Bhupinderjeet Kaur</h1>
          <p className="subtitle">
            I build clean, performant UIs using{" "}
            <strong>React, TypeScript, and Next.js</strong>. I care about code
            quality, predictable architecture, and making complex data easy to
            understand.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="btn ghost"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </header>

      {/* SKILLS */}
      <section className="section" id="skills">
        <h2>Tech Stack</h2>
        <p className="section-subtitle">
          Primary tools I use to build production-ready front-ends.
        </p>
        <div className="skills-grid">
          <div>
            <h3>Core Front-End</h3>
            <div className="pill-row">
              {skillsPrimary.map((skill) => (
                <span key={skill} className="pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3>Supporting Skills</h3>
            <div className="pill-row">
              {skillsSecondary.map((skill) => (
                <span key={skill} className="pill pill-soft">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-header">
          <div>
            <h2>Featured Projects</h2>
            <p className="section-subtitle">
              Real projects that show how I use React, TypeScript, and Next.js
              in practice.
            </p>
          </div>
          <div className="filter-row">
            <span className="filter-label">Filter by tech:</span>
            {["All", "React", "TypeScript", "Next.js", "Node.js", "AWS", "Testing"].map(
              (tech) => (
                <button
                  key={tech}
                  className={
                    "filter-chip" +
                    (selectedTech === tech ? " filter-chip--active" : "")
                  }
                  onClick={() => setSelectedTech(tech as any)}
                >
                  {tech}
                </button>
              )
            )}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.title} className="card project-card">
              <div className="card-header">
                <h3>{project.title}</h3>
                <p className="project-meta">
                  {project.role} • {project.period}
                </p>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="pill-row">
                {project.techStack.map((tech) => (
                  <span key={tech} className="pill pill-soft">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="project-highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="card-footer">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
          {filteredProjects.length === 0 && (
            <p>No projects for this tech (yet).</p>
          )}
        </div>
      </section>

      {/* EXPERIENCE / LEARNING */}
      <section className="section" id="learning">
        <h2>How I’m Improving</h2>
        <p className="section-subtitle">
          I’m actively practicing data structures, algorithms, and front-end
          architecture.
        </p>
        <ul className="timeline">
          <li className="timeline-item">
            <h3>Data Manipulation & Algorithms</h3>
            <p>
              Solving array/object problems in JavaScript and TypeScript, with
              focus on clean, readable solutions and test coverage.
            </p>
          </li>
          <li className="timeline-item">
            <h3>Next.js & Performance</h3>
            <p>
              Building SSR/SSG pages, optimizing payload size, and improving TTFB
              & Lighthouse scores.
            </p>
          </li>
          <li className="timeline-item">
            <h3>UI/UX & Accessibility</h3>
            <p>
              Following semantic HTML, keyboard navigation, aria-* attributes,
              and responsive layout best practices.
            </p>
          </li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <h2>Contact</h2>
        <p className="section-subtitle">
          Open to Front-End / ReactJS / Next.js roles (onsite or hybrid).
        </p>
        <div className="contact-box">
          <p>Email: <a href="mailto:kbhupinderjeet48@gmail.com">kbhupinderjeet48@gmail.com</a></p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/bhupinderjeet-kaur/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/bhupinderjeet-kaur/
            </a>
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Bhupinderjeet Kaur</p>
      </footer>
    </div>
  );
}

export default App;
