import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/theme-switch";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mahdi | Personal Portfolio",
  description:
    "Mahdi is a Front-End developer with more than 1 year of experience.",
};

export default function RootLayout({ children }) {
  return (
    // add tailwind dark mode
    <html lang='en' className='!scroll-smooth dark'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-20 sm:pt-28 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <ActiveSectionContextProvider>
          <ThemeContextProvider>
            <Toaster position='top-right' />
            {/* <ThemeSwitch /> */}
            <Navbar />
            {children}
            <Footer />
          </ThemeContextProvider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
