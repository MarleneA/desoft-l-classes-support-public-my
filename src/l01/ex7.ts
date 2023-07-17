/**
 * Exercício 7: Conversão para minutos (*)
Escreva um algoritmo que a partir de dois números inteiros, H e M, que representam horas e minutos, 
respetivamente, calcule o número de minutos passados desde as 0H
 */

/**
 * 
 * @param hour 
 * @param minutes 
 * @returns the only in minutes de hours and minutes after 0h.  
 */
function calculateHoursInMinutes(hour: number, minutes: number): number {
    if (hour < 0 && !Number.isInteger(hour))
        throw new Error("Only Integers and superior to 0 ");

    let hoursToMinutes: number = hour * 60;
    return hoursToMinutes + minutes;
}
