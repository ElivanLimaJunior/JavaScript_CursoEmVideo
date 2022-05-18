module Banco {
    class Conta { ...código aqui.. }
    class ContaCorrente extends Conta { ...código aqui.. }
    class Poupanca extends Conta { ...código aqui.. }
  }

  export module BancoDevmedia
{
   export interface Taxa { MudarTaxa(valor: number); }
   export class ContaCorrente implements Taxa {
       MudarTaxa(valor: number) { }
   }
}

class ContaCorrente extends Conta
{
   TrocaTaxa(valor: number)
   {
       if (this.Saldo > 50000) { valor = 0; }
       else { valor += 10.00; }
       this.Saldo =+ valor;
   }
}

01 let estaAtivo: boolean = false;
02 let qtdSorvete: number = 10;
03 let nomeCompleto: string = “Edson Dionisio”;
04 let numerosPares: number[] = [2, 4, 6, 8]; //conjunto de inteiros utilizando colchetes.
05 let numerosImpar: Array<number> = [1, 3, 5, 7, 9];