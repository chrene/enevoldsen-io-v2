import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export type CTALinkProps = {
  title: string;
  link?: string;
  route?: string;
  landingPageRoute?: any;
  kind?: string;
  buttonActionClass?: string;
  linkActionClass?: string;
};

const CTALink = (props: CTALinkProps): JSX.Element => {
  const router = useRouter();

  const doNavigate = (target) => {
    if (!target || !target.length) {
      return;
    }
    const internal = /^\/(?!\/)/.test(target);

    if (internal) {
      router.push(target);
    } else {
      window.location = target;
    }
  };

  let link = props.route || props.link || "#";
  if (
    props.landingPageRoute &&
    props.landingPageRoute.slug &&
    props.landingPageRoute.slug.current
  ) {
    link = props.landingPageRoute.slug.current;
  }

  if (props.kind === "button") {
    return (
      <button
        id="navAction"
        onClick={() => doNavigate(link)}
        className={props.buttonActionClass || ""}
      >
        {props.title}
      </button>
    );
  }

  // External
  if (props.link) {
    return (
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-content"
      >
        {props.title}
      </a>
    );
  }

  return (
    <Link href={link}>
      <a className={props.linkActionClass || ""}>{props.title}</a>
    </Link>
  );
};

export default CTALink;
