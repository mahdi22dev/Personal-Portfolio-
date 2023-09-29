import React from "react";

export default function SectionHeading({ children }) {
  return (
    <h2 className='text-4xl font-bold capitalize mb-10 text-center'>
      {children}
    </h2>
  );
}
