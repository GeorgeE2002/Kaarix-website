import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import hall from "@/assets/industrial-hall.jpg";
import omkaarix from "@/assets/omkaarix.jpg";

export const KSB_KAARIX_URL = "https://www.ksbteknik.se/search?q=kaarix";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaarix - LED-belysning för industri och verksamhet" },
      { name: "description", content: "Kaarix erbjuder belysningslösningar för industriella och kommersiella miljöer. Se sortimentet hos KSB Teknik." },
      { property: "og:title", content: "Kaarix - LED-belysning för industri och verksamhet" },
      { property: "og:description", content: "Belysningslösningar för industriella och kommersiella miljöer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CATEGORIES = [
  { name: "Highbay LED", text: "För lager, produktionshallar och andra lokaler med hög takhöjd." },
  { name: "Industriarmaturer", text: "Robust belysning för verkstäder, industrimiljöer och tekniska utrymmen." },
  { name: "LED-strålkastare", text: "För fasader, lastzoner, parkeringar och andra utomhusytor." },
  { name: "Tracklights", text: "Riktbar belysning för butiker, showrooms och kontorsmiljöer." },
];

const btn =
  "inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      <span className="h-px w-8 bg-primary" />
      {children}
    </p>
  );
}

function Index() {
  return (
    <>
      <Header />
      <SmoothScroll>
      <main>
        {/* 1. TEXT → IMAGE */}
        <section id="hem" className="bg-background">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <Reveal>
              <Eyebrow>Robusta lösningar för krävande miljöer</Eyebrow>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-navy md:text-5xl">
                Kaarix - Produkter för krävande miljöer
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                När förhållandena är som tuffast måste varje komponent kunna leverera.
                Kaarix erbjuder noggrant utvalda produkter och lösningar för krävande
                miljöer där driftsäkerhet, hållbarhet och prestanda är avgörande.
              </p>

            </Reveal>
          </div>
        </section>

        {/* 2. IMAGE → TEXT */}
        <section id="produkter" className="bg-muted">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <Reveal className="order-last md:order-first">
              <img
                src={hall}
                alt="Lagerhall upplyst av runda Highbay LED-armaturer"
                width={1200}
                height={960}
                loading="lazy"
                className="aspect-[5/4] w-full rounded-md object-cover"
              />
            </Reveal>
            <Reveal>
              <Eyebrow>Applikationer</Eyebrow>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-4xl">
                Byggt för krävande miljöer
              </h2>
              
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Vårt sortiment är utvecklat för att möta utmaningarna
                    inom industri, energi, fastigheter och utomhusinstallationer.
                  </p>

                  <p>
                    Oavsett om miljön präglas av fukt, kyla, damm,
                    vibrationer eller stora temperaturvariationer erbjuder
                    Kaarix robusta lösningar som är byggda för att hålla över tid.
                  </p>

                  <p>
                    Vi kombinerar hög kvalitet med teknisk kompetens
                    och ett starkt kundfokus för att skapa långsiktiga
                    och tillförlitliga lösningar.
                  </p>
                </div>

                
                    <a
                      href="/applikationer"
                      className={`${btn} mt-8`}
                    >
                      Utforska våra applikationer <ArrowRight size={16} />
                    </a>


            </Reveal>
          </div>
        </section>

        
{/* 3. OM KAARIX – SPLIT BANNER */}
<section
  id="om-kaarix"
  className="relative mb-20 overflow-hidden bg-white"
>
  <div className="mx-auto grid min-h-[500px] max-w-[1200px] lg:grid-cols-2">

    {/* LEFT – TEXT */}
    <div className="relative z-10 flex items-center px-6 py-16 md:px-8 lg:pl-6 lg:pr-12">
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy">
          Om Kaarix
        </p>

        <h2 className="mt-5 text-3xl font-extrabold leading-tight text-navy md:text-4xl">
          Kvalitet och pålitlighet i varje detalj
        </h2>

        <p className="mt-6 text-base leading-relaxed text-navy">
          Kaarix kombinerar robusta produkter med teknisk kompetens
          och ett starkt kundfokus. Vi erbjuder lösningar för
          verksamheter där driftsäkerhet, prestanda och lång
          livslängd är avgörande.
        </p>

        <p className="mt-4 text-base leading-relaxed text-navy">
          Genom KSB Teknik får du tillgång till vårt sortiment,
          teknisk kunskap och personlig service.
        </p>

        <a
          href={KSB_KAARIX_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn} mt-8`}
        >
          Se vårt sortiment <ExternalLink size={16} />
        </a>
      </div>
    </div>

    {/* RIGHT – IMAGE */}
    <div className="relative min-h-[300px] lg:min-h-full">
      <img
        src={omkaarix}
        alt="Teknisk kompetens och industriella lösningar"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Diagonal blue edge */}
      <div
        className="pointer-events-none absolute inset-y-0 -left-px hidden w-28 bg-white lg:block"
        style={{
          clipPath: "polygon(0 0, 100% 0, 0 100%)",
        }}
      />
    </div>
  </div>
</section>

      </main>
      <Footer />
      </SmoothScroll>
    </>
  );
}
