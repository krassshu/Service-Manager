import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarContext from "@/context/SidebarContext";
import ModalContext from "@/context/ModalContext";
import ModalComponent from "@/components/Modal/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Service Manager",
  description: "Product created to help organize work and manage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} id="__next">
      <ModalContext>
          <ModalComponent/>
          <Header/>
          <SidebarContext>
              <Breadcrumb/>
              <Sidebar/>
          </SidebarContext>
          <main className="w-full lg:ps-64 dark:bg-slate-900">
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {children}
              </div>
          </main>
      </ModalContext>
      </body>
    </html>
  );
}
