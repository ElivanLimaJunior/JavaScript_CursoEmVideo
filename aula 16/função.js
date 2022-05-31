function parimp(n) { // o n é o nosso parametro. inicialmente ele não tem valor. 
      if (n%2==0) { // fazemos aqui a nossa condição
          return 'par'
      } else {
          return 'impar'
      }                 // após a condição ser executada, o resultado vai para a return.
  }

console.log(parimp(2)) // Aqui estamos passando o parametro para a função parimp e o valor entre () é o parametro real que vai ser jogado dentro do parametro n e então irá passar pela condição.

 // também é possivel jogar esse valor dentro de uma variavel.
let res = parimp(3)
console.log(res)