import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { body, display } from "@/components/fonts";

export const metadata: Metadata = {
  title: "404 — Cristian Olarte",
};

export default function GlobalNotFound() {
  return (
    <html lang="es" className={`dark ${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen items-center justify-center px-4">
        <main className="text-center">
          <p className="font-heading text-6xl font-semibold text-mint">404</p>
          <h1 className="mt-4 text-2xl">Página no encontrada · Page not found</h1>
          <p className="mt-6 flex justify-center gap-6">
            <Link href="/" className="text-mint underline">
              Ir al inicio
            </Link>
            <Link href="/en" lang="en" className="text-mint underline">
              Go home
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
