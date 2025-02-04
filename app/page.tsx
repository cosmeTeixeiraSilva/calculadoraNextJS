"use client";
import { useState } from "react";

export default function Home() {
  //Variáveis Necessárias
  const [numero_A, setNumero_A] = useState(0);
  const [numero_B, setNumero_B] = useState(0);
  const [resultado, setResultado] = useState(0);
  //Função Calcular
  function Calcular() {
    console.log(numero_A, numero_B);
    setResultado(numero_A + numero_B);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1>Simples Calculadora</h1>
      <input
        type="number"
        className="rounded p-4 text-4xl text-orange-400 text-center"
        value={numero_A}
        onChange={(e) => setNumero_A(parseFloat(e.target.value))}
      />
      <input
        type="number"
        className="rounded p-4 text-4xl text-orange-400 text-center"
        value={numero_B}
        onChange={(e) => setNumero_B(parseFloat(e.target.value))}
      />
      <input
        type="number"
        className="rounded p-4 text-4xl text-center text-orange-400 text-center"
        value={resultado}
      />

      <button
        className="border w-40 p-2 rounded hover:scale-110 hover:opacity-45 hover:cursor-pointer"
        onClick={Calcular}
      >
        Somar
      </button>
    </div>
  );
}
