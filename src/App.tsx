import { ArrowUp, ArrowUpRight, ChevronDown, Download, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { resumeContent } from "./content/resume";
import type { Labels, Locale, Project, ResumeContent, SectionBrief as SectionBriefData } from "./content/types";
import { useLocale } from "./hooks/useLocale";
import { useReveal } from "./hooks/useReveal";

function Header({ locale, labels, onChange }: { locale: Locale; labels: Labels; onChange: (locale: Locale) => void }) {
  const links = [
    ["profile", labels.nav.profile],
    ["experience", labels.nav.experience],
    ["work", labels.nav.work],
    ["toolkit", labels.nav.toolkit],
    ["about", labels.nav.about],
    ["contact", labels.nav.contact]
  ];

  return (
    <header className="site-header">
      <a className="monogram" href="#profile" aria-label="David Wei">
        DW<span>.</span>
      </a>
      <nav aria-label={locale === "zh-TW" ? "主要導覽" : "Primary navigation"}>
        {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <div className="locale-switch" aria-label="Language">
        <button
          className={locale === "zh-TW" ? "active" : ""}
          onClick={() => onChange("zh-TW")}
          type="button"
          aria-pressed={locale === "zh-TW"}
        >
          中文
        </button>
        <span>/</span>
        <button
          className={locale === "en" ? "active" : ""}
          onClick={() => onChange("en")}
          type="button"
          aria-pressed={locale === "en"}
          aria-label="English"
        >
          EN
        </button>
      </div>
    </header>
  );
}

function SectionHeading({ index, title, lead }: { index: string; title: string; lead: string }) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-label">
        <span>{index}</span>
        <h2>{title}</h2>
      </div>
      <p>{lead}</p>
    </div>
  );
}

