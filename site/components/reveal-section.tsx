"use client";

import { useEffect, useRef, useState } from "react";

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
  delayMs?: number;
};

export function RevealSection({
  children,
  className,
  id,
  ariaLabel,
  delayMs = 0,
}: RevealSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = ref.current;
    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }
        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      className={`reveal-section ${isVisible ? "is-visible" : ""} ${className ?? ""}`.trim()}
      style={{
        ["--reveal-delay" as string]: `${delayMs}ms`,
      }}
    >
      {children}
    </section>
  );
}