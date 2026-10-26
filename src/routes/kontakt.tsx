
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { createFileRoute } from "@tanstack/react-router";

// Add employees here.
// Copy an entire object to add another contact.
const CONTACTS = [
  {
    name: "Förnamn Efternamn",
    role: "Försäljningsansvarig",
    email: "namn@kaarix.se",
    phone: "+46 70 123 45 67",
    image: "",
  },
  {
    name: "Förnamn Efternamn",
    role: "Kundansvarig",
    email: "namn2@kaarix.se",
    phone: "+46 70 987 65 43",
    image: "",
  },
];

export const Route = createFileRoute("/kontakt")({
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-background px-6 pt-28 pb-20">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-4xl font-bold text-navy md:text-5xl">
            Kontakt
          </h1>

          <div className="mt-6 max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Har du frågor om våra produkter eller behöver hjälp att
              hitta rätt lösning? Kontakta oss gärna så hjälper vi dig.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {CONTACTS.map((contact) => (
              <article
                key={contact.email}
                className="overflow-hidden rounded-md border border-border bg-background shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  {contact.image ? (
                    <img
                      src={contact.image}
                      alt={contact.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm text-muted-foreground">
                        Bild - {contact.name}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-navy">
                    {contact.name}
                  </h2>

                  <h3 className="mt-2 text-lg font-semibold text-navy">
                    {contact.role}
                  </h3>

                  <div className="mt-5 space-y-3 text-sm">
                    <p>
                      <span className="font-semibold text-navy">
                        E-post:
                      </span>{" "}
                      <a
                        href={`mailto:${contact.email}`}
                        className="break-all text-muted-foreground hover:text-primary"
                      >
                        {contact.email}
                      </a>
                    </p>

                    <p>
                      <span className="font-semibold text-navy">
                        Telefon:
                      </span>{" "}
                      <a
                        href={`tel:${contact.phone.replace(/[\s()-]/g, "")}`}
                        className="text-muted-foreground hover:text-primary"
                      >
                        {contact.phone}
                      </a>
                    </p>
                  </div>
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
