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
    <ClerkProvider>
      <Provider store={store}>
        <html lang="en">
          <head>
            <title>Courses store</title>
          </head>
          <body className={MainFont.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </Provider>
    </ClerkProvider>
  );
}
