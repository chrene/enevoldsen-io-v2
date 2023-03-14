import Head from "next/head";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
  seo?: {
    title: string;
    description: string;
    jsonLd?: () => { __html: string };
  };
};

export function CanonicalURL() {
  const siteUrl = "https://enevoldsen.io";
  const pathname = usePathname();
  const canonicalUrl = `${siteUrl}` + (pathname === "/" ? "" : pathname);

  return <link rel="canonical" href={canonicalUrl} />;
}

export default function Layout(props: Props) {
  const { children, seo } = props;
  return (
    <>
      <Head>
        <title>{seo?.title || "enevoldsen.io"}</title>
        <meta name="description" content={seo?.description} />
        <CanonicalURL />
        {seo?.jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={seo?.jsonLd()}
          />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/android-chrome-192x192" sizes="192x192" />
        <link rel="icon" href="/android-chrome-512x512" sizes="512x512" />
        <link rel="icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#f5d548" />
        <meta name="application-name" content="Christian Enevoldsen" />
        <meta
          name="apple-mobile-web-app-title"
          content="Christian Enevoldsen"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      </Head>

      <Header />
      <main className="relative overflow-x-clip">{children}</main>
      <Footer />
    </>
  );
}
