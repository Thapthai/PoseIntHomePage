import type { Metadata } from "next";
import "@fontsource-variable/noto-sans-thai/wght.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./lib/i18n/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pose Intelligence",
  description:
    "บริษัท โพส อินเทลลิเจ้นซ์ จำกัด ผู้นำด้านการพัฒนาซอฟต์แวร์ การบริหารจัดการเครื่องมือแพทย์ เวชภัณฑ์ ครุภัณฑ์ และการบริหารจัดการผ้าในโรงพยาบาล",
  icons: {
    icon: "/Images/pose_favicon_1024.png",
    apple: "/Images/pose_favicon_1024.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
