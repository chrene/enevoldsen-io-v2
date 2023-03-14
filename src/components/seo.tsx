import Head from "next/head";
import CanonicalURL from "./canonical";

export function SEO({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <CanonicalURL />
    </Head>
  );
}

export default SEO;
