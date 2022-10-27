import React from "react";
import clientConfig from "../client-config";
import BasePortableText from "@sanity/block-content-to-react";
import serializers from "./serializers";

const PortableText = ({ blocks, className }) => (
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} className={className} />
);

export default PortableText;
