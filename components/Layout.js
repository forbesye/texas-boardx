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
      {children}
      <footer> © 2021 Texas BoardX, Inc. All rights reserved.</footer>
    </div>
  );
}
