// src/components/ProofStrip.jsx
import AnimateIn from './AnimateIn';

const ANCHORS = [
  { title: 'Digital Exactly', sub: 'Engineering Intern · 2025' },
  { title: 'Grayline Studios', sub: 'Web Studio · Co-Founded 2026' },
  { title: 'Hackathon Top 10', sub: 'AI Tool · 60+ Competing Teams' },
  { title: 'CS Club', sub: 'Founded · 40+ Members' },
];

export default function ProofStrip() {
  return (
    <section className='border-y border-rule bg-canvas-2/70'>
      <div className='mx-auto max-w-site px-6 py-5 md:px-10'>
        <AnimateIn>
          <ul
            className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4'
            role='list'
          >
            {ANCHORS.map((item) => (
              <li
                className='rounded-lg border border-rule bg-panel px-4 py-4 shadow-[0_10px_32px_rgba(20,20,18,0.045)]'
                key={item.title}
              >
                <p className='font-sans text-[13px] font-bold leading-tight text-ink'>
                  {item.title}
                </p>
                <p className='mt-1 font-mono text-[10px] font-medium tracking-[0.04em] text-ink-3'>
                  {item.sub}
                </p>
              </li>
            ))}
          </ul>
        </AnimateIn>
      </div>
    </section>
  );
}
