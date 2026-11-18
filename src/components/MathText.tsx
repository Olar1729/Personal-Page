import { Fragment } from "react";

/** Muestra "C^∞" como C<sup>∞</sup>; el resto del texto queda igual. */
export function MathText({ text }: { text: string }) {
  const parts = text.split("^∞");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <sup>∞</sup>}
        </Fragment>
      ))}
    </>
  );
}
