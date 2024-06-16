import type { Metadata } from "next";
import {
  Inter,
  Roboto_Flex,
  Open_Sans,
  Gabriela,
  Montserrat,
  Great_Vibes,
} from "next/font/google";
import "../globals.css";
import Header from "../../../components/header/header4se/Header";
import Footer from "../../../components/footer/footer3se/Footer";
import LowerFoot from "../../../components/footer/lowerFooter2se/LowerFoot";
import { googleAnalyticsId } from "../../../controlFolder/control";

//fonts
const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const openS = Open_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "500", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font1",
  weight: ["200", "300", "400", "500", "600", "700"],
});
const gabriela = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font4",
});
const montseraat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font2",
});
const great = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font3",
});

// SEO Metadata and title tags
import {
  mainTitle,
  companyDescription,
  companyDomain,
  googleVerification,
} from "../../../controlFolder/control";
import Script from "next/script";
export const metadata: Metadata = {
  metadataBase: new URL(companyDomain),
  title: {
    // absolute: "", // If I write absolute title it will ignore template title
    default: `${mainTitle}`, // Corrected usage of template literal
    template: `%s | ${mainTitle}`, // Corrected usage of template literal
  },
  description: `${companyDescription}`,
  verification: {
    google: `${googleVerification}`,
  },
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?${googleAnalyticsId}`}
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${googleAnalyticsId}');`}
        </Script>
      </head>
      <body
        className={`${montseraat.variable} ${openS.className} ${inter.variable} ${great.variable} ${gabriela.variable}   `}
      >
        <Header />
        {children}
        <Footer />
        <LowerFoot />
      </body>
    </html>
  );
}
