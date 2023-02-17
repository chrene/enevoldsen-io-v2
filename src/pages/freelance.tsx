import Hero from "@/components/home/hero";
import Portfolio from "@/components/freelance/portfolio";
import Services from "@/components/freelance/services";
import About from "@/components/freelance/about";
import Layout from "@/components/layout";

export default function FreelancePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </Layout>
  );
}
