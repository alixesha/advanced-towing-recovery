import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Direction = "left" | "right" | "up";

interface RevealProps {
  children: ReactNode;
  /** Text should enter from the right; images from the left. */
  direction?: Direction;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const OFFSETS: Record<Direction, string> = {
  left: "-56px",
  right: "56px",
  up: "36px",
};

/**
 * Scroll-reveal wrapper: slides content in from the given direction the first
 * time it enters the viewport. Falls back to no animation when the user
 * prefers reduced motion.
 */
export function Reveal({
  children,
  direction = "right",
  delay = 0,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const axis = direction === "up" ? "Y" : "X";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: visible ? "none" : `translate${axis}(${OFFSETS[direction]})`,
        opacity: visible ? 1 : 0,
        transition: [
          `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          `transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        ].join(", "),
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
