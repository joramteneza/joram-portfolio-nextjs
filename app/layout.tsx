import "./globals.css";
import { Bebas_Neue } from "@next/font/google";
import Navigation from "./navigation";
import Footer from "./footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`text-[#3A3C43] ${bebasNeue.className} relative bg-primary-500`}
      >
        <div className="fixed top-8 left-8 w-full z-20">
          <Navigation />
        </div>
        <div className="mt-32 ml-0 lg:mt-0 lg:ml-24">{children}</div>
        <div className="mx-8 lg:mx-24">
          <Footer />
        </div>
      </body>
    </html>
  );
}
