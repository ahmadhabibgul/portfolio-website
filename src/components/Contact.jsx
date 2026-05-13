// src/components/Contact.jsx
import AnimateIn from './AnimateIn';

const LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ahmadhabibgul/',
    external: true,
  },
  { label: 'GitHub', href: 'https://github.com/ahmadhabibgul', external: true },
  { label: 'Download CV', href: 'public/resume.pdf', external: false },
];

export default function Contact() {
  return (
    <section id='contact' className='relative overflow-hidden bg-obsidian'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-parchment/20 to-transparent'
      />
      <div
        aria-hidden='true'
        className='absolute right-[-10%] top-[-30%] h-[420px] w-[420px] rounded-full bg-link/20 blur-3xl'
      />
      <div className='relative mx-auto max-w-site px-6 pt-20 pb-14 md:px-10 md:pt-28 md:pb-20'>
        <div className='grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end'>
          <div className='max-w-[820px]'>
            {/* Eyebrow */}
            <AnimateIn>
              <p className='mb-8 font-mono text-[11px] uppercase tracking-[0.12em] text-parchment-2'>
                Contact
              </p>
            </AnimateIn>

            {/* Large headline */}
            <AnimateIn delay={80}>
              <h2 className='mb-10 font-serif text-6xl leading-[0.95] text-parchment sm:text-7xl md:text-8xl'>
                Let's work
                <br />
                <span className='italic text-parchment/60'>together.</span>
              </h2>
            </AnimateIn>

            {/* Email */}
            <AnimateIn delay={160}>
              <div className='mb-8 border-b border-parchment/10 pb-8'>
                <a
                  href='mailto:ahmadhabibgul@gmail.com'
                  className='
                 link-line link-line-light group
                 font-sans text-2xl font-semibold text-parchment/65
                 leading-tight
                 hover:text-parchment transition-colors duration-200
               '
                >
                  ahmadhabibgul@gmail.com
                  <span
                    aria-hidden='true'
                    className='ml-3 text-parchment/30 transition-transform duration-200
                   group-hover:translate-x-1 inline-block'
                  >
                    →
                  </span>
                </a>
              </div>
            </AnimateIn>

            {/* Secondary links + availability */}
            <AnimateIn delay={240}>
              <div className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex items-center gap-6 flex-wrap'>
                  {LINKS.map(({ label, href, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className='
                     link-line link-line-light group
                     inline-flex items-center gap-[5px]
                     font-sans text-[12.5px] text-parchment-2
                     hover:text-parchment transition-colors duration-150
                   '
                    >
                      {label}
                      <span
                        aria-hidden='true'
                        className='text-[10px] transition-transform duration-200
                       group-hover:translate-x-[1px] group-hover:-translate-y-[1px]'
                      >
                        ↗
                      </span>
                    </a>
                  ))}
                </div>

                {/* Availability */}
                <div className='flex flex-shrink-0 items-center gap-2'>
                  <span
                    className='w-[7px] h-[7px] rounded-full bg-[#22C55E] animate-pulse-dot'
                    aria-hidden='true'
                  />
                  <span className='font-sans text-[12px] font-medium text-parchment-2'>
                    Open to Summer 2026 internship roles
                  </span>
                </div>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={160}>
            <aside className='rounded-lg border border-parchment/10 bg-parchment/[0.035] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur'>
              <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-parchment-2'>
                Response focus
              </p>
              <div className='mt-5 grid gap-4'>
                {['Frontend roles', 'AI product work', 'Client websites'].map(
                  (item) => (
                    <div
                      className='flex items-center justify-between border-t border-parchment/10 pt-4'
                      key={item}
                    >
                      <span className='font-sans text-sm font-semibold text-parchment/80'>
                        {item}
                      </span>
                      <span
                        aria-hidden='true'
                        className='h-2 w-2 rounded-full bg-parchment/25'
                      />
                    </div>
                  ),
                )}
              </div>
            </aside>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
