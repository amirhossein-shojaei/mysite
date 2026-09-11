import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import { AppRoutes } from "./routes/index.route";
import "./styles/globals.css";
import { LanguageProvider } from "./locales";
import { ScrollToTop } from "./components/ScrollToTop";

registerSW({ immediate: true });
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename="/mysite">
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
);
