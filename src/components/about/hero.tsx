import useIsScrolled from "@/hooks/use-is-scrolled";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  const isScrolled = useIsScrolled(150);
  return (
    <>
      <section className="bg-yellow-50">
        <div className="page-padding">
          <div className="max-w-sm md:max-w-xl mx-auto py-8 md:py-16">
            <div className="flex flex-col gap-4 items-center mx-auto first:space-y-4 md:max-w-4xl">
              <div className="mx-auto hidden md:block">
                <div className="rounded-full overflow-hidden w-48 h-48">
                  <img src="/images/christian.jpeg" alt="" />
                </div>
              </div>
              <h1 className="text-center font-semibold md:font-extrabold text-3xl text-gray-800 leading-tight md:leading-tight">
                Mit navn er Christian. <br />
                Jeg er freelance web designer og udvikler.
              </h1>
              <p className="text-base mt-8 text-center">
                Med over 10 års erfaring i webudvikling og design, kan jeg
                hjælpe dig med at opbygge en hjemmeside, der øger din online
                synlighed og tiltrækker flere kunder.
              </p>
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
