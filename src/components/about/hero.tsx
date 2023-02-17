export default function Hero() {
  return (
    <>
      <section className="bg-yellow-50">
        <div className="page-padding">
          <div className="max-w-7xl mx-auto py-24">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-7">
                <h1 className="font-extrabold text-4xl text-gray-800 leading-tight">
                  Mit navn er Christian. <br />
                  Jeg er freelance web designer og udvikler.
                </h1>
                <p className="text-lg mt-8">
                  Med over 10 års erfaring i webudvikling og design, kan jeg hjælpe dig med at
                  opbygge en hjemmeside, der øger din online synlighed og tiltrækker flere kunder.
                </p>
                <div className="flex mt-8 space-x-8 items-center">
                  <a href="#" className="btn btn-primary btn-arrow">
                    Kontakt mig
                  </a>
                  <a className="link link-primary">Se mine projekter</a>
                </div>
              </div>
              <div className="col-span-5">
                <div className="rounded-full overflow-hidden h-96 w-96 ">
                  <img src="/images/christian.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
