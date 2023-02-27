import About, { AboutTitle } from "@/components/about";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import PersonalProjects from "@/components/personal";
import ProfessionalProjects from "@/components/professional";
import Services from "@/components/services";
import Head from "next/head";

export default function FreelancePage() {
  return (
    <Layout>
      <Head>
        <title>Freelance webudvikling til mindre projekter og startups.</title>
        <meta
          name="description"
          content="Jeg kan hjælpe dig med at udvikle og designe din hjemmeside, uanset om du er en enkeltperson, en opstartsvirksomhed eller en mindre virksomhed. Som freelance webudvikler kan jeg tilbyde professionelle løsninger på mindre projekter. Kontakt mig for at finde ud af, hvordan jeg kan hjælpe dig."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero
        renderTitle={() =>
          "Freelance webudvikling til mindre projekter og startups."
        }
        renderDescription={() =>
          "Hej! Hvis du overvejer at oprette en hjemmeside, så er jeg her for at hjælpe. Jeg er en freelance webudvikler med erfaring i at skabe professionelle løsninger til enkeltpersoner, startups og mindre virksomheder. Lad mig hjælpe dig med at realisere dit online potentiale med en unik og skræddersyet hjemmeside. Kontakt mig for at få mere information om, hvordan jeg kan hjælpe dig med dit projekt."
        }
        titleClassName="lg:text-5xl lg:leading-tight"
        showScrollIndicator
      />
      <Services />
      <About
        renderTitle={() => (
          <AboutTitle>
            Professionel webudvikling og design til mindre projekter og startups
          </AboutTitle>
        )}
        renderDescription={() => (
          <>
            Jeg tilbyder webudviklings- og designløsninger på freelancebasis, og
            jeg er klar til at hjælpe dig med dit projekt. Uanset om du er en
            enkeltperson, en startup eller en mindre virksomhed, kan jeg hjælpe
            dig med at opbygge en unik og effektiv online tilstedeværelse.
            <br />
            <br />
            Jeg tilbyder en række tjenester inden for webudvikling og design,
            inklusiv responsivt webdesign, tilpasning af CMS (Content Management
            System), integration af e-handelsløsninger og udvikling af
            webapplikationer. Alt sammen for at sikre, at din hjemmeside,
            webshop eller webbaserede applikation er tilpasset dine behov og
            krav.
            <br />
            <br />
            Lad mig hjælpe dig med at tage din online tilstedeværelse til det
            næste niveau. Kontakt mig i dag for at starte din rejse mod en bedre
            online oplevelse for dig og dine besøgende.
          </>
        )}
      />
      <ProfessionalProjects />

      <PersonalProjects />
    </Layout>
  );
}
