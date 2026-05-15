// src/components/Projects.jsx
import { useCallback, useEffect, useState } from 'react';
import AnimateIn from './AnimateIn';

const MODAL_EXIT_MS = 180;

const FLAGSHIP = {
  index: '01',
  category: 'Client Project · Website Redesign',
  title: 'IMEX Shipping',
  summary:
    'A concept redesign for a B2B freight business, built around clearer paths to enquiry and a sharper operational story.',
  problem:
    'A self-initiated project exploring how a Dubai-based freight forwarding business could better convert B2B enquiries — stronger visual identity, mobile-first layout, and a cleaner information architecture.',
  outcome:
    'Built in React and Vite from the ground up — new information architecture, designed and developed as a portfolio piece. A responsive component system built for maintainability.',
  stack: ['Next.js', 'Tailwind CSS', 'Figma', 'Vercel'],
  liveUrl: 'https://imex-shipping.vercel.app/',
  screenshots: [
    {
      id: 1,
      title: 'Landing page',
      description: 'Value proposition, service framing, and conversion path.',
      image: '/images/imex-homepage-1.png',
    },
    {
      id: 2,
      title: 'Service overview',
      description: 'Clear service hierarchy for freight and logistics clients.',
      image: '/images/imex-homepage-2.png',
    },
    {
      id: 3,
      title: 'Navigation system',
      description: 'Professional header structure and contact visibility.',
      image: '/images/imex-homepage-3.png',
    },
    {
      id: 4,
      title: 'Conversion section',
      description: 'Concise service proof with a direct call to action.',
      image: '/images/imex-homepage-4.png',
    },
  ],
};

const GRID_PROJECTS = [
  {
    index: '02',
    category: 'Web Studio · Co-Founder',
    title: 'Grayline Studios',
    desc: 'A commercial web studio founded in 2026. Takes client briefs from SMEs, designs in Figma, and ships to production.',
    stack: ['React', 'Next.js', 'Node.js', 'Tailwind'],
    liveUrl: 'https://graylinedxb.vercel.app/',
    liveLabel: 'Visit Studio',
    screenshots: [
      {
        id: 1,
        title: 'Homepage',
        description: 'Studio landing page with a cleaner agency positioning.',
        image: '/images/grayline.png',
      },
      {
        id: 2,
        title: 'Services',
        description: 'Showcasing what the studio has to offer.',
        image: '/images/GraylineWebsite2.png',
      },
      {
        id: 3,
        title: 'Contact',
        description: 'Get in touch with the team.',
        image: '/images/GraylineWebsite3.png',
      },
    ],
  },
  {
    index: '03',
    category: 'Hackathon · Top 10',
    title: 'AI Flashcard Generator',
    desc: 'Built in 2 hours. Accepts a topic, constructs a structured prompt, and returns flashcard sets via Gemini. FastAPI backend, React frontend.',
    stack: ['Python', 'Gemini API', 'FastAPI', 'React'],
    repoUrl: 'https://github.com/SwackyO/hackathon-project',
    screenshots: [
      {
        id: 1,
        title: 'Generator interface',
        description: 'AI-powered flashcard generation workflow.',
        image: '/images/FlashcardGenerator.png',
      },
    ],
  },
];

function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}

