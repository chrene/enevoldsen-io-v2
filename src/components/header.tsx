import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu, FiX } from "react-icons/fi";

const navigation = [
  { name: "Om", href: "/om" },
  { name: "Karriere", href: "/karriere" },
  { name: "Freelance", href: "/freelance" },
];

export default function Header() {
  const router = useRouter();

  return (
    <Disclosure as="nav" className="bg-yellow-50 border-b md:border-none">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between md:py-10">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FiMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 justify-center sm:justify-between sm:items-center">
                <div className="flex flex-shrink-0 flex-col">
                  <Link
                    href="/"
                    className="font-extrabold text-xl text-gray-900"
                  >
                    Christian Enevoldsen
                  </Link>
                  <span className="text-gray-800 text-sm hidden md:block">
                    Web designer og udvikler
                  </span>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          router.pathname === item.href
                            ? "border-b border-gray-800 text-gray-800"
                            : "text-gray-800 hover:border-b hover:border-gray-800 border-transparent",
                          "px-3 py-2 rounded-md sm:rounded-none text-sm font-medium"
                        )}
                        aria-current={
                          router.pathname === item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    router.pathname === item.href
                      ? "bg-gray-900 text-yellow-50"
                      : "text-gray-800 hover:bg-gray-800/10 hover:text-gray-800",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={
                    router.pathname === item.href ? "page" : undefined
                  }
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
