import { Logo } from "./Logo";
import { KSB_URL, NAV } from "./links";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-navy text-navy-muted">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Robusta lösningar för krävande miljöer
          </p>
        </div>
        <nav aria-label="Sidfot">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-navy-foreground">Navigering</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={n.href} className="transition-colors hover:text-primary">
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <a href={KSB_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                KSB Teknik ↗
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-navy-foreground">Kontakt</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>Kaarix drivs av KSB Teknik AB</p>
            <p>Högstorps Gård 1 - 573 92 Tranås</p>
            <p>Telefon: 0140-77 00 70</p>
            <p>E-post: info@ksbteknik.se</p>
          </address>
        </div>
      </div>
      <div className="border-t border-navy-muted/20">
        <p className="mx-auto max-w-[1200px] px-6 py-6 text-xs">© {new Date().getFullYear()} Kaarix. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
}
