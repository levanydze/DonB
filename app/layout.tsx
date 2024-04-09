import type { Metadata } from "next";
import { Inter, Oswald, Gabriela, Great_Vibes } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header3/Header";
import Footer from "../components/footer/footer2/Footer";
import LowerFoot from "../components/footer/lowerFooter/LowerFoot";
import { googleAnalyticsId } from "../controlFolder/control";

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

// SEO Metadata and title tags
import {
  companyName,
  companyDescription,
  companyDomain,
  googleVerification,
} from "../controlFolder/control";
import Script from "next/script";
export const metadata: Metadata = {
  metadataBase: new URL(companyDomain),
  title: {
    // absolute: "", // If I write absolute title it will ignore template title
    default: `${companyName}`, // Corrected usage of template literal
    template: `%s | ${companyName}`, // Corrected usage of template literal
  },
  description: `${companyDescription}`,
  verification: {
    google: `${googleVerification}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        className={`${gabriela.variable} ${oswald.className} ${inter.variable} ${great.variable}   `}
      >
        <Header />
        {children}
        <Footer />
        <LowerFoot />
      </body>
    </html>
  );
}
