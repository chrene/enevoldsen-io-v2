import portfolio from "@/data/portfolio.json";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <section className="bg-yellow-50 relative h-fit">
        <div className="page-padding static">
          <div className="max-w-7xl mx-auto py-8 md:py-16">
            <div className="flex flex-col">
              <div className="py-4 bg-yellow-50 flex justify-between">
                <h2 className="font-extrabold text-4xl md:text-5xl md:leading-snug text-gray-800 max-w-lg">
                  Personlige projekter
                </h2>
              </div>
              <div className="flex flex-row flex-wrap items-start -mx-8 md:mt-8">
                {portfolio.personal.map((portfolio, index) => {
                  return (
                    <div
                      className="md:basis-[50%] basis-full flex items-center bg-yellow-50 mt-8 md:even:mt-32 px-8"
                      key={`${portfolio.name}-${index}`}
                    >
                      <div className="flex-1 space-y-8">
                        <h3 className="font-extrabold text-2xl text-gray-800 mb-4">
                          {portfolio.name}
                        </h3>
                        <img
                          alt={portfolio.name}
                          src={portfolio.image}
                          className="w-full overflow-hidden rounded-lg shadow-lg mt-8 object-contain"
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

                        <a
                          href={portfolio.link}
                          target="_blank"
                          className="link link-arrow"
                        >
                          <span className="font-medium">Se projektet</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mx-auto justify-center my-16 ">
                <Link href="/projekter" className="btn btn-primary btn-arrow">
                  Se alle projekter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
