/**
 * Exercício 10: Cálculo de expressão (**)
Escreva um algoritmo que calcule o valor da expressão: 𝑥2 − 3𝑥 + 1
 */

/**
 * 
 * @param x 
 * @returns The result of X
 */
function calculateExpression(x: number): number {
    return Math.pow(x, 2) - (3 * x) + 1;
}

console.log(calculateExpression(5));