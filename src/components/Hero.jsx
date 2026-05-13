// src/components/Hero.jsx
import AnimateIn from './AnimateIn';

const HIGHLIGHTS = [
  { label: 'Client delivery', value: 'Production websites' },
  { label: 'Focus', value: 'Frontend + AI tooling' },
  { label: 'Availability', value: 'Summer 2026 roles' },
];

const SIGNALS = ['React', 'Next.js', 'Tailwind', 'Python', 'OpenAI API'];

export default function Hero() {
  const scrollToProjects = (event) => {
    event.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className='relative isolate flex min-h-[92vh] items-center overflow-hidden bg-canvas pt-24 pb-16 md:pt-28'
      id='hero'
    >
      <div
        aria-hidden='true'
        className='site-grid absolute inset-0 opacity-70'
      />
      <div
        aria-hidden='true'
        className='site-noise absolute inset-0 opacity-[0.28]'
      />
      <div
        aria-hidden='true'
        className='absolute -top-24 right-[-12%] h-[420px] w-[420px] rounded-full bg-link/10 blur-3xl'
      />
      <div
        aria-hidden='true'
        className='absolute bottom-[-18%] left-[-10%] h-[360px] w-[360px] rounded-full bg-online/10 blur-3xl'
      />

      <div className='relative z-10 mx-auto grid w-full max-w-site gap-10 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
        <div>
          <AnimateIn>
            <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-rule bg-panel/80 px-3 py-1.5 shadow-[0_10px_35px_rgba(20,20,18,0.06)] backdrop-blur'>
              <span
                aria-hidden='true'
                className='h-1.5 w-1.5 rounded-full bg-online shadow-[0_0_0_4px_rgba(34,197,94,0.12)]'
              />
              <span className='font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3'>
                Open to SE and AI roles
              </span>
            </div>
          </AnimateIn>

          <AnimateIn delay={80}>
            <h1 className='max-w-[760px] font-serif text-6xl leading-[0.92] text-ink sm:text-7xl md:text-8xl lg:text-9xl'>
              Ahmad
              <br />
              <span className='italic text-ink-2'>Habib.</span>
            </h1>
          </AnimateIn>

          <AnimateIn delay={160}>
            <div className='mt-7 max-w-[620px]'>
              <p className='font-sans text-xl font-semibold leading-8 text-ink md:text-2xl'>
                Software Engineer and AI Developer building polished,
                production-ready digital products.
              </p>
              <p className='mt-4 max-w-[520px] font-sans text-base leading-8 text-ink-2'>
                Year 13 student with client delivery experience, a co-founded
                web studio, and shipped AI projects. Focused on clean
                interfaces, reliable systems, and fast iteration.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={240}>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:items-center'>
              <a
                className='inline-flex h-12 items-center justify-center rounded-lg bg-ink px-6 font-sans text-sm font-semibold text-white shadow-[0_16px_45px_rgba(20,20,18,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-ink-2'
                href='#projects'
                onClick={scrollToProjects}
              >
                View Work
                <span aria-hidden='true' className='ml-2'>
                  →
                </span>
              </a>
              <a
                className='inline-flex h-12 items-center justify-center rounded-lg border border-rule bg-panel/80 px-6 font-sans text-sm font-semibold text-ink-2 shadow-[0_10px_30px_rgba(20,20,18,0.05)] backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-rule-2 hover:text-ink'
                href='/resume.pdf'
                download='Ahmad_Habib_CV.pdf'
              >
                Download CV
                <span aria-hidden='true' className='ml-2 text-xs'>
                  ↗
                </span>
              </a>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={240}>
          <div className='relative mx-auto w-full max-w-[560px] lg:ml-auto'>
            <div
              aria-hidden='true'
              className='float-soft absolute -left-5 top-10 hidden h-12 w-12 rounded-lg border border-rule bg-panel/75 shadow-[0_18px_45px_rgba(20,20,18,0.08)] backdrop-blur md:block'
            />
            <div
              aria-hidden='true'
              className='float-soft absolute -right-3 bottom-20 h-16 w-16 rounded-lg border border-link/15 bg-link/10 shadow-[0_18px_45px_rgba(37,99,235,0.12)] backdrop-blur'
              style={{ animationDelay: '900ms' }}
            />

            <div className='overflow-hidden rounded-lg border border-rule bg-panel/88 shadow-[0_28px_90px_rgba(20,20,18,0.13)] backdrop-blur-xl'>
              <div className='flex items-center justify-between border-b border-rule bg-canvas-2/70 px-4 py-3'>
                <div className='flex gap-1.5' aria-hidden='true'>
                  <span className='h-2.5 w-2.5 rounded-full bg-[#ff5f57]' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#ffbd2e]' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#28c840]' />
                </div>
                <span className='font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3'>
                  Portfolio
                </span>
              </div>

              <div className='p-5 md:p-6'>
                <div className='mb-6 flex items-start justify-between gap-6'>
                  <div>
                    <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3'>
                      Current focus
                    </p>
                    <h2 className='mt-2 font-sans text-2xl font-black leading-8 text-ink md:text-3xl'>
                      Interfaces that feel sharp, fast, and usable.
                    </h2>
                  </div>
                  <div className='hidden rounded-lg border border-rule bg-canvas px-3 py-2 text-right sm:block'>
                    <p className='font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3'>
                      2026
                    </p>
                    <p className='font-sans text-sm font-semibold text-ink'>
                      Ready
                    </p>
                  </div>
                </div>

                <div className='grid gap-3'>
                  {HIGHLIGHTS.map((item) => (
                    <div
                      className='grid grid-cols-[120px_1fr] items-center gap-4 border-t border-rule py-3'
                      key={item.label}
                    >
                      <p className='font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3'>
                        {item.label}
                      </p>
                      <p className='font-sans text-sm font-semibold text-ink-2'>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className='mt-5 flex flex-wrap gap-2 border-t border-rule pt-5'>
                  {SIGNALS.map((signal) => (
                    <span
                      className='rounded-full border border-rule bg-canvas px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3'
                      key={signal}
                    >
                      {signal}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
