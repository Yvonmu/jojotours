import React from "react";
import { Sora } from "next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Metadata } from "next";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Respafrica",
    template: "%s - Respafrica",
  },
  description: "WE BETTER UNDERSTAND THE EVER CHANGING TOURIST DEMAND AND BEHAVIOR. WE HELP YOU TO SUSTAINABLY REACH THE RIGHT TRAVEL CONSUMER FOR YOUR PRODUCT!",
  twitter: {
    card: "summary_large_image",
  },
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={`bg-white text-black bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Navbar />
      <div className="bg-white h-full w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
