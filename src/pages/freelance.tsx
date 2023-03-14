import About, { AboutTitle } from "@/components/about";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import PersonalProjects from "@/components/personal";
import ProfessionalProjects from "@/components/professional";
import SEO from "@/components/seo";
import Services from "@/components/services";

export default function FreelancePage() {
  function addJsonLd() {
    return {
      __html: `
      {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Freelance Webudvikling",
        "jobTitle": "Webudvikler",
        "telephone": "004553768161",
        "description": "Jeg tilbyder webudviklings- og designløsninger på freelancebasis, og jeg er klar til at hjælpe dig med dit projekt.",
        "url": "https://enevoldsen.io/freelance",
        "sameAs": [
          "https://www.linkedin.com/in/christianenevoldsen/",
          "https://twitter.com/chrsapp",
          "https://github.com/chrene"
        ],
        "knowsAbout": [
          "Web design",
          "Web udvikling",
          "Web teknisk rådgivning",
          "Product management"
        ],
        "additionalName": "Small business and startups",
        "worksFor": {
          "@type": "Organization",
          "name": "Freelance"
        },
        "worksOn": [
          {
            "@type": "Project",
            "name": "YourLocal App",
            "url": "https://yourlocal.org/",
            "description": "En app, der hjælper dig med at finde gode tilbud på mad der alligevel skal smides ud fra dine lokale butikker og restauranter.",
            "startDate": "2016-01",
            "endDate": "2020-02",
            "programmingLanguage": ["Angular", "Ionic", "NodeJS"],
            "database": "PostgreSQL",
            "contributor": [
              {
                "@type": "Person",
                "name": "Freelance Webudvikling"
              }
            ]
          },
          {
            "@type": "Project",
            "name": "LuggageHero App",
            "url": "https://luggagehero.com/",
            "description": "En platform, der hjælper rejsende med at få opbevaret deres bagage sikkert, nemt og billigt i samarbejde med en række af butikker og hoteller.",
            "startDate": "2019-08",
            "endDate": "2019-10",
            "programmingLanguage": ["Angular", "Ionic", "Nx Workspace"],
            "contributor": [
              {
                "@type": "Person",
                "name": "Freelance Webudvikling"
              }
            ]
          },
          {
            "@type": "Project",
            "name": "Energiteknik Lolland",
            "url": "https://energitekniklolland.dk/",
            "description": "En hjemmeside for en virksomhed, der tilbyder energirådgivning og energibesparelser.",
            "startDate": "2022-08",
            "endDate": "2022-10",
            "programmingLanguage": ["Webflow"],
            "contributor": [
              {
                "@type": "Person",
                "name": "Freelance Webudvikling"
              }
            ]
          },
          {
            "@type": "Project",
            "name": "Klaskefar",
            "url": "https://klaskefar.dk/", 
            "description": "En hjemmeside til en freestyle rapper fra København.",
            "startDate": "2022-01",
            "endDate": "2022-04",
            "programmingLanguage": ["NextJS", "React", "TailwindCSS"],
            "contributor": [
              {
                "@type": "Person",
                "name": "Freelance Webudvikling"
              }
            ]
          }
        ]
      }
    `,
    };
  }

  return (
    <Layout>
      <SEO
        title="Freelance webudvikling til mindre projekter og startups."
        description="Udvikling og design af din hjemmeside, uanset om du er en enkeltperson, startup eller en mindre virksomhed. Lad os finde ud af, hvordan jeg kan hjælpe dig."
        jsonLd={addJsonLd}
      />
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
