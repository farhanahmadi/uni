import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

//? import components
import Header from "@/app/(users)/Header";

//?import font
import estedadFont from "@/constants/localFonts";

//? import react query provider
import Providers from "@/app/Providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${estedadFont.variable} font-sans`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
