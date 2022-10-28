import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

type LayoutProps = {
  children: React.ReactNode;
  showNav?: boolean;
  navMenuItems?: any;
  textWhite?: boolean;
  siteTitle?: string;
};

const Layout = (props: LayoutProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrolled && window.scrollY <= 100) {
        setScrolled(false);
      } else if (!scrolled && window.scrollY > 100) {
        setScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <>
      <Header
        navMenuItems={props.navMenuItems}
        siteTitle={props.siteTitle}
        showNav={props.showNav}
        scrolled={scrolled}
        textWhite={props.textWhite}
      />

      <>{props.children}</>
      <Footer siteTitle={props.siteTitle} />
    </>
  );
};

// Layout component that wraps header children and footer and sets scrolled state to add/remove scrolled class on body

export default Layout;
