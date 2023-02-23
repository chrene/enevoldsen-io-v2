import portfolio from "@/data/portfolio.json";
import Link from "next/link";

export default function ProfessionalProjects() {
  return (
    <>
      <section className="bg-black relative h-fit">
        <div className="page-padding static">
          <div className="max-w-7xl mx-auto py-24">
            <div className="flex flex-col">
              <div className="py-4 bg-black flex justify-between">
                <h2 className="font-extrabold text-5xl leading-snug text-yellow-50 max-w-lg">
                  Arbejdsrelaterede projekter
                </h2>
              </div>
              <div className="grid grid-cols-12 gap-24 mt-16">
                {portfolio.professional.map((portfolio, index) => {
                  return (
                    <div
                      className="flex bg-black col-span-12 md:col-span-6"
                      key={`${portfolio.name}-${index}`}
                    >
                      <div className="flex-1 space-y-8">
                        <h3 className="font-extrabold text-2xl text-yellow-50 mb-4">
                          {portfolio.name}
                          <div className="text-xs font-normal mt-2 text-yellow-50 text-opacity-40">
                            Periode: {portfolio.start} - {portfolio.end}
                          </div>
                        </h3>
                        <div className="flex mt-4 space-x-4">
                          {portfolio.tags.map((tag, index) => {
                            return (
                              <span
                                className="text-xs text-yellow-50 bg-yellow-50 bg-opacity-10 px-2 py-1 rounded uppercase tracking-widest"
                                key={`${tag}-${index}`}
                              >
                                {tag}
                              </span>
                            );
                          })}
                        </div>

                        <p className="text-yellow-50/80 leading-relaxed">
                          {portfolio.description}
                        </p>

                        <div className="mt-8">
                          <Link
                            href={portfolio.link}
                            target="_blank"
                            className="link link-underline text-base"
                          >
                            <span className="text-yellow-50">Se projektet</span>
                          </Link>
                        </div>
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
