import { Jost } from "next/font/google";
import "./globals.scss";
import Script from "next/script";
import Header from "@/blocks/Header/Header";
import MobileMenu from "@/blocks/MobileMenu/MobileMenu";
import Footer from "@/blocks/Footer/Footer";
import FeedbackPopup from "@/blocks/FeedbackPopup/FeedbackPopup";

const jost = Jost({
  variable: "--font-family",
  subsets: ["latin", "cyrillic"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${jost.variable}`}>
        <Script
          src="https://api-maps.yandex.ru/v3/?apikey=e1f9579b-8502-438f-8273-6dff1fc98656&lang=ru_RU"
          strategy="beforeInteractive"
        />
        <Header />
        {children}
        <Footer />

        <MobileMenu />
        <FeedbackPopup />
      </body>
    </html>
  );
}
