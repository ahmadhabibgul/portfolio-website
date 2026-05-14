// src/components/Leadership.jsx
import AnimateIn from './AnimateIn';

const ITEMS = [
  {
    category: 'Community',
    title: 'CS Club',
    role: 'Founder',
    desc: 'No CS society existed — built one. Ran structured weekly sessions on programming fundamentals, software projects, and industry awareness. Grew to 40+ regular members over two years.',
    primary: '2025 – 2026',
    secondary: '40+ active members',
  },
  {
    category: 'Competition',
    title: 'Hackathon',
    role: 'Competitor',
    desc: 'Planned, built, and demoed a functional AI product in 2 hours — no preparation, no existing codebase. Delivered a working tool, not a mock-up. Placed top 10 from 60+ competing teams.',
    primary: 'Top 10 Finish',
    secondary: '60+ competing teams',
  },
];

export default function Leadership() {
  return (
    <section id='leadership' className='bg-canvas py-16 md:py-24'>
      <div className='mx-auto max-w-site px-6 md:px-10'>
        {/* Header */}
        <AnimateIn className='mb-10 md:mb-12'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div className='flex items-baseline gap-5'>
              <span className='font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3'>
                Leadership
              </span>
              <h2 className='font-serif text-4xl leading-none text-ink md:text-5xl'>
                Outside work
              </h2>
            </div>
            <p className='max-w-[420px] font-sans text-sm leading-7 text-ink-2 md:text-right'>
              Initiative beyond coursework, with community building and fast
              product execution under pressure.
            </p>
          </div>
        </AnimateIn>

        {/* Two-column editorial list */}
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {ITEMS.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <article className='h-full rounded-lg border border-rule bg-panel p-5 shadow-[0_12px_42px_rgba(20,20,18,0.045)] transition duration-300 hover:-translate-y-0.5 hover:border-rule-2 md:p-6'>
                <p className='mb-5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-3'>
                  {item.category}
                </p>
                <h3 className='mb-[3px] font-sans text-[22px] font-black text-ink'>
                  {item.title}
                </h3>
                <p className='mb-4 font-sans text-[13px] font-medium text-ink-3'>
                  {item.role}
                </p>
                <p className='mb-8 max-w-[520px] font-sans text-[14px] leading-7 text-ink-2'>
                  {item.desc}
                </p>
                <div className='flex items-center gap-6 border-t border-rule pt-5'>
                  <p className='font-sans text-[12px] font-bold text-ink-2'>
                    {item.primary}
                  </p>
                  <p className='font-sans text-[12px] font-medium text-ink-3'>
                    {item.secondary}
                  </p>
                </div>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
