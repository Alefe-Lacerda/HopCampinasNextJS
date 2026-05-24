import Navbar from "../layouts/navbar";
import Head from "next/head";
import "../globals.css";
import { Roboto, Cinzel, Playfair_Display } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "400", variable: "--font-roboto" });
const cinzel = Cinzel({ subsets: ["latin"], weight: "400", variable: "--font-cinzel" });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-playfair-display",
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html>
        <head>
          <title>HOP Campinas</title>
        </head>
        <body
          style={{ margin: 0, padding: 0 }}
          className={`${roboto.variable} ${cinzel.variable} ${playfairDisplay.variable}`}
        >
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </>
  );
}
