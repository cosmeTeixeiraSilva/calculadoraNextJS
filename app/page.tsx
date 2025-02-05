"use client";
import { useState } from "react";
import LadoEsquerdo from "./_components/ladoesquerdo";
import LadoDireito from "./_components/ladodireito";
import Image from "next/image";
export default function Home() {
 
  return (
    <div className="flex flex-col w-2/3 mx-auto h-screen text-center justify-center">
   
      <label  className="text-orange-500 text-3xl  text-center ">Calculadora  <span className="text-white">NEXT.JS</span>     </label>
      <div className="flex  items-center justify-center  space-y-4  mx-auto gap-x-10 bg-[#454545]">
      
      
      <LadoEsquerdo />
      <LadoDireito />
   
      </div>
      <Image
        src="/iconNextJs.png" // Caminho da imagem
        alt="Descrição da Imagem"
        width={100} // Largura da imagem
        height={100} // Altura da imagem
        className="text-center  mx-auto"
      />
    </div>
  );
}
