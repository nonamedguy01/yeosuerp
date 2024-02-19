import Link from "next/link";

export default function Home() {
  return (
    <main  className=" border border-blue-500 flex flex-col items-center justify-center p-16">
      <h1 className="text-red-500  text-4xl mb-16">Yeosu ERP</h1>
      <div>
        <Link href="/practice">건축기사 실기</Link>
      </div>
    </main>
  );
}