"use client";
import Navbar from "@/Components/NavBar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { createContext } from "react";
const inter = Inter({ subsets: ["latin"] });

export const AuthContext = createContext({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authValue = {};

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <AuthContext.Provider value={authValue}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
