import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "簗瀬製作所のお問い合わせのページです。プレス加工による自動車部品等の製造及び溶接加工を行っています。",
};

export default function Corp() {
  return ( 
  <div>
    <div className="min-h-[20vh] sm:min-h-[40vh] bg-center bg-cover bg-[url('/bgpress.jpg')] flex place-content-center">
      <div className="container place-self-center flex place-content-center text-3xl font-bold italic">
    お問い合わせ
      </div>
    </div>
    <div className="text-lg sm:text-2xl font-bold flex flex-col items-center p-10">
     お問い合わせは電話またはFAX、メールにて承っております。<br></br>
    </div>
    <table className="table-fixed border-spacing-48 text-lg sm:text-2xl font-bold flex flex-col items-center justify-between p-5">
      <tbody>
        <tr>
          <td className="pt-5">TEL：　</td>
          <td className="pt-5"><Link className="underline underline-offset-1" href="tel:0425577450">042-557-7450</Link>　(9時~17時)</td>
        </tr>
        <tr>
          <td className="pt-5">FAX：　</td>
          <td className="pt-5">042-557-7451</td>
        </tr>
        <tr>
          <td className="pt-5">Email：</td>
          <td className="pt-5"><Link className="underline underline-offset-1" href="mailto:yanase-s.s@k6.dion.ne.jp">yanase-s.s@k6.dion.ne.jp</Link></td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}
