import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

/** Owns the page's single smoother and all scroll-linked animations. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!wrapper.current || !content.current) return;
    gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

    const media = gsap.matchMedia();
    let smoother: ScrollSmoother | undefined;
    let disposed = false;

    media.add("(prefers-reduced-motion: no-preference)", () => {
      // ScrollSmoother is a singleton; dispose any stale development instance.
      ScrollSmoother.get()?.kill();
      const instance = ScrollSmoother.create({
        wrapper: wrapper.current,
        content: content.current,
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
      smoother = instance;

      gsap.utils.toArray<HTMLElement>(".reveal", content.current).forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 18 }, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            once: true,
          },
        });
      });

      return () => {
        instance.kill();
        if (smoother === instance) smoother = undefined;
      };
    });

    const scrollToHash = (hash: string, animate: boolean) => {
      let id: string;
      try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target) return;
      const headerHeight = document.querySelector("header")?.firstElementChild?.getBoundingClientRect().height ?? 64;
      const offset = headerHeight + 16;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (smoother) {
        smoother.scrollTo(target, animate && !reducedMotion, `top ${offset}px`);
      } else {
        window.scrollTo({
          top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset),
          behavior: animate && !reducedMotion ? "smooth" : "instant",
        });
      }
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      event.preventDefault();
      if (window.location.hash !== hash) window.history.pushState(null, "", hash);
      scrollToHash(hash, true);
    };
    const onHashChange = () => scrollToHash(window.location.hash, true);
    const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
    const images = Array.from(content.current.querySelectorAll("img"));
    images.forEach((image) => image.addEventListener("load", refresh));
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);
    const frame = requestAnimationFrame(() => {
      refresh();
      if (window.location.hash) scrollToHash(window.location.hash, false);
    });
    void document.fonts.ready.then(refresh);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
      images.forEach((image) => image.removeEventListener("load", refresh));
      media.revert();
    };
  }, { scope: wrapper });

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content} className="pt-16">{children}</div>
    </div>
  );
}