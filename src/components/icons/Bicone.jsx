import React from "react";

export default function Bicone({ width = 16, height = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-bicone-icon lucide-bicone"
    >
      <path d="m20.9 11.55-8-8.98a1 1 0 0 0-1.8 0l-8 8.98"></path>
      <path d="m20.9 12.50-8 8.98a1 1 0 01-1.8 0l-8-8.98"></path>
      <path d="M 4 11.55 A 9 2 0 0 0 20 11.55" />
    </svg>
  );
}
