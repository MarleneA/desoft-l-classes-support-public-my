/**
 * Exercício 5: É par? (*)
Crie uma função que devolva True se o número analisado for par.
 */

function evenNumber(number: number): boolean {
   return number % 2 == 0;
}

console.log(evenNumber(5));