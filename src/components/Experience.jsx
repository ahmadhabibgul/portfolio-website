// src/components/Experience.jsx
import AnimateIn from './AnimateIn';

const TIMELINE = [
  {
    period: '2026',
    company: 'Grayline Studios',
    role: 'Co-Founder',
    desc: 'Co-founded and operate a web studio with active client work. Responsible for project scoping, technical delivery, and client management — every project designed, built, and shipped end-to-end.',
  },
  {
    period: '2025',
    company: 'Digital Exactly',
    role: 'Frontend development intern',
    desc: 'Worked on production client projects within an agency delivery cycle. Implemented UI components, resolved cross-browser issues, and contributed to shipping cycles alongside senior engineers.',
  },
];

export default function Experience() {
  return (
    <section id='experience' className='bg-canvas py-16 md:py-24'>
      <div className='mx-auto max-w-site px-6 md:px-10'>
        {/* Header */}
        <AnimateIn className='mb-10 md:mb-12'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div className='flex items-baseline gap-5'>
              <span className='font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3'>
                Experience
              </span>
              <h2 className='font-serif text-4xl leading-none text-ink md:text-5xl'>
                Where I've worked
              </h2>
            </div>
            <p className='max-w-[420px] font-sans text-sm leading-7 text-ink-2 md:text-right'>
              Practical delivery experience across agency work, direct client
              projects, and an independently operated web studio.
            </p>
          </div>
        </AnimateIn>

        {/* Editorial two-column layout */}
        <div className='space-y-4'>
          {TIMELINE.map((e, i) => (
            <AnimateIn key={e.company} delay={i * 80}>
              <div
                className='
               group grid grid-cols-1 gap-4 rounded-lg border border-rule bg-panel p-5 shadow-[0_12px_42px_rgba(20,20,18,0.045)] transition duration-300 hover:-translate-y-0.5 hover:border-rule-2 md:grid-cols-[180px_1fr] md:gap-12 md:p-6
             '
              >
                {/* Left — date */}
                <div className='pt-0.5'>
                  <p className='font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3'>
                    {e.period}
                  </p>
                </div>

                {/* Right — content */}
                <div>
                  <h3 className='mb-[3px] font-sans text-[18px] font-black text-ink'>
                    {e.company}
                  </h3>
                  <p className='mb-3 font-sans text-[13px] font-medium text-ink-3'>
                    {e.role}
                  </p>
                  <p className='max-w-[620px] font-sans text-[14px] leading-7 text-ink-2'>
                    {e.desc}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}

          {/* Freelance row */}
          <AnimateIn>
            <div
              className='
             grid grid-cols-1 gap-4 rounded-lg border border-rule bg-panel p-5 shadow-[0_12px_42px_rgba(20,20,18,0.045)] md:grid-cols-[180px_1fr] md:gap-12 md:p-6
           '
            >
              <div className='pt-0.5'>
                <p className='font-mono text-[11px] uppercase tracking-[0.08em] text-ink-3'>
                  2024
                </p>
              </div>
              <div>
                <h3 className='mb-[3px] font-sans text-[18px] font-black text-ink'>
                  Freelance
                </h3>
                <p className='mb-3 font-sans text-[13px] font-medium text-ink-3'>
                  Independent Client Projects
                </p>
                <p className='mb-5 max-w-[620px] font-sans text-[14px] leading-7 text-ink-2'>
                  Taken direct briefs from local businesses — scoped, designed,
                  and delivered without an agency layer. Full ownership from
                  first call to final handoff.
                </p>
                <div className='flex flex-wrap gap-x-8 gap-y-2'>
                  {[
                    'Discovery and brief definition',
                    'Design and prototype in Figma',
                    'Build, test, and deploy',
                  ].map((step) => (
                    <p
                      key={step}
                      className='flex items-center gap-2 font-sans text-[12.5px] font-medium text-ink-3'
                    >
                      <span
                        className='w-1 h-1 rounded-full bg-rule-2 flex-shrink-0'
                        aria-hidden='true'
                      />
                      {step}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
