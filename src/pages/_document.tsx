import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="da">
      <Head />
      <body>
        <script
          id="piiTester"
          type="text/javascript"
          async
          crossOrigin="anonymous"
          src="//tracking-cdn.figpii.com/72d0a38a1537770a21c58808e4eadb23.js"
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
