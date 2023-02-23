import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Services from "@/components/services";

export default function ServicesPage() {
  return (
    <Layout>
      <Hero
        renderTitle={() => <>Fra startup app udvikler til product manager</>}
        renderDescription={() => (
          <>
            Jeg har igennem min karriere arbejdet som fullstack udvikler, team
            lead, product owner og product manager, fra startup til stor
            virksomhed.
          </>
        )}
        titleClassName="text-3xl lg:text-5xl lg:leading-tight"
        showScrollIndicator
      />
      <Services />
    </Layout>
  );
}
