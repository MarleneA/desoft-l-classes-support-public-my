/**
 * Exercício 6: Cálculo de função matemática (*)
Construa um algoritmo/método e respetivos testes que efetue o cálculo dos valores da seguinte função:
F(x) = x se x < 0
0 se x = 0
x2 – 2x se x > 0
 */

/**
 * 
 * @param x 
 * @returns the result of x
 */
function determineX(x: number): number {
    if (x <= 0) {
        return x;
    }
    else {
        return (x * x) - (2 * x);
    }
}

console.log(determineX(6));