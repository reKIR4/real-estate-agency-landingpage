import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { FilterProvider } from "@/context/FilterContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MubawabLuxe | Immobilier au Maroc",
  description: "Trouvez votre bien idéal au Maroc: Appartements, Villas, Locaux Commerciaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr" className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
      <body className="min-h-screen flex flex-col bg-white">
        <LanguageProvider>
          <FilterProvider>
            {children}
          </FilterProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
