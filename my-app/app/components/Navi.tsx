"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <header>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a className="text-3xl font-bold" href="/">
                  (有)簗瀬製作所
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link className="text-xl font-semibold p-2" href="/corporate">
                  会社概要
                </Link>
                <Link className="text-xl font-semibold p-2" href="/contact">
                  お問い合わせ
                </Link>
                <Link className="text-xl font-semibold p-2" href="/recruit">
                  採用情報
                </Link>
                <Link className="text-xl font-semibold p-2" href="/library">
                  ライブラリ
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="flex-shrink-0 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                ) : (
                  <svg
                    className="flex-shrink-0 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a className="text-xl block font-semibold p-2" href="/corporate">
                会社概要
              </a>
              <a className="text-xl block font-semibold p-2" href="/contact">
                お問い合わせ
              </a>
              <a className="text-xl block font-semibold p-2" href="/recruit">
                採用情報
              </a>
              <a className="text-xl block font-semibold p-2" href="/library">
                ライブラリ
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
