"use client"
//Quando usa o use Client a resposta sai do Client Side 
import React from 'react'
import { useState } from 'react'
import { primeiraAcao, segundaAcao, terceiraAcao } from '../_actions/servidor';

//acima da function ocorre do lado do Servidor 
console.log("Chamou o Componente Lado Direito...")
function LadoDireito
() {
     //Variáveis Necessárias
  const [numero_A, setNumero_A] = useState(0);
  const [numero_B, setNumero_B] = useState(0);
  const [resultado, setResultado] = useState(0);

  //Função async Calcular quando existe interação ações do lado do servidor
  async  function Calcular() {
    console.log("Os números Digitados:")
    console.log(numero_A, numero_B);
    setResultado(numero_A + numero_B);
    //chamando ações do lado do Servidor
    primeiraAcao("Senac Lavras");
    segundaAcao(150);
    terceiraAcao("Prof. Cosme")
    
  }
  //Função Limpar 
  function Limpar(){

    setNumero_A(0);
    setNumero_B(0);
    setResultado(0);
    window.location.reload();
    

  }

  return (
    <div className='flex flex-col space-y-4 w-1/2 '>
          <h1 className="text-orange-500 text-3xl  text-center">Calculadora com NextJS</h1>
      <input
        type="number"
        className="rounded p-4 text-4xl text-orange-400 text-center"
        value={numero_A}
        autoFocus
        onChange={(e) => setNumero_A(parseFloat(e.target.value))}
      />
      <input
        type="number"
        className="rounded  p-4 text-4xl text-orange-400 text-center"
        value={numero_B}
        onChange={(e) => setNumero_B(parseFloat(e.target.value))}
      />
      <input
        type="number"
        className="rounded  p-4 text-4xl text-orange-400 text-center"
        value={resultado}
        readOnly // Torna o campo somente leitura
      />

      <button
        className="border  p-4 text-xl font-bold rounded hover:scale-110 hover:opacity-45 hover:cursor-pointer"
        onClick={Calcular}
      >
        Somar
      </button>
      <button
        className="border text-red-700 border-red-700  p-4 text-xl font-bold rounded hover:scale-110 hover:opacity-45 hover:cursor-pointer"
        onClick={Limpar}
      >
        Limpar
      </button>
      <div className="w-full text-end">

      <label className="text-orange-500 text-md   bg-white p-2 rounded">Prof. Cosme Teixeira Silva</label>
      </div>
    </div>
  )
}

export default LadoDireito
