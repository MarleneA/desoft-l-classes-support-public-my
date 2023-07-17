/**Exercício 13: Cálculo da distância entre dois operários (***)
Dois operários mantêm um poste vertical esticando dois cabos de aço: um com 40 m de comprimento e 
o outro com 60 m. Os cabos fazem entre si um ângulo de 60º. Calcula a distância a que se encontram os 
dois operários.
Notas
Na trigonometria, a lei dos cossenos ou Teorema de Carnot, relaciona os comprimentos dos lados de um 
triângulo ao cosseno de um de seus ângulos*/

/**
 * 
 * @returns the result of the distance between two workers
 */
function calculateWorkersDistance(): number {
    let cableA: number = 60;
    let cableB: number = 40;
    let cos: number = 0.5;
    let powDistance: number = Math.pow(cableA, 2) + Math.pow(cableB, 2) - (2 * cableA * cableB * cos);

    return Math.sqrt(powDistance);
}

console.log(calculateWorkersDistance());