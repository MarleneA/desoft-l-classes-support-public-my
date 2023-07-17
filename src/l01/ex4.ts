/**
 * Exercício 4: Cálculo do perímetro de um retângulo (*)
Calcule o perímetro do retângulo (perímetro = 2xA + 2xB
 */

/**
 * 
 * @param sideA 
 * @param sideB 
 * @returns the perimeter of a rectangle
 */
function calculatePerimeterRectangle(sideA: number, sideB: number): number {
    return (sideA * 2) + (sideB * 2);
}

console.log(calculatePerimeterRectangle(10, 20));
