import Link from "next/link";
import Head from "next/head";
import Navbar from "components/Navbar";

export default function Layout({ children, title = "Texas BoardX" }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="bg-gray-50 p-2">
        <div className="block md:w-9/12 m-auto">
          {children}
        </div>
      </main>
      
      <footer> © 2021 Texas BoardX, Inc. All rights reserved.</footer>
    </div>
  );
}
