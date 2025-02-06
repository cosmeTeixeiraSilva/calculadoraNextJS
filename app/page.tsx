"use client";
import { useState } from "react";
import LadoEsquerdo from "./_components/ladoesquerdo";
import LadoDireito from "./_components/ladodireito";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col sm:w-2/3 mx-auto h-screen w-screen text-center justify-center p-3 space-y-4">
      <Image
        src="/Senac_logo.svg.png" // Caminho da imagem
        alt="Descrição da Imagem"
        width={90} // Largura da imagem
        height={60} // Altura da imagem
        className="text-center  mx-auto my-1 sm:hidden bg-white p-1 rounded "
      />
      <label className="text-orange-500 text-xl sm:text-3xl  text-center my-4 hidden sm:block">
        Calculadora <span className="text-white">NEXT.JS</span>{" "}
      </label>

      <div className="flex  items-center justify-center space-y-2 sm:space-y-4  sm:mx-auto sm:gap-x-10 bg-[#454545]">
        <LadoEsquerdo />
        <LadoDireito />
      </div>
      <div className="flex items-center justify-around">
        <Image
          src="/iconNextJs.png" // Caminho da imagem
          alt="Descrição da Imagem"
          width={100} // Largura da imagem
          height={30} // Altura da imagem
          className="text-center  mx-auto my-4"
        />
        <Image
          src="/Senac_logo.svg.png" // Caminho da imagem
          alt="Descrição da Imagem"
          width={80} // Largura da imagem
          height={60} // Altura da imagem
          className="text-center  mx-auto my-4 hidden sm:block bg-white p-1 rounded"
        />
      </div>
    </div>
  );
}
