import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="bg-yellow-50">
        <div className="page-padding">
          <div className="max-w-xl mx-auto py-24">
            <h1 className="font-extrabold text-7xl text-gray-800 text-center leading-tight">
              Web Designer og Udvikler
            </h1>
            <p className="text-center text-lg mt-8">
              Hej 👋 Mit navn er Christian, og jeg er en erfaren webdesigner og
              udvikler med en passion for at skabe effektive weboplevelser.
            </p>
            <div className="flex justify-center mt-8 space-x-8 items-center">
              <Link href="/projekter" className="btn btn-primary btn-arrow">
                Udvalgte projekter
              </Link>
              <Link className="link link-primary" href="/om">
                Om mig
              </Link>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] max-w-full overflow-hidden">
          <div className="absolute inset-0 z-40 bg-gradient-to-b from-black/0 to-black" />
          <div className="absolute inset-0 mx-auto max-w-4xl flex -space-x-16 py-8">
            <div
              className="min-w-[350px] translate-y-[50px] skew-x-[-10deg] rotate-[7deg] z-30"
              style={{
                background: `url(/images/hero-image-1.jpeg) top / cover no-repeat`,
                height: "100%",
              }}
            />
            <div
              className="min-w-[350px] translate-y-[30px] skew-x-[-10deg] rotate-[7deg] z-20"
              style={{
                background: `url(/images/hero-image-2.jpeg) top / cover no-repeat`,
                height: "100%",
              }}
            />
            <div
              className="min-w-[350px] translate-y-[20px] skew-x-[-10deg] rotate-[7deg] z-10"
              style={{
                background: `url(/images/hero-image-3.jpeg) top / cover no-repeat`,
                height: "100%",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