function SectionBrief({ brief }: { brief: SectionBriefData }) {
  return (
    <div className="section-brief" data-reveal>
      <div className="section-brief-summary">
        {brief.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {brief.tags && (
          <ul className="section-brief-tags" aria-label="Key capabilities">
            {brief.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        )}
      </div>
      <div className="evidence-grid">
        {brief.cards.map((card) => (
          <article key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Hero({ content }: { content: ResumeContent }) {
  const { profile, labels } = content;

  return (
    <section className="hero" id="profile" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-context">Professional Resume · {profile.location}</p>
        <h1 id="hero-title"><span>{profile.name}</span><span>{profile.englishName}</span></h1>
        <p className="hero-role">{profile.title}</p>
        <p className="hero-statement">{profile.statement}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-meta">
          <span><MapPin aria-hidden="true" />{profile.location}</span>
          <span>{profile.availability}</span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" />{labels.actions.contact}
          </a>
          <a className="button button-secondary" href={`${import.meta.env.BASE_URL}david-wei-resume-public.pdf`} download>
            <Download aria-hidden="true" />{labels.actions.resume}
          </a>
        </div>
      </div>
      <div className="portrait-frame" aria-label="David Wei portrait placeholder">
        <div className="portrait-grid" aria-hidden="true" />
        <span>DW</span>
        <small>PORTRAIT RESERVED</small>
      </div>
    </section>
  );
}

function Values({ content }: { content: ResumeContent }) {
  return (
    <section className="section values-section">
      <SectionHeading index="01" title={content.labels.sections.values} lead={content.labels.sections.valuesLead} />
      <SectionBrief brief={content.sectionBriefs.values} />
      <div className="values-list">
        {content.values.map((value) => (
          <article key={value.index} data-reveal>
            <span>{value.index}</span>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience({ content }: { content: ResumeContent }) {
  return (
    <section className="section experience-section" id="experience">
      <SectionHeading index="02" title={content.labels.sections.experience} lead={content.labels.sections.experienceLead} />
      <SectionBrief brief={content.sectionBriefs.experience} />
      <div className="timeline">
        {content.experience.map((item) => (
          <article key={`${item.company}-${item.period}`} data-reveal>
            <div className="timeline-period"><span>{item.period}</span><small>{item.location}</small></div>
            <div className="timeline-content">
              <h3>{item.position}</h3>
              <h4>{item.company}</h4>
              <p>{item.summary}</p>
              <ul className="experience-highlights">
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <ul>{item.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectAccordionItem({
  project,
  index,
  isOpen,
  onToggle,
  labels
}: {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  labels: Labels;
}) {
  const action = isOpen ? labels.actions.collapse : labels.actions.expand;
  const detailsId = `${project.id}-details`;

  return (
    <article className={`project ${isOpen ? "expanded" : ""}`} data-reveal>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={detailsId}
        aria-label={`${action} ${project.title}`}
        onClick={onToggle}
      >
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-title">
          <small>{project.sector}</small>
          <strong>{project.title}</strong>
        </span>
        <span className="project-period">{project.period}</span>
        <span className="project-action">{action}<ChevronDown aria-hidden="true" /></span>
      </button>
      {isOpen && (
        <div className="project-details" id={detailsId}>
          <div>
            <span className="detail-label">{labels.meta.role}</span>
            <p>{project.role}</p>
          </div>
          <div className="project-narrative">
            <p>{project.summary}</p>
            <span className="detail-label">{labels.meta.contribution}</span>
            <ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <span className="detail-label">{labels.meta.technology}</span>
            <ul className="tech-list">{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      )}
    </article>
  );
}

function Projects({ content }: { content: ResumeContent }) {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(content.projects[0]?.id ?? null);

  return (
    <section className="section projects-section" id="work">
      <SectionHeading index="03" title={content.labels.sections.projects} lead={content.labels.sections.projectsLead} />
      <SectionBrief brief={content.sectionBriefs.projects} />
      <div className="projects-list">
        {content.projects.map((project, index) => (
          <ProjectAccordionItem
            key={project.id}
            project={project}
            index={index}
            isOpen={expandedProjectId === project.id}
            onToggle={() => setExpandedProjectId((current) => current === project.id ? null : project.id)}
            labels={content.labels}
          />
        ))}
      </div>
    </section>
  );
}

function Toolkit({ content }: { content: ResumeContent }) {
  return (
    <section className="section toolkit-section" id="toolkit">
      <SectionHeading index="04" title={content.labels.sections.skills} lead={content.labels.sections.skillsLead} />
      <SectionBrief brief={content.sectionBriefs.skills} />
      <div className="skill-groups">
        {content.skills.map((group, index) => (
          <article key={group.title} data-reveal>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div><h3>{group.title}</h3><p>{group.description}</p></div>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function About({ content }: { content: ResumeContent }) {
  return (
    <section className="section about-section" id="about">
      <SectionHeading index="05" title={content.labels.sections.about} lead={content.education.heading} />
      <SectionBrief brief={content.sectionBriefs.about} />
      <div className="about-layout">
        <p className="about-intro" data-reveal>{content.education.intro}</p>
        <dl data-reveal>
          {content.education.items.map((item) => (
            <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Contact({ content }: { content: ResumeContent }) {
  return (
    <section className="contact-section" id="contact">
      <span>06</span>
      <h2>{content.labels.sections.contact}</h2>
      <p>{content.labels.sections.contactLead}</p>
      <a href={`mailto:${content.profile.email}`}>
        <Mail aria-hidden="true" />{content.profile.email}<ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  );
}

function updateMetadata(locale: Locale) {
  const isZh = locale === "zh-TW";
  document.title = isZh
    ? "魏大為｜Senior Java Backend Engineer / System Analyst"
    : "David Wei | Senior Java Backend Engineer / System Analyst";
  const description = isZh
    ? "魏大為的雙語公開履歷：近九年企業系統經驗，專長 Java Spring Boot、系統分析、雲端交付與資安維運。"
    : "David Wei's bilingual resume: nearly nine years in enterprise systems, Java Spring Boot, system analysis, cloud delivery, and security operations.";
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
}

export default function App() {
  const { locale, setLocale } = useLocale();
  const content = resumeContent[locale];
  useReveal();
  useEffect(() => updateMetadata(locale), [locale]);

  return (
    <>
      <Header locale={locale} labels={content.labels} onChange={setLocale} />
      <main>
        <Hero content={content} />
        <Values content={content} />
        <Experience content={content} />
        <Projects content={content} />
        <Toolkit content={content} />
        <About content={content} />
        <Contact content={content} />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} David Wei</p>
        <a href="#profile" aria-label={content.labels.actions.backToTop}>
          {content.labels.actions.backToTop}<ArrowUp aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
