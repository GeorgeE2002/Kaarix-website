import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { createFileRoute } from "@tanstack/react-router";
import industri from "@/assets/applikation/industri.jpg";
import belysning from "@/assets/applikation/belysning.jpg";
import elfordon from "@/assets/applikation/elfordon.jpg";
import järnväg from "@/assets/applikation/järnväg.jpg";
import försvar from "@/assets/applikation/försvar.jpg";
import fordonsautomation from "@/assets/applikation/fordon-automation.jpg";

export const Route = createFileRoute("/applikationer")({
  component: Applikationer,
});

const APPLICATIONS = [
  {
    name: "Industri",
    title: "Industriella applikationer",
    image: industri,
    description:
      "I industrin är driftsäkerhet avgörande. Kaarix levererar robusta komponenter för styrning, automation, elkraft och säkerhetsfunktioner. Produkterna är framtagna för att fungera i miljöer där vibrationer, damm, fukt och temperaturvariationer är en del av vardagen.",
  },
  {
    name: "Fordon & Automation",
    title: "Fordon & Automation",
    image: fordonsautomation,
    description:
      "Från arbetsfordon och specialmaskiner till autonoma AGV-system ställer moderna mobila applikationer höga krav på tillförlitlighet och säkerhet. Kaarix levererar belysning, signalteknik och robusta komponenter som klarar krävande driftförhållanden och bidrar till säkra, effektiva och framtidssäkra lösningar.",
  },
  {
    name: "Belysning",
    title: "Professionell belysning",
    image: belysning,
    description:
      "Rätt belysning handlar om mer än att skapa ljus. Den påverkar säkerhet, produktivitet, energieffektivitet och välbefinnande. Kaarix erbjuder belysningslösningar för industri, kontor, lager, skolor, offentliga miljöer och fastigheter. Våra produkter kombinerar hög prestanda, lång livslängd och modern teknik för att skapa hållbara ljusmiljöer anpassade efter verksamhetens behov.",
  },
  {
    name: "Elfordon",
    title: "Elektrifierade fordon",
    image: elfordon,
    description:
      "Övergången till elektrifierade transporter ställer höga krav på komponenternas prestanda och säkerhet. Kaarix levererar lösningar för eldrivna fordon inom industri, transport, sjöfart och specialfordon. Våra produkter är utvecklade för att hantera höga strömmar, krävande driftmiljöer och långvarig belastning.",
  },
  {
    name: "Järnväg",
    title: "Järnväg och spårbunden trafik",
    image: järnväg,
    description:
      "Järnvägsapplikationer ställer mycket höga krav på kvalitet och driftsäkerhet. Kaarix erbjuder komponenter och system för spårbunden trafik där tillförlitlig funktion och lång livslängd är avgörande för en säker och effektiv drift.",
  },
  {
    name: "Försvar",
    title: "Försvarssektorn",
    image: försvar,
    description:
      "Försvarsrelaterade applikationer kräver hög tillförlitlighet under extrema förhållanden. Kaarix erbjuder robusta komponenter för miljöer där prestanda, säkerhet och funktion inte får kompromissas.",
  },
];

function Applikationer() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background px-6 pt-28 pb-20">
        <div className="mx-auto max-w-[1200px]">
    <h1 className="text-4xl font-bold text-navy md:text-5xl">
      Applikationer
    </h1>

    <div className="mt-6 max-w-3xl">
      <p className="text-lg leading-relaxed text-muted-foreground">
        Kaarix utvecklar och levererar robusta produkter för krävande miljöer.
      </p>

      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Våra lösningar används inom industri, transport, försvar och
        fastighet där driftsäkerhet, kvalitet och lång livslängd är avgörande.
        Oavsett applikation är vårt mål detsamma: att erbjuda komponenter
        som fungerar när det verkligen gäller.
      </p>
    </div>
 
    
<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {APPLICATIONS.map((app) => (
    <article
      key={app.name}
      className="overflow-hidden rounded-md border border-border bg-background shadow-sm"
    >
      <div className="aspect-[16/10] overflow-hidden bg-muted">
  {"image" in app && app.image ? (
    <img
      src={app.image}
      alt={app.name}
      loading="lazy"
      className="h-full w-full object-cover"
    />
  ) : (
    <div className="flex h-full items-center justify-center">
      <span className="text-sm text-muted-foreground">
        Bild – {app.name}
      </span>
    </div>
  )}
</div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-navy">
          {app.name}
        </h2>

        <h3 className="mt-2 text-lg font-semibold text-navy">
          {app.title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {app.description}
        </p>
      </div>
    </article>
  ))}
</div>


  </div>
</main>
    <Footer />
    </>
  );
}