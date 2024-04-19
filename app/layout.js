"use client"
import { Lemonada } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";
import { store } from "./_ReduxToolKit/store";
const MainFont = Lemonada({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});
export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <ClerkProvider>
        <html lang="en">
          <head>
            <link rel="icon" href="/favicon.svg" type="image/svg" sizes="any" />
            <title>Courses store</title>
            <meta name="description" content="course store is a full stack next.js project." />
            <meta property="og:url" content="https://yazn-courses-store.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Courses store" />
            <meta property="og:description" content="course store is a full stack next.js project." />
            <meta property="og:image" content="https://raw.githubusercontent.com/yazn-108/courses-store/main/public/courses-store-image.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="yazn-courses-store.vercel.app" />
            <meta property="twitter:url" content="https://yazn-courses-store.vercel.app/" />
            <meta name="twitter:title" content="Courses store" />
            <meta name="twitter:description" content="course store is a full stack next.js project." />
            <meta name="twitter:image" content="https://raw.githubusercontent.com/yazn-108/courses-store/main/public/courses-store-image.png" />
          </head>
          <body className={MainFont.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </Provider>
  );
}
