import React from "react";
import Hero from "../components/hero";
import Layout from "../containers/layout";

const Page = (props) => {
  const { data, errors } = props;
  if (errors) {
    console.error(errors);
  }
  const site = (data || {}).site;

  console.log(data);
  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.page || data.route.page;
  const navMenu = data.page?.navMenu;
  const content = (page || [])?.content
    .filter((c) => !c?.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        // case "pricing":
        //   el = <Pricing key={c._key} {...c} />;
        //   break;
        // case "infoRows":
        //   el = <InfoRows key={c._key} {...c} />;
        // break;
        case "hero":
          el = <Hero key={c._key} {...c} />;
          break;
        // case "ctaColumns":
        //   el = <CTAColumns key={c._key} {...c} />;
        //   break;
        // case "ctaPlug":
        //   el = <CTA key={c._key} {...c} />;
        //   break;
        // case "uiComponentRef":
        //   switch (c.name) {
        //     case "topWave":
        //       el = <TopWave />;
        //       break;
        //     case "bottomWave":
        //       el = <BottomWave />;
        //       break;
        //     default:
        //       break;
        //   }
        //   break;
        default:
          el = null;
      }
      return el;
    });

  return (
    <Layout showNav navMenuItems={navMenu?.items} textWhite={true}>
      <div className="pt-24">{content}</div>
    </Layout>
  );
};

export default Page;
