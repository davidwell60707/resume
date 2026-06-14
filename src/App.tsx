import { ArrowDownRight, ArrowUp, ArrowUpRight, ChevronDown, Download, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { resumeContent } from "./content/resume";
import type { Labels, Locale, ResumeContent } from "./content/types";
import { useLocale } from "./hooks/useLocale";
import { useReveal } from "./hooks/useReveal";

function Header({ locale, labels, onChange }: { locale: Locale; labels: Labels; onChange: (locale: Locale) => void }) {
  const links = [
    ["profile", labels.nav.profile],
    ["work", labels.nav.work],
    ["experience", labels.nav.experience],
    ["toolkit", labels.nav.toolkit],
    ["about", labels.nav.about],
    ["contact", labels.nav.contact]
  ];
  return (
    <header className="site-header">
      <a className="monogram" href="#profile" aria-label="David Wei">DW<span>.</span></a>
      <nav aria-label={locale === "zh-TW" ? "主要導覽" : "Primary navigation"}>
        {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <div className="locale-switch" aria-label="Language">
        <button className={locale === "zh-TW" ? "active" : ""} onClick={() => onChange("zh-TW")} type="button" aria-pressed={locale === "zh-TW"}>中文</button>
        <span>/</span>
        <button className={locale === "en" ? "active" : ""} onClick={() => onChange("en")} type="button" aria-pressed={locale === "en"} aria-label="English">EN</button>
      </div>
    </header>
  );
}

function SectionHeading({ index, title, lead }: { index: string; title: string; lead: string }) {
  return (
    <div className="section-heading" data-reveal>
      <span>{index}</span>
      <div><h2>{title}</h2><p>{lead}</p></div>
    </div>
  );
}

function Hero({ content }: { content: ResumeContent }) {
  const { profile, labels } = content;
  return (
    <section className="hero" id="profile" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-role">{profile.title}</p>
        <h1 id="hero-title"><span>{profile.name}</span><span>{profile.englishName}</span></h1>
        <p className="hero-statement">{profile.statement}</p>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-meta">
          <span><MapPin aria-hidden="true" />{profile.location}</span>
          <span>{profile.availability}</span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href={`mailto:${profile.email}`}><Mail aria-hidden="true" />{labels.actions.contact}</a>
          <a className="button button-secondary" href={`${import.meta.env.BASE_URL}david-wei-resume-public.pdf`} download><Download aria-hidden="true" />{labels.actions.resume}</a>
        </div>
      </div>
      <div className="portrait-frame" aria-label="David Wei portrait placeholder">
        <div className="portrait-grid" aria-hidden="true" />
        <span>DW</span><small>PORTRAIT / RESERVED</small><ArrowDownRight aria-hidden="true" />
      </div>
      <div className="hero-index" aria-hidden="true">01 — 06</div>
    </section>
  );
}

function Values({ content }: { content: ResumeContent }) {
  return (
    <section className="section values-section">
      <SectionHeading index="01" title={content.labels.sections.values} lead={content.labels.sections.valuesLead} />
      <div className="values-list">
        {content.values.map((value) => (
          <article key={value.index} data-reveal><span>{value.index}</span><h3>{value.title}</h3><p>{value.description}</p></article>
        ))}
      </div>
    </section>
  );
}

function Projects({ content }: { content: ResumeContent }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <section className="section projects-section" id="work">
      <SectionHeading index="02" title={content.labels.sections.projects} lead={content.labels.sections.projectsLead} />
      <div className="project-list">
        {content.projects.map((project, index) => {
          const open = expanded === project.id;
          const action = open ? content.labels.actions.collapse : content.labels.actions.expand;
          return (
            <article className={`project ${open ? "expanded" : ""}`} key={project.id} data-reveal>
              <button type="button" aria-expanded={open} aria-controls={`${project.id}-details`} aria-label={`${action} ${project.title}`} onClick={() => setExpanded(open ? null : project.id)}>
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-title"><small>{project.sector}</small><strong>{project.title}</strong></span>
                <span className="project-period">{project.period}</span><ChevronDown aria-hidden="true" />
              </button>
              <div className="project-details" id={`${project.id}-details`} hidden={!open}>
                <div><span className="detail-label">{content.labels.meta.role}</span><p>{project.role}</p></div>
                <div className="project-narrative"><p>{project.summary}</p><span className="detail-label">{content.labels.meta.contribution}</span><ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></div>
                <div><span className="detail-label">{content.labels.meta.technology}</span><ul className="tech-list">{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul></div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Experience({ content }: { content: ResumeContent }) {
  return (
    <section className="section experience-section" id="experience">
      <SectionHeading index="03" title={content.labels.sections.experience} lead={content.labels.sections.experienceLead} />
      <div className="timeline">
        {content.experience.map((item) => (
          <article key={`${item.company}-${item.period}`} data-reveal>
            <div className="timeline-period"><span>{item.period}</span><small>{item.location}</small></div>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content"><h3>{item.position}</h3><h4>{item.company}</h4><p>{item.summary}</p><ul>{item.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Toolkit({ content }: { content: ResumeContent }) {
  return (
    <section className="section toolkit-section" id="toolkit">
      <SectionHeading index="04" title={content.labels.sections.skills} lead={content.labels.sections.skillsLead} />
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
      <div className="about-layout">
        <p className="about-intro" data-reveal>{content.education.intro}</p>
        <dl data-reveal>{content.education.items.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
      </div>
    </section>
  );
}

function Contact({ content }: { content: ResumeContent }) {
  return (
    <section className="contact-section" id="contact">
      <span>06</span><h2>{content.labels.sections.contact}</h2><p>{content.labels.sections.contactLead}</p>
      <a href={`mailto:${content.profile.email}`}><Mail aria-hidden="true" />{content.profile.email}<ArrowUpRight aria-hidden="true" /></a>
    </section>
  );
}

function updateMetadata(locale: Locale) {
  const isZh = locale === "zh-TW";
  document.title = isZh ? "魏大為｜Senior Java Backend Engineer / System Analyst" : "David Wei | Senior Java Backend Engineer / System Analyst";
  const description = isZh
    ? "魏大為的雙語履歷網站：近九年企業系統、Java Spring Boot、System Analysis、雲端部署與資安維運經驗。"
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
      <main><Hero content={content} /><Values content={content} /><Projects content={content} /><Experience content={content} /><Toolkit content={content} /><About content={content} /><Contact content={content} /></main>
      <footer><p>© {new Date().getFullYear()} David Wei</p><a href="#profile" aria-label={content.labels.actions.backToTop}>{content.labels.actions.backToTop}<ArrowUp aria-hidden="true" /></a></footer>
    </>
  );
}
