import React from "react";
import PortableText from "./portable-text";
import CTALink from "./cta-link";

function Hero(props) {
  return (
    <div className="flex flex-wrap flex-col md:flex-row items-center bg-neutral">
      <div className="container mx-auto py-32">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left space-y-8">
          <h1 className="my-4 text-5xl font-bold leading-tight text-neutral-content">{props.heading}</h1>
          <div className="leading-normal mb-8 text-neutral-content text-opacity-70">
            <PortableText blocks={props.tagline} className="text-xs" />
          </div>
          {props.cta && props.cta.title && (
            <CTALink {...props.cta} buttonActionClass="btn btn-primary px-12 rounded-full" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
