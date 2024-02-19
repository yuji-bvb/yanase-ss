import Link from "next/link";

  export default function Footer() {
    return (

<footer className="w-full max-w-[85rem] py-10 px-4 mt-40 sm:px-6 lg:px-8 mx-auto">
  <div className="text-center">
    <div className="text-3xl font-bold italic">
      <Link href="/">簗瀬製作所</Link>
    </div>
    <div className="mt-3">
    TEL: <Link href="tel:0425577450">042-557-7450</Link>
    <br/>
    FAX: 042-557-7451
    </div>
    <div className="mt-3">
      <p className="text-gray-500">© Yanase. 2024 . All rights reserved.</p>
    </div>
  </div>
</footer>
    )
}
