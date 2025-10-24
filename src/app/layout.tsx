import { Open_Sans, Faustina } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.freeforcharity.org"),
  title: {
    default: "Free For Charity | Reduce Costs, Increase Impact",
    template: "%s | Free For Charity",
  },
  description:
    "Free For Charity connects students, professionals, and businesses with nonprofits to reduce costs and increase revenues—putting more resources back into their missions.",
  keywords: [
    "nonprofit",
    "charity",
    "volunteer",
    "donate",
    "free hosting",
    "domains",
    "Microsoft 365",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.freeforcharity.org/",
    siteName: "Free For Charity",
    title: "Free For Charity | Reduce Costs, Increase Impact",
    description:
      "Connecting students, professionals, and businesses with nonprofits to reduce costs and increase revenues.",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Free For Charity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@freeforcharity",
    title: "Free For Charity | Reduce Costs, Increase Impact",
    description:
      "Connecting students, professionals, and businesses with nonprofits to reduce costs and increase revenues.",
    images: ["/web-app-manifest-512x512.png"],
  },
};

// Configure Open Sans for navbar
const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

// Configure Faustina for body
const faustina = Faustina({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-faustina",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${faustina.variable}`}>
      <body
        className={`${faustina.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {/* <PopupProvider> */}
        <Header />
        {children}
        <Footer />
        {/* <PopupsRootClient /> */}
        {/* </PopupProvider> */}
      </body>
    </html>
  );
}
