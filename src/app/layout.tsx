import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer/Footer";

const heartIcon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%E2%9D%A4%EF%B8%8F%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "Celeste Evertsen",
  description: "Frontend developer portfolio",
  icons: {
    icon: heartIcon,
    shortcut: heartIcon,
    apple: heartIcon,
  },
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