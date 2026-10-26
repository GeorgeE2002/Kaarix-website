import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV } from "./links";
import { useRouterState } from "@tanstack/react-router";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({
  select: (state) => state.location.pathname,
});

const [active, setActive] = useState("hem");

const activePage =
  pathname === "/applikationer"
    ? "applikationer"
    : pathname === "/kontakt"
      ? "kontakt"
      : active;

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const linkCls = (id: string) =>
  `relative py-2 text-sm font-medium transition-colors hover:text-primary ${
    activePage === id ? "text-primary" : "text-navy-foreground"
  }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="/" aria-label="Kaarix - till början">
          <Logo />
        </a>
        <nav aria-label="Huvudmeny" className="hidden md:block">
          <ul className="flex gap-9">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={n.href} className={linkCls(n.id)} aria-current={activePage === n.id ? "true" : undefined}>
                  {n.label}
                  {activePage === n.id && <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-primary" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="text-navy-foreground md:hidden"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          aria-controls="mobilmeny"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <nav id="mobilmeny" aria-label="Mobilmeny" className="border-t border-navy-muted/20 md:hidden">
          <ul className="flex flex-col px-6 py-3">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={n.href} onClick={() => setOpen(false)} className={`block ${linkCls(n.id)} py-3`}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
