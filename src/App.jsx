import React, { useEffect, useState } from 'react'
import './index.css'

const profile = {
  name: 'Aniketh Chinnachinnanagari',
  title: 'AI/ML Engineer | Python Full-Stack Developer',
  location: 'Oklahoma, OK, USA',
  phone: '+1 (872) 221-2776',
  email: 'c.anikethr@gmail.com',
  linkedinUrl: '#',
  githubUrl: '#',
  resumeUrl: '#',
}

const nav = [
  { id: 'overview', label: 'Overview' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const summary = [
  'Senior software engineer with 5+ years building Python-centric backend, cloud-native, and GenAI-powered systems in production.',
  'Expert in Python microservices, LLM pipelines, RAG architectures, AI automation, and event-driven systems with hands-on AWS deployment.',
  'Proven record modernizing legacy platforms, reducing latency up to 90%, automating high-volume workflows, and delivering HIPAA-compliant solutions.',
]

const impact = [
  { label: 'Latency Reduction', value: '90%' },
  { label: 'Workflow Automation', value: '80%' },
  { label: 'Infrastructure Savings', value: '30%' },
  { label: 'Concurrent Load', value: '3x' },
]

const focusAreas = [
  {
    title: 'GenAI Systems',
    body: 'RAG pipelines, LLM evaluation, and safety guardrails for reliable automation.',
  },
  {
    title: 'Python Infrastructure',
    body: 'FastAPI services, event-driven workflows, and low-latency processing at scale.',
  },
  {
    title: 'Cloud and MLOps',
    body: 'AWS deployment, observability, and cost-aware scaling for production AI.',
  },
]

const experience = [
  {
    company: 'Marquis Labs',
    location: 'Oklahoma, OK, USA',
    role: 'Sr. Software Engineer',
    dates: 'Aug 2024 - Present',
    stack: ['FastAPI', 'AWS', 'SQL Server', 'LangChain'],
    highlights: [
      'Rebuilt a legacy claims platform in FastAPI, cutting claim-view latency from 60s to under 6s and supporting 3x higher concurrency.',
      'Optimized SQL Server workflows with CTEs, indexing, and batching to reduce 3-5 minute queries to 10-12 seconds.',
      'Built GenAI inquiry pipelines with LangChain and AWS Bedrock for summarization, intent extraction, and classification at 1K+ inquiries/month.',
      'Deployed backend and AI services on AWS (Lambda, ECS, EC2, Bedrock, SageMaker), reducing infrastructure cost by ~30%.',
    ],
  },
  {
    company: "Cincinnati Children's Hospital Medical Center",
    location: 'Cincinnati, OH, USA',
    role: 'AI Researcher',
    dates: 'Jul 2024 - May 2025',
    stack: ['PyTorch', 'TensorFlow', 'OpenCV', 'Python'],
    highlights: [
      'Curated 140+ histopathology datasets and evaluated 1M+ images with PyTorch, TensorFlow, and OpenCV for ML readiness.',
      'Built reproducible preprocessing and evaluation pipelines, cutting dataset preparation time by ~50%.',
      'Designed metadata schemas across 20+ tissue types and 10+ staining protocols, improving dataset reuse by ~60%.',
    ],
  },
  {
    company: 'People Tech Group Inc.',
    location: 'Redmond, WA, USA',
    role: 'Software Developer',
    dates: 'Nov 2023 - Apr 2024',
    stack: ['FastAPI', 'AWS', 'Kafka', 'Textract'],
    highlights: [
      'Built a document intelligence platform with FastAPI, AWS Lambda, ECS, and Textract, reducing manual verification by ~60%.',
      'Orchestrated GenAI workflows with Kafka and async services, enabling non-blocking summarization and classification at scale.',
      'Optimized SQL persistence and processing pipelines to improve stability and throughput under peak loads.',
    ],
  },
  {
    company: 'Cognizant',
    location: 'Hyderabad, TG, India',
    role: 'Software Developer',
    dates: 'Nov 2021 - Jul 2022',
    stack: ['AWS Lambda', 'Python', 'Docker', 'Kubernetes'],
    highlights: [
      'Built Python backend and full-stack systems, improving transaction performance by ~50%.',
      'Migrated services to AWS Lambda, lowering infrastructure costs by ~45% while maintaining 99.9% uptime.',
      'Designed event-driven workflows for high-volume transactions and improved observability and reliability.',
    ],
  },
]

const projects = [
  {
    name: 'Rental Marketplaces',
    description:
      'Flutter, Firebase, and Cloud Run platform handling 20K+ interactions with 99.98% uptime. Integrated Places API and NLP automation to boost engagement by 40%.',
    tags: ['Flutter', 'Firebase', 'Cloud Run', 'NLP'],
    metrics: ['20K+ interactions', '99.98% uptime', '40% engagement lift'],
    accent: '#c97c5d',
    featured: true,
    links: { live: '#', code: '#' },
  },
  {
    name: 'Image Denoising with Autoencoders',
    description:
      'PyTorch model reconstructing 92% of noisy images, improving denoising accuracy by 20% and reducing cost by 30%.',
    tags: ['PyTorch', 'Autoencoders', 'Computer Vision'],
    metrics: ['92% reconstruction', '20% accuracy gain', '30% cost reduction'],
    accent: '#3b5ea5',
    featured: true,
    links: { live: '#', code: '#' },
  },
  {
    name: 'Debt Tracker',
    description:
      'Real-time repayments tracker with a 35% lift in user satisfaction and 25% faster response times via AWS optimization.',
    tags: ['AWS', 'Realtime', 'FinTech'],
    metrics: ['35% satisfaction', '25% faster response'],
    accent: '#194d3f',
    featured: false,
    links: { live: '#', code: '#' },
  },
  {
    name: 'Breast Cancer Classification',
    description:
      'Keras model with 98% accuracy, reducing diagnosis time by 35% and improving accuracy via data augmentation.',
    tags: ['Keras', 'Healthcare', 'ML'],
    metrics: ['98% accuracy', '35% faster diagnosis'],
    accent: '#8367c7',
    featured: false,
    links: { live: '#', code: '#' },
  },
]

const skillGroups = [
  {
    title: 'Core Stack',
    items: ['Python', 'SQL', 'FastAPI', 'Flask', 'React.js', 'JavaScript'],
  },
  {
    title: 'GenAI and ML',
    items: ['LLM APIs', 'LangChain', 'RAG', 'Embeddings', 'PyTorch', 'TensorFlow'],
  },
  {
    title: 'Cloud and Data',
    items: ['AWS Lambda', 'S3', 'Textract', 'Kafka', 'Snowflake', 'BigQuery'],
  },
  {
    title: 'Ops and Reliability',
    items: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Monitoring', 'HIPAA'],
  },
]

const education = {
  degree: 'Master of Engineering in Computer Science',
  school: 'University of Cincinnati, USA',
  dates: 'Aug 2022 - Apr 2024',
}

const certifications = [
  {
    name: 'Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Apr 2023',
    logo:
      'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    short: 'MS',
  },
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'Feb 2022',
    logo:
      'https://pages.awscloud.com/rs/112-TZM-766/images/AWS-Certified_Solutions-Architect_Associate_512x512.d82aee07920970350c427c8d0542bc239180a486.png',
    short: 'AWS',
  },
  {
    name: 'Architecting with Google Compute Engine',
    issuer: 'Google Cloud',
    date: 'Aug 2019',
    logo: 'https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png',
    short: 'GCP',
  },
  {
    name: 'QEEE Certification in Programming in C and Data Structures',
    issuer: 'QEEE',
    date: 'Nov 2017',
    logo: '',
    short: 'QEEE',
  },
]

export default function App() {
  const nameParts = profile.name.split(' ')
  const firstName = nameParts.shift() || profile.name
  const lastName = nameParts.join(' ')

  const getInitialTheme = () => {
    if (typeof window === 'undefined') return 'light'
    const stored = window.localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = document.querySelectorAll('[data-animate]')

    if (prefersReduced) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    const handleScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? (window.scrollY / max) * 100 : 0
      doc.style.setProperty('--scroll-progress', `${progress}%`)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogoError = (event) => {
    const wrapper = event.currentTarget.closest('.cert-logo-wrap')
    if (wrapper) {
      wrapper.classList.add('cert-logo-wrap--text')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="app">
      <div className="ambient" aria-hidden="true">
        <span className="orb orb--one" />
        <span className="orb orb--two" />
        <span className="orb orb--three" />
      </div>
      <header className="topbar">
        <div className="topbar__shell">
          <div className="topbar__rail">
            <nav className="topbar__nav">
              {nav.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="topbar__actions">
              <button
                type="button"
                className="button button--ghost button--toggle"
                onClick={toggleTheme}
                aria-pressed={theme === 'dark'}
              >
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a href={profile.resumeUrl} className="button button--ghost">
                Resume
              </a>
              <a href={profile.githubUrl} className="button button--ghost">
                GitHub
              </a>
            </div>
            <button
              type="button"
              className="topbar__menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        <div className={`topbar__drawer ${menuOpen ? 'is-open' : ''}`}>
          <div className="topbar__drawer-card">
            <div className="topbar__drawer-links">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            </div>
            <div className="topbar__drawer-actions">
            <button
              type="button"
              className="button button--ghost button--toggle"
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <a
              href={profile.resumeUrl}
              className="button button--ghost"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
            <a
              href={profile.githubUrl}
              className="button button--ghost"
              onClick={() => setMenuOpen(false)}
            >
              GitHub
            </a>
            </div>
          </div>
        </div>
        <div className="scroll-progress" />
      </header>

      <main className="page">
        <section id="overview" className="hero">
          <div className="hero__main reveal" data-animate>
          <p className="hero__intro">Hi, I am</p>
          <h1 className="hero__title">
            <span className="gradient-text">
              <span className="name-line name-line--first">{firstName}</span>
              <span className="name-line name-line--last">{lastName}</span>
            </span>
          </h1>
            <p className="subtitle">{profile.title}</p>
            <p className="meta">
              {profile.location} | {profile.phone} |{' '}
              <a href={`mailto:${profile.email}`} className="link">
                {profile.email}
              </a>
            </p>
            <p className="hero__lead">
              Building production-grade AI systems, Python backends, and data
              workflows that scale across healthcare and enterprise platforms.
            </p>
            <div className="actions">
              <a href={`mailto:${profile.email}`} className="button">
                Contact
              </a>
              <a href={profile.resumeUrl} className="button button--ghost">
                View Resume
              </a>
              <a href="#projects" className="button button--ghost">
                View Projects
              </a>
            </div>
            <div className="summary">
              {summary.map((line, index) => (
                <p
                  key={line}
                  className="reveal"
                  data-animate
                  style={{ '--delay': `${index * 80}ms` }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="hero__bento">
            <div
              className="bento-card bento-card--wide reveal"
              data-animate
              style={{ '--delay': '60ms' }}
            >
              <p className="label">Specialties</p>
              <h3>GenAI | RAG | MLOps</h3>
              <p className="muted">
                Building reliable AI systems with production-grade infrastructure,
                observability, and compliance.
              </p>
            </div>
            <div
              className="bento-card reveal"
              data-animate
              style={{ '--delay': '140ms' }}
            >
              <p className="label">Focus</p>
              <h3>Python | AWS | Event-Driven</h3>
              <p className="muted">
                FastAPI microservices, scalable pipelines, and low-latency systems.
              </p>
            </div>
            <div
              className="bento-card bento-card--tall reveal"
              data-animate
              style={{ '--delay': '200ms' }}
            >
              <p className="label">Impact</p>
              <div className="stat-grid">
                {impact.map((item) => (
                  <div key={item.label} className="stat">
                    <span>{item.value}</span>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="bento-card bento-card--wide reveal"
              data-animate
              style={{ '--delay': '260ms' }}
            >
              <p className="label">Quick Links</p>
              <div className="link-grid">
                <a href={`mailto:${profile.email}`} className="link">
                  Email
                </a>
                <a href={profile.linkedinUrl} className="link">
                  LinkedIn
                </a>
                <a href={profile.githubUrl} className="link">
                  GitHub
                </a>
                <a href={profile.resumeUrl} className="link">
                  Resume
                </a>
              </div>
            </div>
            <div
              className="bento-card bento-card--accent bento-card--wide reveal"
              data-animate
              style={{ '--delay': '320ms' }}
            >
              <p className="label">Availability</p>
              <h3>Open to AI and ML roles</h3>
              <p className="muted">
                Interested in product teams building data-rich, compliant platforms.
              </p>
            </div>
          </div>
        </section>

      <section id="capabilities" className="section">
        <div className="section__title reveal" data-animate>
          <div>
            <p className="section__index">01</p>
            <h2>Capabilities</h2>
          </div>
          <span className="divider" />
        </div>
        <div className="grid">
          {focusAreas.map((item, index) => (
            <article
              key={item.title}
              className="card accent reveal"
              data-animate
              style={{ '--delay': `${index * 80}ms` }}
            >
              <h3>{item.title}</h3>
              <p className="muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section__title reveal" data-animate>
          <div>
            <p className="section__index">02</p>
            <h2>Featured Projects</h2>
          </div>
          <span className="divider" />
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <article
              key={project.name}
              className="project-card project-card--featured reveal"
              data-animate
              style={{
                '--project-accent': project.accent,
                '--delay': `${index * 120}ms`,
              }}
            >
              <div className="project-card__media">
                <div className="project-card__media-overlay">
                  <p>Featured</p>
                </div>
              </div>
              <div className="project-card__body">
                <div className="project-card__head">
                  <div>
                    <h3>{project.name}</h3>
                    <span className="project__pill">Featured</span>
                  </div>
                  <div className="project-card__actions">
                    <a href={project.links.live} className="button button--ghost">
                      Live Demo
                    </a>
                    <a href={project.links.code} className="button button--ghost">
                      View Code
                    </a>
                  </div>
                </div>
                <p className="muted">{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag tag--soft">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="metric-row">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="metric">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__title reveal" data-animate>
          <div>
            <p className="section__index">02B</p>
            <h2>More Projects</h2>
          </div>
          <span className="divider" />
        </div>
        <div className="grid">
          {otherProjects.map((project, index) => (
            <article
              key={project.name}
              className="card reveal"
              data-animate
              style={{ '--delay': `${index * 80}ms` }}
            >
              <div className="card__head">
                <h3>{project.name}</h3>
                <div className="project-card__actions">
                  <a href={project.links.live} className="button button--ghost">
                    Live Demo
                  </a>
                  <a href={project.links.code} className="button button--ghost">
                    View Code
                  </a>
                </div>
              </div>
              <p className="muted">{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag tag--soft">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section__title reveal" data-animate>
          <div>
            <p className="section__index">03</p>
            <h2>Experience</h2>
          </div>
          <span className="divider" />
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article
              key={item.company}
              className="card timeline__card reveal"
              data-animate
              style={{ '--delay': `${index * 80}ms` }}
            >
              <div className="card__head">
                <div>
                  <h3>{item.role}</h3>
                  <p className="muted">
                    {item.company} | {item.location}
                  </p>
                </div>
                <span className="tag">{item.dates}</span>
              </div>
              <div className="tag-row">
                {item.stack.map((tech) => (
                  <span key={tech} className="tag tag--soft">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section__title reveal" data-animate>
          <div>
            <p className="section__index">04</p>
            <h2>Skills</h2>
          </div>
          <span className="divider" />
        </div>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="card reveal"
              data-animate
              style={{ '--delay': `${index * 80}ms` }}
            >
              <h3>{group.title}</h3>
              <div className="pill-grid">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="section split">
        <div>
          <div className="section__title reveal" data-animate>
            <div>
              <p className="section__index">05</p>
              <h2>Education</h2>
            </div>
            <span className="divider" />
          </div>
          <article className="card reveal" data-animate style={{ '--delay': '80ms' }}>
            <h3>{education.degree}</h3>
            <p className="muted">{education.school}</p>
            <span className="tag">{education.dates}</span>
          </article>
        </div>
        <div>
          <div className="section__title reveal" data-animate>
            <div>
              <p className="section__index">06</p>
              <h2>Certifications</h2>
            </div>
            <span className="divider" />
          </div>
          <article className="card reveal" data-animate style={{ '--delay': '120ms' }}>
            <div className="cert-grid">
              {certifications.map((item) => (
                <div key={item.name} className="cert-item">
                  <div
                    className={`cert-logo-wrap${
                      item.logo ? '' : ' cert-logo-wrap--text'
                    }`}
                  >
                    {item.logo && (
                      <img
                        src={item.logo}
                        alt={`${item.name} logo`}
                        className="cert-logo"
                        loading="lazy"
                        onError={handleLogoError}
                      />
                    )}
                    <span className="cert-placeholder">{item.short}</span>
                  </div>
                  <div>
                    <p className="cert-name">{item.name}</p>
                    <p className="cert-meta">
                      {item.issuer} | {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="contact" className="contact reveal" data-animate>
          <div className="contact__copy">
            <p className="section__index">07</p>
            <h2>Let's build something that lasts.</h2>
          <p className="muted">
            Open to AI/ML engineering, Python backend, and full-stack roles.
          </p>
          <div className="contact__links">
            <a href={`mailto:${profile.email}`} className="link">
              {profile.email}
            </a>
            <a href={profile.linkedinUrl} className="link">
              LinkedIn
            </a>
            <a href={profile.githubUrl} className="link">
              GitHub
            </a>
          </div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@email.com" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me about your project" />
          </label>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
        </section>
      </main>
    </div>
  )
}

