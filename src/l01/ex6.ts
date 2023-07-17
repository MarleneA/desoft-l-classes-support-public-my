/**
 * Exercício 6: Conversão de temperatura (*)
Escreva um algoritmo que converta uma temperatura em graus Celsius para a temperatura equivalente 
em graus Fahrenheit, sabendo que: 
Fahrenheit = 32 + (9 / 5) x Celsius.
 */

/**
 * 
 * @param celsius 
 * @returns 
 */
function determmineFahrenheitTemperature(celsius: number): number {
    return 32 + (9 / 5) * celsius;
}

console.log(determmineFahrenheitTemperature(22));