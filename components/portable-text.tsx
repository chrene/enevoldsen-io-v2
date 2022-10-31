import React from "react";
import clientConfig from "../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers";
import { PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    p: ({ children }) => (
      <p className="hidden text-gray-600 font-semibold">{children}</p>
    ),

    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
  },
};

const PortableText = ({ blocks }) => (
  <BasePortableText
    blocks={blocks}
    serializers={serializers}
    components={components}
    {...clientConfig.sanity}
  />
);

export default PortableText;
