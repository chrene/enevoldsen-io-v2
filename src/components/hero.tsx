import useIsScrolled from "@/hooks/use-is-scrolled";
import clsx from "clsx";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

type Props = {
  showScrollIndicator?: boolean;
  renderTitle?: () => React.ReactNode;
  renderDescription?: () => React.ReactNode;
  renderCta?: () => React.ReactNode;
  renderBottomView?: () => React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function Hero(props: Props) {
  const {
    renderTitle,
    renderDescription,
    renderCta,
    renderBottomView,
    showScrollIndicator,
    titleClassName,
    descriptionClassName,
  } = props;
  const isScrolled = showScrollIndicator ? useIsScrolled(150) : null;

  return (
    <>
      <section className="bg-yellow-50">
        <div className="page-padding">
          <div className="w-full md:max-w-xl mx-auto py-8 lg:py-24">
            <h1
              className={twMerge(
                "font-extrabold text-4xl lg:text-7xl text-gray-800 text-center leading-tight lg:leading-tight",
                titleClassName
              )}
            >
              {renderTitle?.()}
            </h1>
            <p
              className={twMerge(
                "text-center text-lg mt-8",
                descriptionClassName
              )}
            >
              {renderDescription?.()}
            </p>
            {renderCta && (
              <div className="flex justify-center mt-8 space-x-8 items-center">
                {renderCta()}
              </div>
            )}
          </div>
        </div>
        {renderBottomView && !showScrollIndicator ? renderBottomView?.() : null}
        {showScrollIndicator && (
          <div className="flex flex-col items-center mb-12">
            <FiChevronDown
              className={`text-gray-500 animate-bounce h-12 w-12 transition-opacity duration-500 ${
                isScrolled ? "opacity-0" : "opacity-100"
              } `}
            />
          </div>
        )}
      </section>
    </>
  );
}
