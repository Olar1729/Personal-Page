import "./globals.css";
import type { Metadata } from "next";
import { body, display } from "@/components/fonts";
import { NotFoundContent } from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: "404 — Cristian Olarte",
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={`dark ${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen items-center justify-center px-4">
        <main>
          <NotFoundContent />
        </main>
      </body>
    </html>
  );
}
