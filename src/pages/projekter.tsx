import Hero from "@/components/projekter/hero";
import PersonalProjects from "@/components/projekter/professional";
import ProfessionalProjects from "@/components/projekter/personal";
import Layout from "@/components/layout";

export default function Projects() {
  return (
    <Layout>
      <Hero />
      <PersonalProjects />
      <ProfessionalProjects />
    </Layout>
  );
}
