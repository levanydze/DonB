import Link from "next/link";
import React from "react";

interface button1Props {
  value: string;
  styling: string;
  target: string;
}
export default function Button1({ value, styling, target }: button1Props) {
  return (
    <>
      <Link href={target} className={styling}>
        {value}
      </Link>
    </>
  );
}
