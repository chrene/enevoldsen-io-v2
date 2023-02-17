import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header>
        <div className="page-padding">
          <div className="max-w-7xl mx-auto py-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <Link href="/" className="font-extrabold text-2xl text-gray-800">
                  Christian Enevoldsen
                </Link>
                <span className="text-gray-800 text-sm">Web designer og udvikler</span>
              </div>
              <nav className="flex space-x-8">
                <Link href="/om" className="link link-primary text-base">
                  Om mig
                </Link>
                <Link href="/services" className="link link-primary text-base">
                  Arbejde
                </Link>
                <Link href="/freelance" className="link link-primary text-base">
                  Freelance
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
