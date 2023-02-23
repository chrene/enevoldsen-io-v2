import services from "@/data/services.json";
import clsx from "clsx";

export default function Services() {
  return (
    <>
      <section className="bg-black relative h-fit">
        <div className="page-padding">
          <div className="max-w-sm md:max-w-7xl md:mx-auto md:py-24">
            <div className="flex flex-col gap-8 md:grid md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <div className="md:sticky md:top-10 z-50">
                  <h2 className="font-extrabold text-4xl sm:text-5xl leading-snug sm:leading-tight uppercase text-yellow-50">
                    erfaring og <span className="bg-pink-500">Kompetencer</span>
                  </h2>
                </div>
              </div>
              <div className="md:col-span-6">
                {services.map((service, index) => {
                  return (
                    <div
                      className="flex items-center space-x-4 md:sticky md:top-0 bg-black"
                      key={`${service.name}-${index}`}
                    >
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl text-pink-500 my-4">
                          {service.name}
                        </h3>
                        <p className="text-brand-50/90 leading-relaxed">
                          {service.description}
                        </p>
                        <div
                          className={clsx(
                            "md:h-[1px] md:mb-8 w-full bg-yellow-50 my-8 bg-opacity-20",
                            {
                              "h-[0px] mb-16": index === services.length - 1,
                            }
                          )}
                        ></div>
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
