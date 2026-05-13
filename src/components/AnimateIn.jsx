// src/components/AnimateIn.jsx
import { useEffect, useRef, useState } from 'react';

/**
 * Fade-in on scroll — opacity only.
 * No translateY: editorial sites don't slide content in.
 * Fires once. Respects prefers-reduced-motion via CSS.
 */
export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
  as: Tag = 'div',
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const delayClass =
    delay === 80
      ? 'reveal-delay-1'
      : delay === 160
        ? 'reveal-delay-2'
        : delay === 240
          ? 'reveal-delay-3'
          : delay === 320
            ? 'reveal-delay-4'
            : '';

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
