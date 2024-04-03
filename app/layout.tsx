import type { Metadata } from "next";
import { Inter, Oswald, Gabriela, Great_Vibes } from "next/font/google";
import "./css/elements.css";
import "./css/animations.css";
import "./css/buttons.css";
import "./css/containers.css";
import "./css/globals.css";
import Header from "../components/header/header3/Header";
import Footer from "../components/footer/footer2/Footer";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font1",
  weight: ["200", "300", "400", "500", "600", "700"],
});
const gabriela = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font2",
});

const great = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font3",
});

// MUST BE FIXED
export const metadata: Metadata = {
  metadataBase: new URL("https://constr-rouge.vercel.app/"),
  title: {
    // if i write absolute title it will ignore template title
    // absolute: "",
    default: "ChaCha AB Restaurant AB",
    //  instead of that  --> %s <--  i can write title on any page.  what i write after --> | <-- it will be weiten after title
    template: "%s | ChaCha AB Restaurant AB",
  },
  description:
    "We Buid Your Dreams Schools and all constructions that can be done",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gabriela.variable} ${oswald.className} ${inter.variable} ${great.variable}  `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
