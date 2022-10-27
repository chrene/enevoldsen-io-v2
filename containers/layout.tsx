import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = (props) => {
  const [scrolled, setScrolled] = useState(false);

  const {
    children,
    showNav,
    siteTitle,
    navMenuItems,
    textWhite = true,
  } = props;

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
        navMenuItems={navMenuItems}
        siteTitle={siteTitle}
        showNav={showNav}
        scrolled={scrolled}
        textWhite={textWhite}
      />

      <>{children}</>
      <Footer siteTitle={siteTitle} />
    </>
  );
};

export default Layout;
