// src/components/Navigation.jsx
import { useState, useEffect, useCallback } from 'react';

const NAV_ITEMS = [
  { label: 'Work', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = NAV_ITEMS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActiveId(id);
        },
        { threshold: 0.2, rootMargin: '-60px 0px 0px 0px' },
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLink = useCallback((e, id) => {
    e.preventDefault();
    scrollTo(id);
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`
       fixed inset-x-0 top-0 z-50
       transition-all duration-500
       ${scrolled ? 'border-b border-rule' : 'border-b border-transparent'}
     `}
      style={{
        backgroundColor: scrolled
          ? 'rgba(247, 246, 243, 0.94)'
          : 'rgba(247, 246, 243, 0.0)',
        backdropFilter: scrolled ? 'blur(16px) saturate(160%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(160%)' : 'none',
      }}
    >
      <div className='max-w-site mx-auto px-6 md:px-10 h-[60px] flex items-center justify-between'>
        {/* Wordmark */}
        <a
          href='#'
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className='font-sans text-[13px] font-semibold text-ink transition-opacity duration-150 hover:opacity-60'
        >
          Ahmad Habib
        </a>

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-8' aria-label='Primary'>
          {NAV_ITEMS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleLink(e, id)}
              className={`
               font-sans text-[11px] font-medium tracking-[0.08em] uppercase
               transition-colors duration-150
               ${activeId === id ? 'text-ink' : 'text-ink-3 hover:text-ink-2'}
             `}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile trigger */}
        <button
          className='md:hidden flex flex-col gap-[5px] p-2 -mr-2'
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-px w-5 bg-ink-2 origin-center transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
          />
          <span
            className={`block h-px w-5 bg-ink-2 transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-px w-5 bg-ink-2 origin-center transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`
         md:hidden absolute inset-x-0 top-[60px] border-b border-rule
         transition-all duration-300 overflow-hidden
         ${mobileOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
       `}
        style={{
          backgroundColor: 'rgba(247, 246, 243, 0.98)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <nav className='py-4 px-6 flex flex-col gap-1'>
          {NAV_ITEMS.map(({ label, id }) => (
            <a
              key={`m-${id}`}
              href={`#${id}`}
              onClick={(e) => handleLink(e, id)}
              className='py-3 text-[14px] text-ink-2 hover:text-ink transition-colors'
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
