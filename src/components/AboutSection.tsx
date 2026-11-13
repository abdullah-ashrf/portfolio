import { BarChart3, Bot, Database, LineChart, type LucideIcon } from 'lucide-react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import { ContactButton } from './Buttons';
import { ABOUT_TEXT } from '../content';

const DECOR: { Icon: LucideIcon; pos: string; delay: number; x: number }[] = [
  { Icon: BarChart3, pos: 'top-[6%] left-[3%] sm:left-[4%] md:left-[6%]', delay: 0.1, x: -80 },
  { Icon: Database, pos: 'bottom-[8%] left-[5%] sm:left-[8%] md:left-[12%]', delay: 0.25, x: -80 },
  { Icon: Bot, pos: 'top-[6%] right-[3%] sm:right-[4%] md:right-[6%]', delay: 0.15, x: 80 },
  { Icon: LineChart, pos: 'bottom-[8%] right-[5%] sm:right-[8%] md:right-[12%]', delay: 0.3, x: 80 },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      {DECOR.map(({ Icon, pos, delay, x }, i) => (
        <div key={i} className={`pointer-events-none absolute ${pos}`}>
          <FadeIn delay={delay} x={x} y={0} duration={0.9}>
            <div
              className="flex h-[84px] w-[84px] items-center justify-center rounded-[28px] sm:h-[120px] sm:w-[120px] sm:rounded-[36px] md:h-[150px] md:w-[150px] md:rounded-[44px]"
              style={{
                background: 'linear-gradient(140deg, rgba(182,0,168,0.22), rgba(118,33,176,0.12) 55%, rgba(190,76,0,0.18))',
                border: '1px solid rgba(215, 226, 234, 0.15)',
              }}
            >
              <Icon className="h-1/2 w-1/2 text-[#BBCCD7]" strokeWidth={1.25} />
            </div>
          </FadeIn>
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            text={ABOUT_TEXT}
            className="max-w-[600px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>
        <ContactButton />
      </div>
    </section>
  );
}
