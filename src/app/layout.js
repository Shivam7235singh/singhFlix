import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import { Mulish } from 'next/font/google'
import Footer from "./Components/Footer";
 
const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
})
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
