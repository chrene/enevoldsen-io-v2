import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  renderTitle?: () => React.ReactNode;
  renderDescription?: () => React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
};

export default function About(props: Props) {
  const { ctaText, ctaLink, renderTitle, renderDescription } = props;
  return (
    <>
      <section className="bg-yellow-400 relative h-fit">
        <div className="page-padding">
          <div className="max-w-7xl mx-auto py-12 md:py-8 pb-24">
            <div className="hidden md:block h-16 w-full sticky top-0 bg-gradient-to-b from-yellow-400 to-yellow-400/0 z-10"></div>
            <div className="grid grid-cols-2 gap-12 relative">
              <div className="col-span-2 md:col-span-1">
                <div className="sticky top-8">
                  {renderTitle?.()}
                  {ctaLink && ctaText && (
                    <a
                      href={ctaLink}
                      className="link link-secondary link-static"
                    >
                      {ctaText}
                    </a>
                  )}
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 relative">
                {renderDescription?.()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutTitle({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={twMerge(
        "font-bold md:font-medium text-3xl md:text-5xl text-gray-800 md:leading-tight mb-8",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function AboutDescription({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={twMerge("text-base leading-relaxed text-gray-800", className)}
      {...props}
    >
      {children}
    </p>
  );
}
