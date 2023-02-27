import Hero from "@/components/hero";
import Layout from "@/components/layout";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <Layout>
        <Hero
          renderTitle={() => "Siden blev ikke fundet"}
          titleClassName="text-3xl lg:text-5xl lg:leading-tight"
          renderCta={() => (
            <Link href="/" className="link link-primary link-static">
              Gå til forsiden
            </Link>
          )}
        />
      </Layout>
    </>
  );
}
