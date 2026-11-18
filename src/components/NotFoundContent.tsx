import Link from "next/link";

/** 404 bilingüe, usado dentro de cada layout y en el 404 global. */
export function NotFoundContent() {
  return (
    <div className="py-24 text-center">
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
    </div>
  );
}
