import Link from "next/link";
import Head from "next/head";
import Navbar from "components/Navbar";

export default function Layout({ children, title = "Texas BoardX" }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="p-2 min-h-full">
        <div className="block md:w-9/12 m-auto">
          {children}
        </div>
      </main>
      
      <footer className="bg-gray-100 mt-8">
        <div className="container flex flex-col items-center px-4 py-6 mx-auto space-y-6 lg:space-y-0 lg:flex-row lg:justify-between">
          <p className="text-sm text-center text-gray-500 dark:text-gray-300">© 2021 Texas BoardX, Inc. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="/about" class="text-sm text-gray-500 dark:text-gray-300 hover:underline">About</a>
            <a href="/about" class="text-sm text-gray-500 dark:text-gray-300 hover:underline">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
