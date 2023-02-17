import services from "@/data/services.json";

export default function Services() {
  return (
    <>
      <section className="bg-black relative h-fit">
        <div className="page-padding static">
          <div className="max-w-7xl mx-auto py-24 ">
            <div className="grid grid-cols-12 gap-12">
              <div className="col-span-6">
                <div className="sticky top-10">
                  <h2 className="font-extrabold text-5xl text-blue-50 leading-snug uppercase text-yellow-50">
                    Hvad kan jeg hjælpe dig med?
                  </h2>
                </div>
              </div>
              <div className="col-span-6">
                {services.map((service, index) => {
                  return (
                    <div
                      className="flex items-center space-x-4 sticky top-10 bg-black"
                      key={`${service.name}-${index}`}
                    >
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl text-yellow-50 my-4">
                          {service.name}
                        </h3>
                        <p className="text-brand-50/90 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="h-[1px] w-full bg-yellow-50 my-8 bg-opacity-20"></div>
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
