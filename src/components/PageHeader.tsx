import { MathText } from "./MathText";

export function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className="pt-16 pb-10 sm:pt-20">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
      {intro && (
        <p className="mt-5 max-w-2xl text-lg text-ice">
          <MathText text={intro} />
        </p>
      )}
    </header>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 mb-4 text-2xl font-semibold first:mt-0">{children}</h2>;
}
