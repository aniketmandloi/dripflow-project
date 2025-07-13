"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { CommandMenu } from "@/components/CommandMenu";
import { KeyboardShortcuts } from "@/components/KeyboardShortcuts";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ToastProvider } from "@/components/ui/toast-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <ToastProvider />
      <CommandMenu />
      <KeyboardShortcuts />
      <ScrollProgress />
    </NextThemeProvider>
  );
}
