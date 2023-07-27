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

    return hours + ":" + minutes + ":" + remainingSeconds;


}

// alternative

/**
 * 
 * @param timeseconds 
 * @returns 
 */
export function convertSecondsInHoursMinutesSeconds(timeSeconds: number): string {
    let secondsInMinutes: number = Math.trunc(timeSeconds / 60);
    let seconds: number = timeSeconds % 60;
    let minutesInHours: number = Math.trunc(secondsInMinutes / 60);
    const modMinutes: number = secondsInMinutes % 60;
    let modMinutesString: string = "";
    let secondsString: string = "";

    if (minutesInHours > 24) {
        minutesInHours = minutesInHours % 24;
    }

    if (modMinutes < 10) {
        modMinutesString = 0 + modMinutes.toString();
    }
    else{
        modMinutesString = modMinutes.toString();
    }

    if (seconds < 10) {
        secondsString = 0 + seconds.toString();
    }
    else{
        secondsString = seconds.toString();
    }

    return minutesInHours + ":" + modMinutesString + ":" + secondsString;
}


