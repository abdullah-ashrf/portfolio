import { ArrowUpRight, Github, Linkedin, Mail, type LucideIcon } from 'lucide-react';
import FadeIn from './FadeIn';
import { ContactButton } from './Buttons';
import { LINKS } from '../content';

const ITEMS: { Icon: LucideIcon; label: string; value: string; href: string }[] = [
  { Icon: Linkedin, label: 'LinkedIn', value: 'in/abdullahashrf', href: LINKS.linkedin },
  { Icon: Github, label: 'GitHub', value: 'abdullah-ashrf', href: LINKS.github },
  { Icon: Mail, label: 'Email', value: LINKS.email, href: `mailto:${LINKS.email}` },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 flex flex-col items-center bg-[#0C0C0C] px-5 pb-16 pt-24 sm:px-8 md:px-10 md:pt-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p
          className="mt-6 max-w-[520px] text-center font-light leading-relaxed text-[#D7E2EA]/80"
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' }}
        >
          Open to Data Analyst, BI Analyst and AI Automation roles in the UAE. Based in Abu Dhabi.
        </p>
      </FadeIn>

      <div className="mt-14 grid w-full max-w-5xl gap-3 sm:gap-4 lg:grid-cols-3">
        {ITEMS.map(({ Icon, label, value, href }, i) => (
          <FadeIn key={label} delay={0.15 + i * 0.1} y={30}>
            <a
              href={href}
              {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group flex items-center justify-between gap-4 rounded-[32px] border-2 border-[#D7E2EA]/80 px-6 py-6 text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:rounded-[40px] sm:px-8"
            >
              <span className="flex min-w-0 items-center gap-4">
                <Icon className="h-7 w-7 shrink-0" strokeWidth={1.5} />
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">{label}</span>
                  <span className="truncate font-medium">{value}</span>
                </span>
              </span>
              <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4} y={20} className="mt-14">
        <ContactButton href={`mailto:${LINKS.email}`} label="Email Me" />
      </FadeIn>

      <p className="mt-20 text-xs uppercase tracking-widest text-[#D7E2EA]/40">
        © {new Date().getFullYear()} Abdullah Ashraf
      </p>
    </section>
  );
}
