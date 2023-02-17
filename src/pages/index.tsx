import Hero from '@/components/home/hero';
import Portfolio from '@/components/home/portfolio';
import Services from '@/components/home/services';
import About from '@/components/home/about';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <About />
    </Layout>
  );
}
