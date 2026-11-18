"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/** Menú desplegable para pantallas pequeñas; se cierra al navegar o al tocar fuera. */
export function MobileMenu({
  label,
  navLabel,
  children,
}: {
  label: string;
  navLabel: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (ref.current) ref.current.open = false;
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const el = ref.current;
      if (el?.open && !el.contains(e.target as Node)) el.open = false;
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <details ref={ref} className="relative lg:hidden">
      <summary
        className="list-none rounded-full p-2 text-muted-foreground hover:text-mint [&::-webkit-details-marker]:hidden"
        aria-label={label}
      >
        <Menu className="size-5" aria-hidden />
      </summary>
      <nav
        aria-label={navLabel}
        className="absolute right-0 mt-2 w-56 rounded-lg border border-line bg-surface p-4 shadow-lg"
      >
        {children}
      </nav>
    </details>
  );
}
