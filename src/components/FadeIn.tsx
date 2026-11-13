import { motion } from 'framer-motion';
import type { ElementType, ReactNode, CSSProperties } from 'react';

type FadeInProps = {
  children?: ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
  [key: string]: unknown;
};

// Cache motion components so each element type is created only once.
const motionCache = new Map<ElementType, ElementType>();
function getMotion(tag: ElementType): ElementType {
  let comp = motionCache.get(tag);
  if (!comp) {
    comp = motion.create(tag as never) as unknown as ElementType;
    motionCache.set(tag, comp);
  }
  return comp;
}

export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  ...rest
}: FadeInProps) {
  const Component = getMotion(as);
  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </Component>
  );
}
