// src/components/Skills.jsx
import AnimateIn from './AnimateIn';

const COLS = [
  {
    heading: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'HTML & CSS',
      'Responsive Design',
    ],
  },
  {
    heading: 'Backend & AI',
    items: [
      'Python',
      'Node.js',
      'OpenAI API',
      'FastAPI',
      'REST APIs',
      'PostgreSQL',
    ],
  },
  {
    heading: 'Tools',
    items: ['Figma', 'Git & GitHub', 'Vercel', 'VS Code', 'Postman', 'Linear'],
  },
];

export default function Skills() {
  return (
    <section
      id='skills'
      className='border-t border-rule bg-canvas-2/70 py-16 md:py-20'
    >
      <div className='mx-auto max-w-site px-6 md:px-10'>
        {/* Header */}
        <AnimateIn className='mb-10 md:mb-12'>
          <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
            <div className='flex items-baseline gap-5'>
              <span className='font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3'>
                Skills
              </span>
              <h2 className='font-serif text-4xl leading-none text-ink md:text-5xl'>
                What I build with
              </h2>
            </div>
            <p className='max-w-[390px] font-sans text-sm leading-7 text-ink-2 md:text-right'>
              A compact toolkit shaped around modern product interfaces, API
              work, deployment, and AI features.
            </p>
          </div>
        </AnimateIn>

        {/* Three columns */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
          {COLS.map((col, i) => (
            <AnimateIn key={col.heading} delay={i * 80}>
              <article className='h-full rounded-lg border border-rule bg-panel p-5 shadow-[0_12px_42px_rgba(20,20,18,0.045)] md:p-6'>
                <p className='mb-5 border-b border-rule pb-4 font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-3'>
                  {col.heading}
                </p>
                <ul className='grid gap-2.5' role='list'>
                  {col.items.map((skill) => (
                    <li
                      key={skill}
                      className='flex items-center gap-2 font-sans text-[14px] font-medium text-ink-2'
                    >
                      <span
                        aria-hidden='true'
                        className='h-1 w-1 rounded-full bg-rule-2'
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn className='mt-8'>
          <p className='font-sans text-[12px] text-ink-3 italic'>
            All skills demonstrated through project work above.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
