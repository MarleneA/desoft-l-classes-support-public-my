/**
 * Exercício 5: Cálculo da hipotenusa (*)
Calcule o valor da hipotenusa do triângulo retângulo.
 */

/**
 * 
 * @param cathetusOne 
 * @param cathetusTwo 
 * @returns 
 */
function calculateHypotenuse(cathetusOne: number, cathetusTwo: number): number {
    let hipotenuseTriangleRectangle: number = Math.pow(cathetusOne, 2) + Math.pow(cathetusTwo, 2);
    return Math.sqrt(hipotenuseTriangleRectangle);
}

console.log(calculateHypotenuse(3, 5));