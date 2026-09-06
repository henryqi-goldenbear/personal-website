import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Database,
  FileText,
  GraduationCap,
  GitBranch,
  Layers3,
  Link,
  Mail,
  Medal,
  Server,
  Waves,
} from "lucide-react";
import "./styles.css";

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

const experiences: Experience[] = [
  {
    role: "Software & Automation Engineering Intern",
    company: "Intel Corporation",
    location: "Folsom, CA",
    period: "Aug 2026 - Dec 2026",
    highlights: [
      "Built a domain-specific RAG pipeline over technical chip specifications and command protocols to power an autonomous validation AI agent for hardware triage.",
      "Engineered a CLI developer automation tool that eliminates repetitive command lookups and reduces onboarding friction across engineering teams.",
      "Integrated structured logging and error handling into internal automation workflows to improve hardware debugging speed and system-test visibility.",
    ],
  },
  {
    role: "Backend Engineer",
    company: "Copatible",
    location: "Berkeley, CA",
    period: "Jan 2026 - May 2026",
    highlights: [
      "Engineered a high-throughput Java backend pipeline that improved system throughput and stream efficiency by 30% under production-scale workloads.",
      "Implemented secure multi-tenant data isolation, reducing cross-tenant risk by 40% while accelerating regression testing workflows by 25%.",
    ],
  },
  {
    role: "EECS Tutor",
    company: "UC Berkeley Computer Science Department",
    location: "Berkeley, CA",
    period: "Jan 2024 - May 2025",
    highlights: [
      "Mentored 100+ students during office hours on discrete math, graph theory, and probability distributions.",
      "Designed standardized grading rubrics for exams and assignments, increasing grading consistency and reducing evaluation time by about 25%.",
      "Delivered iterative feedback that helped more than 80% of students improve performance on complex circuit and system-analysis concepts.",
    ],
  },
];

const skills = [
  {
    label: "Languages",
    icon: Code2,
    items: ["Python", "Java", "C++", "SQL", "JavaScript", "TypeScript", "Rust", "HTML/CSS"],
  },
  {
    label: "AI + Infrastructure",
    icon: Server,
    items: ["RAG Pipelines", "Vector Embeddings", "MCP", "LLM Agents", "Redis", "MongoDB Atlas", "Docker", "AWS"],
  },
  {
    label: "Observability",
    icon: Layers3,
    items: ["OpenTelemetry", "Arize", "Structured Logging", "Error Handling"],
  },
  {
    label: "Frameworks + Tools",
    icon: Database,
    items: ["React", "Node.js", "Spring Boot", "FastAPI", "Flask", "PyTest", "JUnit", "gRPC", "Git", "Linux"],
  },
];

const stats = [
  ["50-60x", "higher throughput for AI interview evaluations"],
  ["100+", "students mentored as a Berkeley CS tutor"],
  ["40%", "reduction in cross-tenant risk at Copatible"],
  ["3.75", "GPA in Berkeley EECS"],
];

const rotatingIntro = ["Berkeley EECS", "AI Systems", "Software Engineering"];
const resumeUrl = "/henry_swe%20(8).pdf";

function TypedLoop() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = rotatingIntro[phraseIndex];
    const isComplete = letterCount === phrase.length;
    const isEmpty = letterCount === 0;
    const delay = isComplete && !isDeleting ? 1300 : isDeleting ? 42 : 82;

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % rotatingIntro.length);
        return;
      }

      setLetterCount((current) => current + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterCount, phraseIndex]);

  return (
    <span className="typed-loop" aria-live="polite">
      {rotatingIntro[phraseIndex].slice(0, letterCount)}
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}

function App() {
  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Henry Qi home">
          HQ
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#project">Project</a>
          <a href="#skills">Skills</a>
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a href="mailto:henryqi@berkeley.edu" className="nav-contact">
            Contact
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <TypedLoop />
          </p>
          <p className="hero-name">Henry Qi</p>
          <p className="hero-text">
            I am an EECS student at UC Berkeley building AI systems, RAG pipelines,
            developer automation, and reliable backend infrastructure.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={resumeUrl} target="_blank" rel="noreferrer">
              <FileText size={18} aria-hidden="true" />
              Resume
            </a>
            <a className="button secondary" href="mailto:henryqi@berkeley.edu">
              <Mail size={18} aria-hidden="true" />
              Email me
            </a>
            <a className="button secondary" href="https://linkedin.com/in/henry-qi-2026qi">
              <Link size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a className="button secondary" href="https://github.com/henryqi-goldenbear">
              <Code2 size={18} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Greensboro Aquatic Center pool photo">
          <img
            src="/greensboro-aquatic-center.jpg"
            alt="Competition pool at the Greensboro Aquatic Center"
          />
        </div>
      </section>

      <section className="stat-strip" aria-label="Highlights">
        {stats.map(([value, label]) => (
          <article key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="section split">
        <div>
          <p className="section-kicker">Education</p>
          <h2>UC Berkeley EECS, grounded in systems and machine learning.</h2>
        </div>
        <div className="education-block">
          <GraduationCap size={28} aria-hidden="true" />
          <div>
            <h3>B.S. Electrical Engineering and Computer Science</h3>
            <p>Aug 2022 - May 2026 · GPA 3.75/4.00</p>
            <p>
              Coursework includes machine learning, efficient algorithms, discrete
              math and probability, operating systems, and database systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2>AI automation, production backend systems, and teaching that scales.</h2>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-card" key={`${experience.company}-${experience.period}`}>
              <div className="timeline-top">
                <div>
                  <h3>{experience.role}</h3>
                  <p>
                    {experience.company} · {experience.location}
                  </p>
                </div>
                <span>{experience.period}</span>
              </div>
              <ul>
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section project-band" id="project">
        <div className="project-copy">
          <p className="section-kicker">Selected projects</p>
          <h2>AI evaluation systems</h2>
          <p>
            Multi-agent evaluation pipelines for interview and tutoring workflows,
            built for reliable scoring, auditing, observability, and iteration.
          </p>
        </div>
        <div className="project-grid">
          <article>
            <BookOpen size={24} aria-hidden="true" />
            <strong>Interview evaluation pipeline</strong>
            <span>Processed 50+ transcripts and more than 400 candidate responses into structured JSON cases and rubric-based reports.</span>
          </article>
          <article>
            <Medal size={24} aria-hidden="true" />
            <strong>Tutor evaluation engine</strong>
            <span>Evaluated about 1,000 tutoring sessions for engagement, scaffolding, and goal alignment with automated QA feedback.</span>
          </article>
          <article>
            <GitBranch size={24} aria-hidden="true" />
            <strong>Auditable evaluation infrastructure</strong>
            <span>Combined a Mistral JSON backend, Redis memory, OpenTelemetry, and Arize for high-throughput, observable evaluation workflows.</span>
          </article>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">Technical toolkit</p>
          <h2>Building reliable AI systems from evaluation pipelines to production services.</h2>
        </div>
        <div className="skills-grid">
          {skills.map(({ label, icon: Icon, items }) => (
            <article className="skill-card" key={label}>
              <div className="skill-title">
                <Icon size={24} aria-hidden="true" />
                <h3>{label}</h3>
              </div>
              <div className="chip-row">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <strong>Henry Qi</strong>
          <span>Software engineer · Berkeley EECS · AI systems</span>
        </div>
        <a href="mailto:henryqi@berkeley.edu">
          Start a conversation
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
