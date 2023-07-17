/**
 * Exercício 9: Saudação conforme hora do dia (**)
Cria uma função, que com base no número de segundos de um determinado dia devolva a saudação 
adequada ao momento conforme a informação seguinte:
“Bom dia” se [ 06h0m0s; 12h0m1s [
“Boa tarde” se [ 12h0m1s; 20h0m1s [
“Boa noite” se [ 20h0m1s; 06h0m0s [
 */


// Foi usado o exemplo para relembrar como importar a função do exercicio anterior e usar neste.
/* import { convertSecondsInHoursMinutesSeconds } from "./ex8"

function greetings(secondsIntime: number){

let secondsIntimeString = secondsIntime.toString();
secondsIntimeString = convertSecondsInHoursMinutesSeconds(secondsIntime);
} */

/**
 * 
 * @param seconds 
 * @returns the greeting depending on the seconds provided
 */
function greeting(seconds: number): string {
    let greetings: string = "Good Night";

    if (seconds < 21600) {
        greetings = "Good Morning";
    }
    else if (seconds < 43201) {
        greetings = "Good Afternoon";
    }
    return greetings;
}


