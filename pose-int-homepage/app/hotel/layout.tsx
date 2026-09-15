import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RFID Hotel Linen Management System | Pose Intelligence",
  description:
    "ใช้ RFID ช่วยนับผ้าก่อนส่งซัก เช็กยอดตอนรับคืน และดูประวัติของผ้าแต่ละผืนได้ในระบบเดียว ปรับโปรแกรมให้เข้ากับวิธีทำงานของโรงแรมคุณ",
};

export default function HotelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
