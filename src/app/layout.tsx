import { Geist } from "next/font/google";
import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";
import "./globals.css";

import type { Metadata } from "next";
import { company } from "../constants/company";


export const metadata: Metadata = {
  title: {
  default: company.name,
  template: `%s | ${company.name}`,
},
  description: company.description,

  keywords: [
    "Web Development",
    "UI UX Design",
    "Cloud Solutions",
    "Digital Transformation",
    "Outpro",
  ],

  openGraph: {
    title: "Outpro",
    description:
      "Modern digital solutions for ambitious businesses.",
    siteName: "Outpro",
    locale: "en_US",
    type: "website",
  },
};
const geist = Geist({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}