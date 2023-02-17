import services from '@/data/services.json';

export default function Services() {
  return (
    <>
      <section className="bg-black relative h-fit">
        <div className="page-padding static">
          <div className="max-w-7xl mx-auto py-24 ">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="sticky top-10">
                  <h2 className="font-medium text-4xl text-yellow-50 leading-tight">
                    Hvad laver jeg?
                  </h2>
                </div>
              </div>
              <div>
                {services.map((service, index) => {
                  return (
                    <div
                      className="flex items-center space-x-4 sticky top-10 bg-black"
                      key={`${service.name}-${index}`}
                    >
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl text-yellow-50 my-4">{service.name}</h3>
                        <p className="text-yellow-50 leading-relaxed">{service.description}</p>
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
