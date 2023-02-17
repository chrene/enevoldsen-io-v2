export default function Hero() {
  return (
    <>
      <section className="bg-yellow-50">
        <div className="page-padding">
          <div className="max-w-xl mx-auto py-24">
            <h1 className="font-extrabold text-5xl text-gray-800 text-center leading-tight">
              Services jeg kan hjælpe dig med
            </h1>
            <p className="text-center text-lg mt-8">
              Skal du have en ny hjemmeside, eller skal du have din eksisterende hjemmeside
              opdateret? Så kan jeg hjælpe!
            </p>
            <div className="flex justify-center mt-8 space-x-8 items-center">
              <a href="#" className="btn btn-primary btn-arrow">
                Kom igang
              </a>
              <a className="link link-primary">Se referencer</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
