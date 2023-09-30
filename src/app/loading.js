import Loading from "@/components/Loading";
import React from "react";

export default function loading() {
  return (
    <main className='flex justify-center items-center !min-h-[100vh] w-full'>
      <Loading />
    </main>
  );
}
