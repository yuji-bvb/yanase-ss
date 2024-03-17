import Image from "next/image";
import Header from "./components/Header";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
import Table3 from "./components/Table3";
import Table4 from "./components/Table4";
import Table5 from "./components/Table5";

export default function Home() {
  return (
    <div>
      <div className="min-h-[20vh] sm:min-h-[30vh] bg-center bg-cover bg-[url('/press2.jpg')] flex place-content-center"></div>
      <Header />
      <Table1 />
      <Table2 />
      <Table3 />
      <Table4 />
      <Table5 />
    </div>
  );
}
