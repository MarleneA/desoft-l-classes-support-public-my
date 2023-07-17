/**
 * Exercício 8: Formatar Apresentação de Horas (**)
Construa uma função e respetivos testes que dado um tempo em segundos de um determinado momento 
do dia, devolva-o no formato “horas : minutos : segundos” correspondente.
 */

/**
 * 
 * @param seconds 
 * @returns 
 */
function convertSecondsToTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

   return hours +":" + minutes +":" + remainingSeconds;


}

// alternative

/**
 * 
 * @param timeseconds 
 * @returns 
 */
export function convertSecondsInHoursMinutesSeconds(timeseconds: number): string{
    const secondsInMinutes:  number = Math.trunc(timeseconds / 60);
    const secondsInSeconds: number = timeseconds % 60;
    const minutesInHours: number = Math.trunc(secondsInMinutes / 60);
    const modMinutes: number = secondsInMinutes % 60;

    return minutesInHours +":" + modMinutes +":" + secondsInSeconds;
}


