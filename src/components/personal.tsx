import portfolio from "@/data/portfolio.json";
import Link from "next/link";

export default function PersonalProjects() {
  return (
    <>
      <section className="bg-yellow-50 relative h-fit">
        <div className="page-padding static">
          <div className="max-w-7xl mx-auto py-8 md:py-16">
            <div className="flex flex-col">
              <div className="py-4 bg-yellow-50 flex flex-col gap-4">
                <h2 className="font-extrabold text-4xl md:text-5xl md:leading-snug text-gray-800 max-w-lg">
                  Personlige projekter
                </h2>
                <p className="text-lg max-w-sm lg:max-w-xl">
                  I min fritid arbejder jeg på en række personlige projekter,
                  som jeg udvikler for at lære nye teknologier og for at udvikle
                  mine færdigheder. Her er et udvalg af mine personlige
                  projekter.
                </p>
              </div>
              <div className="grid grid-cols-12 w-full gap-y-12 sm:gap-x-12 mt-8">
                {portfolio.personal.map((portfolio, index) => {
                  return (
                    <div
                      className="col-span-12 sm:col-span-6 lg:col-span-4 flex justify-between flex-col flex-1 h-full"
                      key={`${portfolio.name}-${index}`}
                    >
                      <div className="flex flex-col space-y-6">
                        <h3 className="font-extrabold text-xl text-gray-800">
                          {portfolio.name}
                        </h3>
                        <img
                          alt={portfolio.name}
                          src={portfolio.image}
                          className="h-48 overflow-hidden rounded-lg shadow-lg mt-2 object-cover"
                        />

                        <div className="flex mt-4 space-x-4">
                          {portfolio.tags.map((tag, index) => {
                            return (
                              <span
                                className="text-xs text-gray-800 bg-black bg-opacity-10 px-2 py-1 rounded uppercase tracking-widest"
                                key={`${tag}-${index}`}
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>

                        <p className="text-gray-800 text-opacity-60 leading-relaxed">
                          {portfolio.description}
                        </p>
                      </div>
                      <div className="mt-8 md:mt-4">
                        <a
                          href={portfolio.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link link-arrow"
                        >
                          <span className="font-medium text-lg md:text-base">
                            Se projektet
                          </span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
