import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import FadeIn from './FadeIn';
import { LiveProjectButton } from './Buttons';
import { PROJECTS, type Project, type Stat } from '../content';

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';
const PANEL_RADIUS = 'rounded-[28px] sm:rounded-[50px] md:rounded-[60px]';
const PANEL_BG =
  'linear-gradient(150deg, rgba(182,0,168,0.16) 0%, rgba(118,33,176,0.10) 50%, rgba(190,76,0,0.14) 100%), #141417';
const STAT_SIZE = 'clamp(1.1rem, 4.2vw, 4rem)';

// The sticky stacking effect only works when a whole card fits on screen, so it's desktop/tablet only.
function useIsDesktop() {
  const query = '(min-width: 768px)';
  const [match, setMatch] = useState(() => typeof window !== 'undefined' && window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatch(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);
  return match;
}

function StatPanel({ stat, height }: { stat: Stat; height: string }) {
  return (
    <div
      className={`flex min-h-[110px] flex-col justify-end p-4 sm:p-8 md:h-[var(--panel-h)] ${PANEL_RADIUS}`}
      style={{ '--panel-h': height, background: PANEL_BG, border: '1px solid rgba(215,226,234,0.12)' } as CSSProperties}
    >
      <span className="hero-heading font-black leading-none" style={{ fontSize: STAT_SIZE }}>
        {stat.value}
      </span>
      <span
        className="mt-2 font-light uppercase tracking-wider text-[#D7E2EA]/70"
        style={{ fontSize: 'clamp(0.65rem, 1.1vw, 0.95rem)' }}
      >
        {stat.label}
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const isDesktop = useIsDesktop();
  const [s1, s2, s3] = project.stats;

  return (
    <div className="mb-6 md:sticky md:top-32 md:mb-0 md:flex md:h-[85vh] md:items-start">
      <motion.div
        className={`relative w-full origin-top border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${RADIUS}`}
        style={isDesktop ? { scale, top: `${index * 28}px` } : undefined}
      >
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4 px-2 sm:mb-6 sm:px-4">
          <div className="flex items-end gap-4 sm:gap-6">
            <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-1 pb-1 sm:pb-3">
              <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {project.name}
              </h3>
            </div>
          </div>
          {project.link && (
            <LiveProjectButton className="mb-1 sm:mb-3" href={project.link.href} label={project.link.label} />
          )}
        </div>

        {/* Phones: two stat tiles side by side, summary below. md+: 40/60 columns. */}
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:flex md:w-[40%] md:flex-col">
            <StatPanel stat={s1} height="clamp(130px, 16vw, 230px)" />
            <StatPanel stat={s2} height="clamp(160px, 22vw, 340px)" />
          </div>
          <div
            className={`flex flex-col justify-between gap-6 p-5 sm:p-8 md:w-[60%] md:p-10 ${PANEL_RADIUS}`}
            style={{ background: PANEL_BG, border: '1px solid rgba(215,226,234,0.12)' }}
          >
            <p
              className="font-light leading-relaxed text-[#D7E2EA]/85"
              style={{ fontSize: 'clamp(0.9rem, 1.35vw, 1.2rem)' }}
            >
              {project.summary}
            </p>
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <span className="hero-heading font-black leading-none" style={{ fontSize: STAT_SIZE }}>
                  {s3.value}
                </span>
                <span
                  className="mt-2 block font-light uppercase tracking-wider text-[#D7E2EA]/70"
                  style={{ fontSize: 'clamp(0.65rem, 1.1vw, 0.95rem)' }}
                >
                  {s3.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-[0.65rem] uppercase tracking-wider text-[#D7E2EA]/80 sm:text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={ref} className="mx-auto max-w-6xl">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
