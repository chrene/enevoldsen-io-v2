import About, { AboutDescription, AboutTitle } from "@/components/about";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import PersonalProjects from "@/components/personal";

import Services from "@/components/services";

export default function Home() {
  return (
    <Layout
      seo={{
        title: "Passioneret webdesigner og udvikler",
        description:
          "Christian Enevoldsen - En teknologi-entusiast, udvikler og webdesigner med ekspertise inden for design, udvikling og implementering.",
      }}
    >
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
