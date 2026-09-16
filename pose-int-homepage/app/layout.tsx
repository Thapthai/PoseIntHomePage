import type { Metadata } from "next";
import { cookies } from "next/headers";
import "@fontsource-variable/noto-sans-thai/wght.css";
import { LanguageProvider } from "./lib/i18n/LanguageProvider";
import {
  defaultLocale,
  LOCALE_COOKIE_KEY,
  parseLocale,
} from "./lib/i18n/dictionaries";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jar = await cookies();
  const locale = parseLocale(jar.get(LOCALE_COOKIE_KEY)?.value ?? defaultLocale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <LanguageProvider initialLocale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
