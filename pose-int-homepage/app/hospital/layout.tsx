import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Healthcare Solutions | Pose Intelligence",
  description:
    "บริษัท โพส อินเทลลิเจ้นซ์ จำกัด ผู้นำด้านการพัฒนาซอฟต์แวร์ การบริหารจัดการเครื่องมือแพทย์ เวชภัณฑ์ ครุภัณฑ์ และการบริหารจัดการผ้าในโรงพยาบาล",
};

export default function HealthcareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
