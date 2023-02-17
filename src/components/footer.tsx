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
            <div className="col-span-1">
              <h2 className="font-medium text-3xl text-yellow-50 leading-tight mb-8">
                Du er velkommen til at kontakte mig på følgende oplysninger.
              </h2>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:004553768161"
                  className="text-3xl font-bold text-gray-300"
                >
                  +45 5376 8161
                </a>
                <a href="mailto:c@enevoldsen.io">
                  <span className="text-gray-500">c@enevoldsen.io</span>
                </a>
              </div>
            </div>
            <div className="justify-self-end self-end">
              <a href="#" className="btn btn-primary btn-arrow">
                Freelance
              </a>
            </div>
          </div>
          <div className="mt-24 divider"></div>
        </div>
      </div>
      <div className="page-padding">
        <div className="max-w-7xl mx-auto py-4 pb-16">
          <div className="grid grid-cols-2 gap-12">
            <div className="col-span-1">
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
            <div className="col-span-1 justify-self-end">
              <nav>
                <ul className="flex flex-row space-x-8">
                  <li>
                    <Link href="/om">
                      <span className="text-yellow-50 hover:text-pink-500 transition-all duration-100">
                        Om
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link href="/projekter">
                      <span className="text-yellow-50  hover:text-pink-500 transition-all duration-100">
                        Projekter
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
                  <li>
                    <Link href="/kontakt">
                      <span className="text-yellow-50  hover:text-pink-500 transition-all duration-100">
                        Kontakt
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* social links */}
              <div className="flex flex-row space-x-6 mt-8">
                <a href="#" className="">
                  <FaGithub className="h-6 w-6" />
                </a>
                <a href="#">
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
                <a href="#">
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
