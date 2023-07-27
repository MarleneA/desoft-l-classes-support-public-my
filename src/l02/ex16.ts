/**
 * Exercício 16: Cálculo de média de milhas e conversão (**)
Desenvolva uma solução (métodos + testes) que a partir de cinco valores indicando as distâncias diárias 
em milhas percorrida por um estafeta, durante uma semana de trabalho, retorne a distância média diária 
em quilómetros. A conversão faz-se com base na fórmula: 1 Milha=1609 metros
 */

/**
 * 
 * @param distanceOne 
 * @param distanceTwo 
 * @param distanceThree 
 * @param distanceFour 
 * @param distanceFive 
 * @returns the average traveled for a worker in a week
 */
function calculateWorkedDistanceInKm(distanceOne: number, distanceTwo: number, distanceThree: number, distanceFour: number, distanceFive: number): number{
    const milesInMeters: number = 1609;
    let dailyDistanceAverageInMiles: number = (distanceOne + distanceTwo + distanceThree + distanceFour + distanceFive) / 5;
    let dailyDistanceAverageInKm: number = (dailyDistanceAverageInMiles * milesInMeters) / 1000;

    return dailyDistanceAverageInKm;
}

console.log(calculateWorkedDistanceInKm(3, 2.5, 1, 16, 18));