import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Celeste Evertsen",
  description: "Frontend developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
         <Footer/>
      </body>
     
    </html>
  );
}