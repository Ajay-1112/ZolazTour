import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zolaz",
  description: "Tour And travels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Meow+Script&display=swap"
          rel="stylesheet"
        />      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
