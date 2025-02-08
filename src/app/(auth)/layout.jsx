import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

//?import font
import estedadFont from "@/constants/localFonts";

export const metadata = {
  title: "Login",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${estedadFont.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
