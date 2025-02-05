"use server";

export async function primeiraAcao(dado:string) {
  console.log("Ação do Lado do Servidor 1");
  return `Primeira ação processada: ${dado}`;
}

export async function segundaAcao(numero:number) {
    console.log("Ação do Lado do Servidor 2");
  return `Dobro do número: ${numero * 2}`;
}

export async function terceiraAcao(nome:string) {
    console.log("Ação do Lado do Servidor 3");
      return `Bem-vindo, ${nome}!`;
}
