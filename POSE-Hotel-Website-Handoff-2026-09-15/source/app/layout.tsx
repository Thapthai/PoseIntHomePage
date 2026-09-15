import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RFID Hotel Linen Management System | Pose Intelligence',
  description: 'ใช้ RFID ช่วยนับผ้าก่อนส่งซัก เช็กยอดตอนรับคืน และดูประวัติของผ้าแต่ละผืนได้ในระบบเดียว ปรับโปรแกรมให้เข้ากับวิธีทำงานของโรงแรมคุณ',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
