import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import RegisterDialog from "@/components/auth/RegisterDialog";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import LoginDialog from "@/components/auth/LoginDialog";
import QueryProvider from "@/context/query-provider";

export const metadata: Metadata = {
  title: "DriveHub",
  description: "Your Car Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#EBF2F7] antialiased`}>
        <QueryProvider>
          <NuqsAdapter>
            <RegisterDialog />
            <LoginDialog />
            {children}
          </NuqsAdapter>
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
