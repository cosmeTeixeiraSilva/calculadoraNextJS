"use client";
import { useState } from "react";
import LadoEsquerdo from "./_components/ladoesquerdo";
import LadoDireito from "./_components/ladodireito";

export default function Home() {
 
  return (
    <div className="flex  items-center justify-center h-screen space-y-4 w-1/2 mx-auto gap-x-10 bg-[#454545]">
    <LadoEsquerdo />
    <LadoDireito />
     
    </div>
  );
}
