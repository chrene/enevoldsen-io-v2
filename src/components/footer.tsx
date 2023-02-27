import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-black relative h-fit">
      <div className="page-padding">
        <div className="max-w-7xl mx-auto pt-24 pb-16">
          <div className="grid grid-cols-2 gap-12">
            <div className="col-span-2 md:col-span-1">
              <h2 className="font-medium text-3xl text-yellow-50 leading-tight mb-8 text-center md:text-left">
                Du er velkommen til at kontakte mig på følgende oplysninger.
              </h2>
              <div className="flex flex-col gap-3 items-center md:items-start">
                <a
                  href="tel&#58;&#48;&#48;&#52;&#53;&#53;&#51;&#55;&#54;&#56;&#49;&#54;&#49;"
                  className="text-3xl font-bold text-gray-300"
                >
                  &#43;&#52;&#53; &#53;&#51;&#55;&#54; &#56;&#49;&#54;&#49;
                </a>

                <a href="mailt&#111;&#58;%63%40en&#101;%&#55;6&#111;l&#100;sen&#46;%69%&#54;F">
                  <span className="text-gray-500">
                    c&#64;enevol&#100;&#115;en&#46;&#105;o
                  </span>
                </a>
              </div>
            </div>
            <div className="justify-self-center md:justify-self-end md:self-end col-span-2 md:col-span-1">
              <Link href="/freelance" className="btn btn-primary btn-arrow">
                Freelance
              </Link>
            </div>
          </div>
          <div className="mt-24 divider"></div>
        </div>
      </div>
      <div className="page-padding">
        <div className="max-w-7xl mx-auto py-4 pb-16">
          <div className="grid grid-cols-2 gap-12">
            <div className="col-span-2 md:col-span-1 text-center md:text-start">
              {/* Company Logo */}
              <h3 className="text-yellow-50 text-2xl">enevoldsen.io</h3>

              <p className="">
                <span className="text-yellow-50">© 2023</span>{" "}
                <span className="text-gray-400">|</span>{" "}
                <span className="text-yellow-50">
                  Alle rettigheder forbeholdes
                </span>
              </p>
            </div>
            <div className="col-span-2 md:col-span-1 justify-self-center md:justify-self-end">
              <nav>
                <ul className="flex flex-row space-x-8 flex-wrap">
                  <li>
                    <Link href="/om">
                      <span className="text-yellow-50 hover:text-pink-500 transition-all duration-100">
                        Om
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/freelance">
                      <span className="text-yellow-50  hover:text-pink-500 transition-all duration-100">
                        Freelance
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* social links */}
              <div className="flex flex-row justify-content-center md:justify-content-start space-x-6 mt-8">
                <a
                  href="https://github.com/chrene"
                  className=""
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/christianenevoldsen/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/chrsapp"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
