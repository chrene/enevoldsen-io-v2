import Link from "next/link";
import React from "react";
import CTALink from "./cta-link";
import classNames from "classnames";

type NavMenuItem = {
  _key: string;
  title: string;
  slug: {
    current: string;
  };
};
type HeaderProps = {
  navMenuItems?: NavMenuItem[];
  showNav?: boolean;
  scrolled?: boolean;
  textWhite?: boolean;
  siteTitle?: string;
};

const Header = (props: HeaderProps) => {
  const headerClass = classNames(
    "fixed w-full z-30 top-0 text-neutral-content py-4",
    {
      "bg-white shadow": props.scrolled,
      "bg-transparent": !props.scrolled,
    }
  );

  const navActionClass = classNames(
    "mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow",
    {
      "text-neutral-content": props.scrolled,
      "text-black": !props.scrolled,
    }
  );

  const navLinkClass = classNames(
    "nav-link mx-auto lg:mx-0 font-bold mt-4 lg:mt-0 p-4 whitespace-nowrap hover:opacity-100 pl-8",
    {
      "text-neutral-content": props.textWhite || !props.scrolled,
      "text-black": !props.textWhite || props.scrolled,
    }
  );
  const navContentClass = classNames(
    "p-16 w-full flex-grow lg:flex lg:flex-col lg:items-center lg:w-auto hidden lg:block lg:mt-0 text-black p-4 lg:p-0 z-20",
    {
      "bg-white": props.scrolled,
      "bg-transparent": !props.scrolled,
    }
  );

  const titleClass = classNames("no-underline hover:no-underline font-bold", {
    "text-neutral-content": props.textWhite || !props.scrolled,
    "text-black": !props.textWhite || props.scrolled,
  });

  return (
    <nav id="header" className={headerClass}>
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 -ml-4 flex items-center">
          <Link href="/">
            <a className={titleClass}>{props.siteTitle}</a>
          </Link>
        </div>

        {props.showNav && props.navMenuItems && (
          <div className={navContentClass}>
            <ul className="navbar list-reset lg:flex self-end justify-end shrink w-min items-center">
              {props.navMenuItems.map((i) => (
                <li key={i._key}>
                  <CTALink
                    {...i}
                    buttonActionClass={navActionClass}
                    linkActionClass={navLinkClass}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
