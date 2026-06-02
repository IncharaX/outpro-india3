import { Geist } from "next/font/google";
import { Footer } from "../components/layout/footer";
import { Navbar } from "../components/layout/navbar";
import "./globals.css";

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