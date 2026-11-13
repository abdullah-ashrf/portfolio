import { useEffect, useRef, useState } from 'react';
import { MARQUEE_ROWS } from '../content';

const triple = (items: string[]) => [...items, ...items, ...items];

function Row({ items, transform, outlined }: { items: string[]; transform: string; outlined?: boolean }) {
  return (
    <div className="flex w-max gap-3" style={{ transform, willChange: 'transform' }}>
      {triple(items).map((item, i) => (
        <div
          key={i}
          className="flex h-[110px] shrink-0 items-center rounded-2xl px-10 sm:h-[140px] sm:px-14"
          style={
            outlined
              ? { border: '2px solid rgba(215, 226, 234, 0.25)' }
              : {
                  background:
                    'linear-gradient(140deg, rgba(182,0,168,0.22), rgba(118,33,176,0.14) 55%, rgba(190,76,0,0.2)), #141417',
                }
          }
        >
          <span
            className="hero-heading whitespace-nowrap font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={ref} className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40" aria-label="Tools">
      <div className="flex flex-col gap-3">
        <Row items={MARQUEE_ROWS[0]} transform={`translateX(${offset - 200}px)`} />
        <Row items={MARQUEE_ROWS[1]} transform={`translateX(${-(offset - 200)}px)`} outlined />
      </div>
    </section>
  );
}
