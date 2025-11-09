"use client";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

const AuthProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};

export default AuthProviders;
