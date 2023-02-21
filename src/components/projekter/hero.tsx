import useIsScrolled from "@/hooks/use-is-scrolled";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  const isScrolled = useIsScrolled(150);

  return (
    <>
      <section className="bg-yellow-50">
        <div className="page-padding">
          <div className="max-w-xl mx-auto py-24">
            <h1 className="font-extrabold text-5xl text-gray-800 text-center leading-tight">
              Projekter
            </h1>
            <p className="text-center text-lg mt-8">
              Jeg har igennem min karriere arbejdet med mange forskellige
              projekter, både som freelancer og som ansat. Her er en liste over
              nogle af de projekter jeg har arbejdet på.
            </p>
            <div className="flex justify-center mt-8 space-x-8 items-center">
              {/* bouncing chevron to indicate to scroll down */}
            </div>
          </div>
          <div className="flex flex-col items-center mb-12">
            <FiChevronDown
              className={`text-gray-500 animate-bounce h-12 w-12 transition-opacity duration-500 ${
                isScrolled ? "opacity-0" : "opacity-100"
              } `}
            />
          </div>
        </div>
      </section>
    </>
  );
}
