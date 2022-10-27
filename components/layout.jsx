import React from "react";
import Head from "next/head";

const Layout = props => {
  const { children, meta, ...rest } = props;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full min-h-screen min-w-screen bg-gradient-to-br from-yello-100 to-blue-100" {...rest}>
        <div className="w-full md:max-w-full md:w-224 mx-auto p-6">{children}</div>
      </main>
    </>
  );
};

export default Layout;
