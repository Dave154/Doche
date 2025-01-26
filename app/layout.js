import { Montserrat, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header";


const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: "Doche",
  description: "Step Into Style with Doche",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${cormorant.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
