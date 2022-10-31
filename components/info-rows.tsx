import React from "react";
import PortableText from "./portable-text";
import CTALink from "./cta-link";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import clientConfig from "../client-config";
import { imageUrlFor } from "../lib/image-url";

type InfoRow = {
  key?: string;
  kicker?: string;
  title: string;
  text: any;
  illustration: any;
  cta?: {
    title: string;
    url: string;
  };
};

type InfoRowsProps = {
  title: string;
  key: string;
  _type: string;
  disabled: boolean;
  rows: InfoRow[];
};

const maybeImage = (illustration, { imageClass = "" }) => {
  let img = null;
  if (
    illustration &&
    illustration.disabled !== true &&
    illustration.image &&
    illustration.image.asset
  ) {
    const image = imageUrlFor(illustration.image)
      .width(1000)
      .crop("focalpoint")
      .fit("crop")
      .url();
    img = (
      <img className={imageClass} src={image} alt={illustration.image.alt} />
    );
  }
  return img;
};

const InfoRows = (props: InfoRowsProps) => {
  const { rows } = props;
  return (
    <>
      {rows.map((row) => (
        <div
          className="flex flex-col md:flex-row items-center bg-white"
          key={row.key}
        >
          <div className="container mx-auto py-32 grid grid-cols-12 gap-16">
            {maybeImage(row.illustration, {
              imageClass: "col-span-12 md:col-span-6",
            })}
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center items-start text-center md:text-left space-y-8">
              <h2 className="my-0 text-tiny font-black leading-tight text-primary">
                {row.kicker}
              </h2>
              <h2 className="my-0 text-4xl font-black leading-wide text-neutral w-1/2">
                {row.title}
              </h2>
              <div className="leading-relaxed mb-32 text-base-content text-opacity-70">
                <PortableText blocks={row.text} />
              </div>
              {row.cta && row.cta.title && (
                <CTALink
                  {...row.cta}
                  buttonActionClass="btn btn-primary px-12 rounded-full"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default InfoRows;
