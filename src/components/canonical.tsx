import Head from "next/head";
import { usePathname } from "next/navigation";

export default function CanonicalURL() {
  const siteUrl = "https://enevoldsen.io";
  const pathname = usePathname();
  const canonicalUrl = `${siteUrl}` + (pathname === "/" ? "" : pathname);

  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