function ImageModal({ project, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const screenshots = project?.screenshots ?? [];

  useBodyScrollLock(Boolean(project));

  const closeWithAnimation = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    window.setTimeout(onClose, MODAL_EXIT_MS);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeWithAnimation();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [closeWithAnimation, project]);

  if (!project) return null;

  return (
    <div
      className={`modal-backdrop ${isClosing ? 'is-closing' : ''}`}
      onClick={closeWithAnimation}
      role='presentation'
    >
      <section
        aria-label={`${project.title} screenshot gallery`}
        aria-modal='true'
        className={`modal-panel ${isClosing ? 'is-closing' : ''}`}
        onClick={(event) => event.stopPropagation()}
        role='dialog'
      >
        <div className='flex items-start justify-between gap-5 border-b border-rule bg-panel px-5 py-4 md:px-6'>
          <div>
            <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3'>
              {project.category}
            </p>
            <h3 className='mt-1 font-sans text-xl font-black text-ink md:text-2xl'>
              {project.title}
            </h3>
          </div>
          <button
            aria-label='Close modal'
            className='grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-rule bg-canvas text-xl leading-none text-ink-2 shadow-[0_8px_24px_rgba(20,20,18,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-rule-2 hover:text-ink'
            onClick={closeWithAnimation}
            type='button'
          >
            ×
          </button>
        </div>

        <div className='max-h-[calc(88vh-76px)] overflow-y-auto px-5 py-5 md:px-6 md:py-6'>
          <div className='mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between'>
            <p className='max-w-[620px] font-sans text-sm leading-7 text-ink-2'>
              {project.summary ?? project.desc}
            </p>
            <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3'>
              {screenshots.length} Screenshots
            </p>
          </div>

          <div className='grid grid-cols-2 gap-3 md:gap-4'>
            {screenshots.map((screenshot) => (
              <figure
                className='group overflow-hidden rounded-lg border border-rule bg-white shadow-[0_14px_45px_rgba(20,20,18,0.08)] transition duration-300 hover:-translate-y-1 hover:border-rule-2 hover:shadow-[0_22px_60px_rgba(20,20,18,0.14)]'
                key={screenshot.id}
              >
                <div className='aspect-[16/10] overflow-hidden bg-canvas-2 p-2'>
                  <img
                    alt={`${project.title} - ${screenshot.title}`}
                    className='h-full w-full rounded-md object-contain transition duration-500 group-hover:scale-[1.025]'
                    loading='lazy'
                    src={screenshot.image}
                  />
                </div>
                <figcaption className='border-t border-rule px-4 py-3'>
                  <p className='font-sans text-sm font-semibold text-ink'>
                    {screenshot.title}
                  </p>
                  <p className='mt-1 font-sans text-xs font-medium leading-5 text-ink-3'>
                    {screenshot.description}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function TextLink({ href, children, arrow = '→' }) {
  const opensNewTab = href && href !== '#';
  return (
    <a
      className='link-line group inline-flex items-center gap-[6px] font-sans text-[12.5px] font-semibold text-ink-2 transition-colors duration-150 hover:text-ink'
      href={href}
      rel={opensNewTab ? 'noopener noreferrer' : undefined}
      target={opensNewTab ? '_blank' : undefined}
    >
      {children}
      <span
        aria-hidden='true'
        className='inline-block text-[11px] transition-transform duration-200 group-hover:translate-x-[1.5px] group-hover:-translate-y-[1.5px]'
      >
        {arrow}
      </span>
    </a>
  );
}

function Stack({ items }) {
  return (
    <ul className='flex flex-wrap gap-2' role='list'>
      {items.map((item) => (
        <li
          className='rounded-full border border-rule bg-canvas px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3'
          key={item}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ScreenshotPreviewGrid({
  screenshots,
  projectName,
  onOpen,
  featured = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const gridClass =
    screenshots.length === 1
      ? 'grid-cols-1'
      : screenshots.length === 3
        ? 'grid-cols-3'
        : 'grid-cols-2';
  const galleryId = `${projectName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-gallery`;

  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-between gap-4'>
        <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3'>
          Screenshots
        </p>
        <button
          aria-controls={galleryId}
          aria-expanded={isOpen}
          className='link-line font-sans text-[12px] font-semibold text-ink-2 transition hover:text-ink'
          onClick={() => setIsOpen((value) => !value)}
          type='button'
        >
          {isOpen ? 'Close Gallery' : 'Open Gallery'}
        </button>
      </div>

      {isOpen && (
        <div className={`grid ${gridClass} gap-3`} id={galleryId}>
          {screenshots.map((screenshot) => (
            <button
              aria-label={`Open ${projectName} screenshot lightbox`}
              className='group overflow-hidden rounded-lg border border-rule bg-white shadow-[0_10px_32px_rgba(20,20,18,0.07)] transition duration-300 hover:-translate-y-0.5 hover:border-rule-2 hover:shadow-[0_18px_42px_rgba(20,20,18,0.12)]'
              key={screenshot.id}
              onClick={onOpen}
              type='button'
            >
              <span
                className={`block overflow-hidden bg-canvas-2 p-1.5 ${
                  featured ? 'aspect-[16/10]' : 'aspect-[16/11]'
                }`}
              >
                <img
                  alt={`${projectName} - ${screenshot.title}`}
                  className='h-full w-full rounded-md object-contain transition duration-500 group-hover:scale-[1.035]'
                  loading='lazy'
                  src={screenshot.image}
                />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FlagshipCard({ p, onOpen }) {
  return (
    <article className='group border-t border-rule pt-10 md:pt-12'>
      {/* Single unified card — content left, image right */}
      <div className='overflow-hidden rounded-xl border border-rule bg-panel shadow-[0_14px_55px_rgba(20,20,18,0.06)] transition duration-300 hover:border-rule-2'>
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:items-stretch'>
          {/* Left — content */}
          <div className='flex flex-col p-6 md:p-8'>
            {/* Meta */}
            <div className='mb-6 flex items-start justify-between gap-5'>
              <span className='font-mono text-[11px] font-bold tracking-[0.08em] text-ink-3'>
                {p.index}
              </span>
              <p className='max-w-[220px] text-right font-sans text-[11px] uppercase tracking-[0.08em] text-ink-3'>
                {p.category}
              </p>
            </div>

            {/* Title + summary */}
            <h3 className='font-serif text-4xl leading-[0.98] text-ink md:text-5xl'>
              {p.title}
            </h3>
            <p className='mt-4 font-sans text-base leading-8 text-ink-2'>
              {p.summary}
            </p>

            <div className='my-6 h-px bg-rule' />

            {/* Brief / Delivery */}
            <div className='grid gap-5 sm:grid-cols-2'>
              <div>
                <p className='mb-2 font-sans text-[10.5px] font-semibold uppercase tracking-[0.1em] text-ink-3'>
                  The Brief
                </p>
                <p className='font-sans text-sm leading-7 text-ink-2'>
                  {p.problem}
                </p>
              </div>
              <div>
                <p className='mb-2 font-sans text-[10.5px] font-semibold uppercase tracking-[0.1em] text-ink-3'>
                  The Delivery
                </p>
                <p className='font-sans text-sm leading-7 text-ink-2'>
                  {p.outcome}
                </p>
              </div>
            </div>

            <div className='my-6 h-px bg-rule' />

            {/* Screenshots toggle */}
            <ScreenshotPreviewGrid
              featured
              onOpen={onOpen}
              projectName={p.title}
              screenshots={p.screenshots}
            />

            {/* Stack + links — pinned to bottom */}
            <div className='mt-auto flex flex-col gap-5 border-t border-rule pt-6 md:flex-row md:items-center md:justify-between'>
              <Stack items={p.stack} />
              <div className='flex items-center gap-5'>
                {p.liveUrl && <TextLink href={p.liveUrl}>Live Site</TextLink>}
                {p.caseUrl && (
                  <TextLink href={p.caseUrl} arrow='→'>
                    Case Study
                  </TextLink>
                )}
              </div>
            </div>
          </div>

          {/* Right — image contained with padding, no cropping */}
          <button
            aria-label={`Open ${p.title} screenshot gallery`}
            className='flex items-center justify-center bg-canvas-2 p-6 lg:border-l lg:border-rule lg:p-8'
            onClick={onOpen}
            type='button'
          >
            <img
              alt='IMEX Shipping homepage'
              className='w-full rounded-lg shadow-[0_12px_40px_rgba(20,20,18,0.12)] transition duration-700 group-hover:scale-[1.02]'
              src='/images/imex-homepage-1.png'
            />
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ p, onOpen }) {
  const leadImage = p.screenshots[0]?.image;

  return (
    <article className='group flex h-full flex-col rounded-lg border border-rule bg-panel p-5 shadow-[0_14px_55px_rgba(20,20,18,0.055)] transition duration-300 hover:-translate-y-1 hover:border-rule-2 hover:shadow-[0_22px_65px_rgba(20,20,18,0.1)] md:p-6'>
      <div className='mb-5 flex items-start justify-between gap-5'>
        <span className='font-mono text-[11px] font-bold text-ink-3 tracking-[0.08em]'>
          {p.index}
        </span>
        <p className='text-right font-sans text-[10.5px] uppercase tracking-[0.08em] text-ink-3'>
          {p.category}
        </p>
      </div>

      <button
        aria-label={`Open ${p.title} screenshot gallery`}
        className='mb-6 overflow-hidden rounded-lg border border-rule bg-canvas-2 p-2 transition duration-300 hover:border-rule-2'
        onClick={onOpen}
        type='button'
      >
        <span className='block aspect-[16/10] overflow-hidden rounded-md'>
          <img
            alt={`${p.title} preview`}
            className='h-full w-full object-contain transition duration-500 group-hover:scale-[1.025]'
            src={leadImage}
          />
        </span>
      </button>

      <h3 className='font-serif text-3xl leading-none text-ink md:text-4xl'>
        {p.title}
      </h3>
      <p className='mt-4 max-w-[460px] font-sans text-sm leading-7 text-ink-2'>
        {p.desc}
      </p>

      <div className='mt-5'>
        <Stack items={p.stack} />
      </div>

      <div className='mt-6 border-t border-rule pt-5'>
        <ScreenshotPreviewGrid
          onOpen={onOpen}
          projectName={p.title}
          screenshots={p.screenshots}
        />
      </div>

      <div className='mt-auto flex items-center gap-5 border-t border-rule pt-5'>
        {p.liveUrl && <TextLink href={p.liveUrl}>{p.liveLabel}</TextLink>}
        {p.repoUrl && <TextLink href={p.repoUrl}>GitHub</TextLink>}
      </div>
    </article>
  );
}

export default function Projects() {
  const [modalProject, setModalProject] = useState(null);

  return (
    <section className='bg-canvas py-16 md:py-24' id='projects'>
      <div className='mx-auto max-w-site px-6 md:px-10'>
        <AnimateIn className='mb-10 md:mb-12'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div className='flex items-baseline gap-5'>
              <span className='font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3'>
                Work
              </span>
              <h2 className='font-serif text-4xl leading-none text-ink md:text-5xl'>
                Selected Projects
              </h2>
            </div>
            <p className='max-w-[430px] font-sans text-sm leading-7 text-ink-2 md:text-right'>
              Production work, client delivery, and AI experiments presented
              with tighter previews and cleaner case-study depth.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn>
          <FlagshipCard onOpen={() => setModalProject(FLAGSHIP)} p={FLAGSHIP} />
        </AnimateIn>

        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {GRID_PROJECTS.map((project, index) => (
            <AnimateIn delay={index * 80} key={project.title}>
              <ProjectCard
                onOpen={() => setModalProject(project)}
                p={project}
              />
            </AnimateIn>
          ))}
        </div>
      </div>

      {modalProject && (
        <ImageModal
          key={modalProject.title}
          onClose={() => setModalProject(null)}
          project={modalProject}
        />
      )}
    </section>
  );
}
