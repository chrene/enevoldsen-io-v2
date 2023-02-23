import About, { AboutDescription, AboutTitle } from "@/components/about";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import PersonalProjects from "@/components/personal";
import Services from "@/components/services";
import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const bottomImages = [
    "/images/hero-image-1.jpeg",
    "/images/hero-image-2.jpeg",
    "/images/hero-image-3.jpeg",
  ];

  return (
    <Layout>
      <Head>
        <title>Christian - Passioneret Webdesigner og Udvikler</title>
        <meta
          name="description"
          content="Jeg er Christian, en passioneret webdesigner og udvikler med omfattende erfaring inden for skabelse af effektive og brugervenlige løsninger. Fra design til udvikling."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero
        renderTitle={() => <>Web designer og udvikler</>}
        renderDescription={() => (
          <>
            Hej 👋 Mit navn er Christian, og jeg er en teknologi-entusiast,
            udvikler og webdesigner. Min ekspertise dækker en bred vifte af
            områder lige fra design til udvikling og implementering. Jeg har en
            stærk interesse i at følge med i de seneste tendenser inden for
            webudvikling, og jeg bruger aktivt min viden og erfaring til at
            skabe innovative og effektive løsninger.
          </>
        )}
        showScrollIndicator
        renderBottomView={() => (
          <div className="relative h-[400px] max-w-full overflow-hidden">
            <div className="absolute inset-0 z-40 bg-gradient-to-b from-black/0 to-black" />
            <div className="absolute inset-0 md:mx-auto md:max-w-4xl flex -space-x-16 py-8">
              {bottomImages.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={clsx(
                    "min-w-[200px] md:max-w-full md:min-w-[350px] translate-y-[50px] skew-x-[-10deg] rotate-[7deg]",
                    {
                      "translate-y-[50px] z-30": index === 0,
                      "translate-y-[30px] z-20": index === 1,
                      "translate-y-[20px] z-10": index === 2,
                    }
                  )}
                  style={{
                    background: `url(${image}) top / cover no-repeat`,
                    height: "100%",
                  }}
                />
              ))}
            </div>
          </div>
        )}
      />
      <Services />
      <PersonalProjects />
      <About
        renderTitle={() => (
          <AboutTitle>
            Uddannet datalog med passion for webudvikling og product management.
          </AboutTitle>
        )}
        renderDescription={() => (
          <AboutDescription>
            Som uddannet datalog fra Københavns Universitet har jeg altid haft
            en passion for teknologi og digital innovation. Gennem mine studier
            opbyggede jeg en stærk teknisk baggrund og fik erfaring med en bred
            vifte af programmeringssprog og teknologier.
            <br />
            <br />
            Det var dog først, da jeg begyndte at arbejde med webudvikling og
            product management, at jeg virkelig fandt min passion. Jeg elsker at
            skabe digitale løsninger, der hjælper folk med at løse problemer og
            optimere deres dagligdag. Som webudvikler kan jeg bruge min tekniske
            viden og kreativitet til at designe og implementere komplekse
            webapplikationer og sikre, at de fungerer optimalt.
            <br />
            <br />
            På samme tid giver product management mig mulighed for at kombinere
            mine tekniske færdigheder med mine kommunikative evner og
            ledelsesmæssige erfaringer. Som product manager hos SOFACOMPANY har
            jeg ansvaret for at lede udviklingen af nye digitale produkter og
            tjenester fra start til slut. Jeg arbejder tæt sammen med mine
            teammedlemmer og samarbejdspartnere for at sikre, at vores produkter
            lever op til kundernes behov og forventninger.
            <br />
            <br />
            Som datalog har jeg en stærk forståelse for, hvordan teknologi kan
            anvendes til at optimere forretninger og løse komplekse problemer.
            Det betyder, at jeg er i stand til at oversætte teknisk jargon og
            komplekse teknologiske processer til et sprog, der kan forstås af
            alle. Samtidig har jeg også erfaring med at arbejde med både
            frontend og backend teknologi, så jeg kan navigere i hele
            udviklingsprocessen og sikre, at vores produkter er både teknisk
            solide og brugervenlige.
            <br />
            <br />
            Jeg ser mig selv som en passioneret og engageret teknolog, der altid
            er på udkig efter nye måder at forbedre og optimere digitale
            løsninger på. Jeg er en teamplayer, der arbejder tæt sammen med mine
            kolleger og samarbejdspartnere for at sikre, at vores produkter er i
            overensstemmelse med kundernes behov og krav.
          </AboutDescription>
        )}
      />
    </Layout>
  );
}
