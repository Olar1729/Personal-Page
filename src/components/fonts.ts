import { Fredoka, Inter } from "next/font/google";

/** Títulos: redondeada, parecida al logo de Polar Mat. */
export const display = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});

/** Cuerpo: sobria y muy legible. */
export const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
