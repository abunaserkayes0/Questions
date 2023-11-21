"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext } from "react";
const inter = Inter({ subsets: ["latin"] });

export const AuthContext = createContext({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const authValue = {
    
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext.Provider value={authValue}>
          {children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
