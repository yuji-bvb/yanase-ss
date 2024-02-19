import Image from "next/image";
import Header from "./components/Header";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Table3 from "./components/Table3";
import Table4 from "./components/Table4";


export default function Home() {
  return (
    <div>
      <Image
          className="relative"
          src="/press.jpg"
          alt="Next.js Logo"
          width={1500}
          height={300}
          priority
        />
        <Header/>
        <Table1/>
        <Table2/>
        <Table3/>
        <Table4/>
    </div>
  );
}
