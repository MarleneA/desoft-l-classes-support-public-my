/**
 * Exercício 3: Cálculo do volume de um cilindro (*)
Pretende-se calcular quantos litros é possível armazenar num vasilhame cilíndrico, conhecidos o raio da 
base e a altura do cilindro.
*
 */

/**
 * 
 * @param baseRadius 
 * @param cylinderHeight 
 * @returns The volume cylinder in liters
 */
function calculateCylinderVolume(baseRadius: number, cylinderHeight: number): number {
    let cylinderVolumeCubicMeters: number = (3.14 * Math.pow(baseRadius, 2)) * cylinderHeight;
    let cylinderVolumeLiters: number = cylinderVolumeCubicMeters * 1000;
    return cylinderVolumeLiters;
}
console.log(calculateCylinderVolume(6, 4));