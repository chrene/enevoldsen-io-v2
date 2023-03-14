import Head from "next/head";
import CanonicalURL from "./canonical";

export function SEO({
  title,
  description,
  jsonLd,
}: {
  title: string;
  description: string;
  jsonLd?: () => { __html: string };
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <CanonicalURL />
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd()}
          key="person-jsonld"
        />
      )}
    </Head>
  );
}

export default SEO;
