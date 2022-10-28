import groq from "groq";
import React from "react";
import client from "../lib/sanity";
import Page from "../templates/page";

export async function getStaticProps() {
  const data = await client.fetch(
    groq`
      {
        "page": *[_id == "frontpage"][0] {
          content[]{ ..., cta { ..., landingPageRoute-> { ...,  page-> { title } } } },
          "navMenu": navMenu->,
          siteTitle
        },
        "site": *[_id == "siteSettings"][0]
      }
    `
  );

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return <Page data={data} />;
}
