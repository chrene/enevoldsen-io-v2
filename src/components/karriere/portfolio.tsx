import portfolio from "@/data/portfolio.json";

export default function Portfolio() {
  return (
    <>
      <section className="bg-yellow-50 relative h-fit">
        <div className="page-padding static">
          <div className="max-w-7xl mx-auto py-24">
            <div className="flex flex-col">
              <div className="py-4 bg-yellow-50 flex justify-between">
                <h2 className="font-extrabold text-5xl leading-snug text-gray-800 max-w-lg">
                  Projekter og arbejdserfaring
                </h2>
              </div>
              <div className="flex flex-row flex-wrap items-start -mx-8 mt-16">
                {portfolio.map((portfolio, index) => {
                  return (
                    <div
                      className="basis-[50%] flex items-center bg-yellow-50 even:mt-32 px-8"
                      key={`${portfolio.name}-${index}`}
                    >
                      <div className="flex-1 space-y-8">
                        <h3 className="font-extrabold text-2xl text-gray-800 mb-4">
                          {portfolio.name}
                        </h3>
                        <div
                          className="overflow-hidden rounded-lg shadow-lg h-[300px] w-full mt-8"
                          style={{
                            background: `url(${portfolio.image}) top / cover no-repeat`,
                          }}
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

                        <p className="text-black-700 leading-relaxed">
                          {portfolio.description}
                        </p>

                        <a
                          href={portfolio.link}
                          target="_blank"
                          className="link link-arrow"
                        >
                          Se projektet
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mx-auto justify-center mt-16">
                <a className="btn btn-primary btn-arrow">Se alle projekter</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
