import Head from "next/head";
import { usePathname } from "next/navigation";

export function CanonicalURL() {
  const siteUrl = "https://enevoldsen.io";
  const pathname = usePathname();
  const canonicalUrl = `${siteUrl}` + (pathname === "/" ? "" : pathname);

  return <link rel="canonical" href={canonicalUrl} />;
}

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
