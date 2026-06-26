import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@/App";
import { LanguageProvider } from "@/providers/language-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/index.css";

const root = document.getElementById("root");
if (!root) throw new Error('Root element "#root" not found');

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
