import { type ReactNode } from "react";

/** Scroll-linked reveals are managed by the page's SmoothScroll context. */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`reveal ${className}`}>
      {children}
    </div>
  );
}
