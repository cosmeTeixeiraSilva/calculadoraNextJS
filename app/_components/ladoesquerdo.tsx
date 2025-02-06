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
    </div>
  );
}

export default LadoEsquerdo;
