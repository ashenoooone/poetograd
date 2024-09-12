import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { Page } from "@/shared/ui/page";
import { cn } from "@/shared/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Поэтоград",
  description:
    "Поэтоград — это динамичное онлайн-сообщество для русскоязычных поэтов, где можно публиковать свои стихи, оценивать работы других авторов и получать помощь от нейросети для создания новых стихотворений. Присоединяйтесь к Поэтограду, чтобы найти вдохновение, познакомиться с другими поэтами и исследовать искусство поэзии в современном цифровом пространстве.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "flex flex-col min-h-screen"
        )}
      >
        <Header className="shrink-0" />
        <Page className="flex-grow">{children}</Page>
        <Footer className="shrink-0" />
      </body>
    </html>
  );
}
