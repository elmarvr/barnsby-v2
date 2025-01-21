import { useStore } from "@nanostores/react";
import { atom } from "nanostores";
import { useCallback, useRef } from "react";

export default function Section({
  children,
  className,
  name,
}: {
  name: string;
  children: React.ReactNode;
  className?: string;
}) {
  const node = useRef<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const registerObserver = useCallback((element: HTMLElement) => {
    if (node.current !== element) {
      if (observer.current) {
        observer.current.disconnect();
      }

      if (element) {
        observer.current = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              $activeSection.set(name);
            }
          },
          {
            threshold: 0.5,
          }
        );

        observer.current.observe(element);
      }

      node.current = element;
    }
  }, []);

  return (
    <section
      ref={registerObserver}
      id={name}
      className={`data-[active]:bg-red-500 py-28 w-full ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionLink({
  name,
  children,
  className,
}: {
  name: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { isActive } = useSection(name);

  return (
    <a
      href={`#${name}`}
      data-active={isActive ? "" : undefined}
      className={`data-[active]:text-primary font-bold ${className}`}
    >
      {children}
    </a>
  );
}

export function useSection(name: string) {
  const activeSection = useStore($activeSection);

  return {
    isActive: activeSection === name,
  };
}

const $activeSection = atom<string | null>(null);
