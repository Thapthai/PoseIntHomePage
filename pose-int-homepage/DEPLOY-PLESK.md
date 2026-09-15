# Deploy บน Plesk (Next.js)

คู่มือรันโปรเจกต์ **pose-int-homepage** บนเซิร์ฟเวอร์ผ่าน Plesk Node.js

**โดเมนเป้าหมาย:** `test1.poseintelligence.com`

## สิ่งที่ต้องมี

- Plesk ที่มี **Node.js** extension
- Node.js **เวอร์ชัน 22** (path: `/opt/plesk/node/22/bin`)
- โดเมน `test1.poseintelligence.com` ชี้มาที่เซิร์ฟเวอร์แล้ว
- เปิดสิทธิ์ **SSH Access** ให้บัญชีที่ใช้งาน

## ไฟล์สำคัญในโปรเจกต์

| ไฟล์ | หน้าที่ |
|------|--------|
| `server.js` | จุดเริ่มต้นแอปสำหรับ Plesk (ใช้ `PORT` จากเซิร์ฟเวอร์) |
| `package.json` | สคริปต์ `build` / `start` |

> **อย่าอัป** โฟลเดอร์ `node_modules` และ `.next` จากเครื่องตัวเอง — ให้สร้างบนเซิร์ฟเวอร์

---

## สำคัญ: ตั้ง PATH ของ Node ก่อนทุกครั้ง

ตรวจเวอร์ชัน Node ที่มีบนเซิร์ฟเวอร์:

```bash
ls -la /opt/plesk/node/
```

ตัวอย่างผลลัพธ์อาจเห็นโฟลเดอร์เช่น `18`, `20`, `22` — เลือกเวอร์ชันที่ต้องการ (แนะนำ **22**)

หลัง `cd` เข้าโฟลเดอร์โปรเจกต์ **ต้องรันคำสั่งนี้ก่อน** `npm` / `node` ทุกครั้งใน SSH Terminal:

```bash
export PATH=/opt/plesk/node/22/bin:$PATH
```

> ถ้า `ls` แล้วไม่มี `22` ให้เปลี่ยนเลขใน PATH ให้ตรงที่มี เช่น `/opt/plesk/node/20/bin`

ตรวจว่าใช้ Node ถูกต้อง:

```bash
node -v
# ควรได้ v22.x.x
which node
# ควรชี้ไป /opt/plesk/node/22/bin/node
```

---

## SSH Terminal บน Plesk

1. ล็อกอิน Plesk → **Domains** → **`test1.poseintelligence.com`**
2. เปิด **SSH Terminal** / **WebSSH**
3. ถ้าไม่มีปุ่ม: Hosting → เปิด SSH access เป็น `/bin/bash`

---

## ขั้นตอนที่ 1 — อัปโหลดโค้ด

อัปโหลดโปรเจกต์ไปที่โฟลเดอร์ของ `test1.poseintelligence.com` (Git / File Manager / FTP)

โครงสร้างตัวอย่าง:

```text
/.../test1.poseintelligence.com/   (หรือ httpdocs)
  ├── app/
  ├── public/
  ├── package.json
  ├── server.js
  ├── next.config.ts
  └── ...
```

---

## ขั้นตอนที่ 2 — เปิด Node.js ใน Plesk

1. Domains → **`test1.poseintelligence.com`** → **Node.js**
2. Enable Node.js
3. ตั้งค่า:

| ตั้งค่า | ค่าที่แนะนำ |
|---------|-------------|
| Node.js version | **22.x** |
| Application mode | `production` |
| Application root | โฟลเดอร์โปรเจกต์ |
| Application startup file | `server.js` |
| Application URL | `/` |
| **Proxy mode** | **เปิด** |

---

## ขั้นตอนที่ 3 — ติดตั้งและ build (SSH Terminal)

```bash
# 1) เข้าโฟลเดอร์โปรเจกต์ (ปรับ path ให้ตรงของจริง)
cd /var/www/vhosts/poseintelligence.com/test1.poseintelligence.com
# หรือ เช่น: cd ~/httpdocs

# 2) ตรวจเวอร์ชัน Node ที่มีบน Plesk
ls -la /opt/plesk/node/

# 3) ตั้ง PATH ของ Node 22 (ทำก่อน npm เสมอ — เปลี่ยนเลขถ้าไม่มี 22)
export PATH=/opt/plesk/node/22/bin:$PATH

# 4) ตรวจว่าอยู่ถูกที่ + ใช้ Node ถูกต้อง
ls package.json server.js
node -v

# 5) ติดตั้งและ build
npm install
npm run build
```

---

## ขั้นตอนที่ 4 — เริ่มแอป

1. หน้า **Node.js** ของ `test1.poseintelligence.com`
2. กด **Restart App**
3. เปิด [https://test1.poseintelligence.com](https://test1.poseintelligence.com)

---

## อัปเดตเว็บรอบถัดไป

```bash
cd /var/www/vhosts/poseintelligence.com/test1.poseintelligence.com
export PATH=/opt/plesk/node/22/bin:$PATH

git pull          # ถ้าใช้ Git
npm install       # ถ้ามีการเปลี่ยน dependency
npm run build
```

แล้วกด **Restart App** ใน Plesk

---

## แก้ปัญหาเบื้องต้น

### `node` / `npm` ไม่เจอ หรือเวอร์ชันผิด

รันใหม่:

```bash
export PATH=/opt/plesk/node/22/bin:$PATH
node -v
```

ค่า `export PATH=...` มีผลเฉพาะ session นั้น — เปิด Terminal ใหม่ต้องรันซ้ำ

### หน้าเว็บขึ้น 502 / ไม่เปิด

- เปิด **Proxy mode**
- กด **Restart App**
- ตรวจว่ามีโฟลเดอร์ `.next` หลัง build แล้ว

### Error ตอน build

```bash
cd /var/www/vhosts/poseintelligence.com/test1.poseintelligence.com
export PATH=/opt/plesk/node/22/bin:$PATH
rm -rf node_modules .next
npm install
npm run build
```

---

## สรุปคำสั่งสั้น ๆ

```bash
cd /path/to/project
ls -la /opt/plesk/node/
export PATH=/opt/plesk/node/22/bin:$PATH
npm install
npm run build
# จากนั้น Restart App ใน Plesk
```

---

## หมายเหตุ

- ต้อง `cd` เข้าโปรเจกต์ก่อน แล้วค่อย `export PATH=...` ก่อนรัน `npm`
- โหมด `npm run dev` ไม่ใช้บน production
- SSL: เปิด Let's Encrypt ใน Plesk สำหรับ `test1.poseintelligence.com` ได้ตามปกติ
