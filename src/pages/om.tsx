import About, { AboutDescription, AboutTitle } from "@/components/about";
import Hero from "@/components/hero";
import Layout from "@/components/layout";

export default function AboutPage() {
  return (
    <Layout
      seo={{
        title: "Christian - Passioneret Webdesigner og Udvikler",
        description:
          "Hej, jeg hedder Christian. En programmør med en passion for webudvikling og product management.",
      }}
    >
      <Hero
        renderTitle={() => <>Om</>}
        renderDescription={() => (
          <>
            Hej, jeg hedder Christian. En programmør med en passion for
            webudvikling og product management.
          </>
        )}
        titleClassName="text-3xl lg:text-5xl lg:leading-tight"
        showScrollIndicator
      />

      <About
        renderTitle={() => <AboutTitle>Hvem er jeg?</AboutTitle>}
        renderDescription={() => (
          <AboutDescription>
            Jeg hedder Christian, og jeg er en teknologi-entusiast, udvikler,
            product manager og hobby musiker.
            <br />
            <br />
            <h3 className="mt-4 text-lg font-bold">Facts om mig</h3>
            <ol className="list-decimal list-inside mt-4 space-y-4">
              <li className="">
                👨‍🎓 Jeg har en bachelor i datalogi fra Københavns Universitet.
              </li>
              <li>
                🏢 Jeg har arbejdet som udvikler og tech lead i 6 år, og som
                product owner og product manager i de seneste 2 år.
              </li>
              <li className="">
                Jeg startede med at kode som 18-årig. Det første sprog jeg lærte
                var VB 6.
              </li>
              <li className="">
                Mit første job var som udvikler i en startup, hvor jeg var med
                til at udvikle en app til at hjælpe med at bekæmpe madspil.
                Appen hedder{" "}
                <a
                  href="https://yourlocal.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  YourLocal
                </a>{" "}
                og er stadigvæk i brug.
              </li>
              <li>
                🎶 I min fritid spiller jeg klaver og bass. Derudover producerer
                jeg også musik bl.a. sammend med{" "}
                <a
                  href="https://klaskefar.dk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Klaskefar
                </a>
                .
              </li>
            </ol>
          </AboutDescription>
        )}
      />
    </Layout>
  );
}
