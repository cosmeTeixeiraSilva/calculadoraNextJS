import Image from "next/image";
import React from "react";

function LadoEsquerdo() {
  return (
    <div className=" hidden  sm:w-1/2  sm:flex flex-col mx-auto items-center justify-center gap-y-8">
      <Image
        src="/hero.svg"
        width={300}
        height={300}
        alt="Picture of the author"
      />

      <Image
        src="/Senac_logo.svg.png"
        alt="Descrição da imagem"
        width={100}
        height={100}
        className="bg-white rounded p-2 shadow-orange-50"
      />
    </div>
  );
}

export default LadoEsquerdo;
