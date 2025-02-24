import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, ScrollTopBtn } from "@/components";
import { Slide, ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});
export const metadata: Metadata = {
  title: "Abanoub Portfolio",
  description: "Front End Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <Navbar />
        </header>
        <main className="flex-grow flex flex-col">{children}</main>
        <ScrollTopBtn />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          transition={Slide}
        />
      </body>
    </html>
  );
}
