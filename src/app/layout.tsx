import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stuuudio | Full Service Creative Agency | Lagos",
  description: "Creative Agency",
  icons: {
    icon: "/Icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
  href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  rel="stylesheet"
/>
{/* <link */}
          {/* href="https://fonts.googleapis.com/css2?family=Inter+Display:ital,opsz,wght@0,32..144,100..900;1,32..144,100..900&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body className="bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}