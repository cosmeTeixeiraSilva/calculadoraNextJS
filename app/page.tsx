"use client";
import { useState } from "react";
import LadoEsquerdo from "./_components/ladoesquerdo";
import LadoDireito from "./_components/ladodireito";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col sm:w-2/3 mx-auto h-screen w-screen text-center justify-center p-3">
      <label className="text-orange-500 text-xl sm:text-3xl  text-center my-4 ">
        Calculadora <span className="text-white">NEXT.JS</span>{" "}
      </label>
      <div className="flex  items-center justify-center  sm:space-y-4  sm:mx-auto sm:gap-x-10 bg-[#454545]">
        <LadoEsquerdo />
        <LadoDireito />
      </div>
      <Image
        src="/iconNextJs.png" // Caminho da imagem
        alt="Descrição da Imagem"
        width={100} // Largura da imagem
        height={100} // Altura da imagem
        className="text-center  mx-auto my-4"
      />
    </div>
  );
}
