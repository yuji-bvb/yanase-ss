import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "簗瀬製作所の会社概要のページです。プレス加工による自動車部品等の製造及び溶接加工を行っています。",
};

export default function Corp() {
  return (
    <div className="">
      <div className="min-h-[20vh] sm:min-h-[40vh] bg-center bg-cover bg-[url('/bgpress.jpg')] flex place-content-center">
        <div className="container px-5 place-self-center flex place-content-center text-3xl font-bold italic">
          会社概要
        </div>
      </div>
      <table className="table-fixed border-spacing-48 text-lg sm:text-2xl font-bold flex flex-col items-center justify-between p-5">
        <tbody>
          <tr>
            <td className="pt-5">社名　　　　　</td>
            <td className="pt-5">有限会社　簗瀬製作所</td>
          </tr>
          <tr>
            <td className="pt-5">代表　　　　　</td>
            <td className="pt-5">簗瀬　智広</td>
          </tr>
          <tr>
            <td className="pt-5">資本金　　　　</td>
            <td className="pt-5">300万円</td>
          </tr>
          <tr>
            <td className="pt-5">従業員数　　　</td>
            <td className="pt-5">9名(2024年1月現在)</td>
          </tr>
          <tr>
            <td className="pt-5">事業内容　　　</td>
            <td className="pt-5">
              プレス加工による自動車部品等の製造及び溶接加工
            </td>
          </tr>
          <tr>
            <td className="pt-5">主要取引先　　</td>
            <td className="pt-5">
              清水工業(株)　(株)赤池工業　青木電器工業(株)　他5社
            </td>
          </tr>
          <tr>
            <td className="pt-5">設立　　　　　</td>
            <td className="pt-5">1973年7月20日</td>
          </tr>
          <tr>
            <td className="pt-5">所在地　　　　</td>
            <td className="pt-5">東京都西多摩郡瑞穂町長岡2丁目7-12</td>
          </tr>
          <tr>
            <td className="pt-5">TEL：　　　</td>
            <td className="pt-5">
              <Link
                className="underline underline-offset-1"
                href="tel:0425577450"
              >
                042-557-7450
              </Link>
            </td>
          </tr>
          <tr>
            <td className="pt-5">FAX：　　　</td>
            <td className="pt-5">042-557-7451</td>
          </tr>
          <tr>
            <td className="pt-5">Email：　　</td>
            <td className="pt-5">
              <Link
                className="underline underline-offset-1"
                href="mailto:yanase-s.s@k6.dion.ne.jp"
              >
                yanase-s.s@k6.dion.ne.jp
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
