import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ライブラリ",
  description:
    "簗瀬製作所のライブラリのページです。写真を掲載しています。プレス加工による自動車部品等の製造及び溶接加工を行っています。",
};

export default function Corp() {
  return (
    <div>
      <div className="min-h-[20vh] sm:min-h-[40vh] bg-center bg-cover bg-[url('/bgpress.jpg')] flex place-content-center">
        <div className="container px-5 place-self-center flex place-content-center text-3xl font-bold italic">
          ライブラリ
        </div>
      </div>
      <div className="grid sm:grid-cols-12 gap-6 max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <Image
              className="relative"
              src="/fac1.jpg"
              alt="Next.js Logo"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
        <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <Image
              className="relative"
              src="/fac2.jpg"
              alt="Next.js Logo"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <Image
              className="relative"
              src="/fac3.jpg"
              alt="Next.js Logo"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <Image
              className="relative"
              src="/fac4.jpg"
              alt="Next.js Logo"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <Image
              className="relative"
              src="/fac5.jpg"
              alt="Next.js Logo"
              width={1000}
              height={1000}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
