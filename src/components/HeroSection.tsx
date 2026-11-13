import FadeIn from './FadeIn';
import Magnet from './Magnet';
import { ContactButton } from './Buttons';
import { HERO } from '../content';

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Contact'];
const PORTRAIT = `${import.meta.env.BASE_URL}portrait.webp`;

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 pt-6 md:px-10 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="overflow-hidden pt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[10.5vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[11vw] md:-mt-5 md:text-[11.5vw] lg:text-[12.5vw]">
            {HERO.heading}
          </h1>
        </FadeIn>
        <FadeIn delay={0.25} y={20}>
          <p
            className="mt-2 text-center font-medium uppercase tracking-[0.2em] text-[#D7E2EA]/80"
            style={{ fontSize: 'clamp(0.7rem, 1.6vw, 1.4rem)' }}
          >
            {HERO.title}
          </p>
        </FadeIn>
      </div>

      {/* Portrait fills the space between the title and the bottom edge, anchored to the bottom.
          Its height drives its width (square image); the bottom fades out so the text can sit over it. */}
      <div className="relative mt-4 min-h-0 flex-1">
        <div className="absolute bottom-0 left-1/2 z-10 flex aspect-square h-full max-w-[125vw] -translate-x-1/2 flex-col justify-end sm:max-w-[90vw]">
          <FadeIn delay={0.6} y={30}>
            <Magnet
              padding={150}
              strength={10}
              activeTransition="transform 0.3s ease-out"
              inactiveTransition="transform 0.6s ease-in-out"
            >
              <img
                src={PORTRAIT}
                alt="Abdullah Ashraf"
                className="block h-auto w-full select-none"
                style={{
                  maskImage: 'linear-gradient(to bottom, #000 68%, transparent 97%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, #000 68%, transparent 97%)',
                }}
                draggable={false}
              />
            </Magnet>
          </FadeIn>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20} className="relative z-20">
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {HERO.blurb}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="relative z-20">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
