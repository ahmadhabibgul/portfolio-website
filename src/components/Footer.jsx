// src/components/Footer.jsx
const LINKS = [
  { label: 'Work', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
  return (
    <footer className='bg-obsidian border-t border-parchment/6'>
      <div
        className='
       max-w-site mx-auto px-6 md:px-10 py-6
       flex flex-col sm:flex-row items-center justify-between gap-4
     '
      >
        <p className='font-sans text-[11.5px] font-medium text-parchment-2'>
          Ahmad Habib
          <span className='mx-2 text-parchment/15' aria-hidden='true'>
            ·
          </span>
          Designed and built by me
          <span className='mx-2 text-parchment/15' aria-hidden='true'>
            ·
          </span>
          2026
        </p>

        <nav aria-label='Footer navigation'>
          <ul className='flex items-center gap-6' role='list'>
            {LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  className='font-sans text-[11.5px] font-medium text-parchment/30 hover:text-parchment-2 transition-colors duration-150'
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href='/cv.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='font-sans text-[11.5px] font-medium text-parchment/30 hover:text-parchment-2 transition-colors duration-150 inline-flex items-center gap-0.5'
              >
                CV
                <span aria-hidden='true' className='text-[10px]'>
                  ↗
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
