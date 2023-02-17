import Hero from "@/components/home/hero";
import Portfolio from "@/components/home/portfolio";
import Services from "@/components/home/services";
import About from "@/components/freelance/about";
import Layout from "@/components/layout";

export default function FreelancePage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <About />
    </Layout>
  );
}
