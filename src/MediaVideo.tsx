import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface MediaVideoProps {
  src: string;
  poster?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Above-the-fold video. Keeps a poster and the lightest preload that can still autoplay. */
  priority?: boolean;
  label?: string;
}

export default function MediaVideo({
  src,
  poster,
  className,
  style,
  priority = false,
  label,
}: MediaVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || priority) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    const element = ref.current;
    if (!element || priority) return;

    if (reduce || !inView) {
      element.pause();
      return;
    }

    if (element.getAttribute('src') !== src) {
      element.src = src;
    }
    // preload="none" will not fetch until playback is requested.
    element.play().catch(() => {});
  }, [inView, priority, reduce, src]);

  if (priority) {
    return (
      <video
        autoPlay={!reduce}
        loop={!reduce}
        muted
        playsInline
        poster={poster}
        preload={reduce ? 'none' : 'metadata'}
        aria-hidden={label ? undefined : true}
        aria-label={label}
        className={className}
        style={style}
        src={reduce ? undefined : src}
      />
    );
  }

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      poster={poster}
      preload="none"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={className}
      style={style}
    />
  );
}
