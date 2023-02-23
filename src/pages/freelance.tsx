import About, { AboutTitle } from "@/components/about";
import Hero from "@/components/hero";
import Layout from "@/components/layout";
import PersonalProjects from "@/components/personal";
import ProfessionalProjects from "@/components/professional";
import Services from "@/components/services";

export default function FreelancePage() {
  return (
    <Layout>
      <Hero
        renderTitle={() =>
          "Freelance webudvikling til mindre projekter og startups."
        }
        renderDescription={() =>
          "Jeg har igennem min karriere arbejdet med mange forskellige projekter, både som freelancer og som ansat."
        }
        titleClassName="lg:text-5xl lg:leading-tight"
        showScrollIndicator
      />
      <Services />
      <ProfessionalProjects />
      <About
        renderTitle={() => (
          <AboutTitle>Freelance for mindre projekter og startups.</AboutTitle>
        )}
        renderDescription={() => (
          <>
            Jeg tilbyder webudviklings- og designløsninger på mindre projekter
            til enkeltpersoner, startups og mindre virksomheder på
            freelancebasis. <br />
            <br />
            Jeg kan hjælpe dig med at opbygge en unik og effektiv online
            tilstedeværelse, uanset om det drejer sig om en hjemmeside, en
            webshop eller en webbaseret applikation.
            <br />
            <br />
            Jeg tilbyder en række tjenester inden for webudvikling og design,
            inklusiv responsiv webdesign, tilpasning af CMS (Content Management
            System), integration af e-handelsløsninger og udvikling af
            webapplikationer.
          </>
        )}
      />
      <PersonalProjects />
    </Layout>
  );
}
