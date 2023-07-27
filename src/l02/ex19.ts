/**
 * Exercício 19: Cálculo de fim de hora de processamento (***)
Desenvolva uma solução que sabendo a hora de início de processamento de uma tarefa numa 
determinada máquina e o tempo que a tarefa demora a processar, calcule a hora de fim de processamento. 
O tempo de início de processamento é indicado em horas, minutos e segundos e o tempo de duração do 
processamento em segundos. O tempo de fim de processamento deve ser retornado em horas, minutos 
e segundos.
 */

import { convertSecondsInHoursMinutesSeconds } from "./ex8";


function calculateEndTaskInSeconds(beginningTaskHour: number, beginningTaskMinutes: number, beginningTaskSeconds: number, timeTaskinSeconds: number): number {
    const beginningTaskHourInSeconds: number = beginningTaskHour * 3600;
    const beginningTaskMinutesInSeconds: number = beginningTaskMinutes * 60;
    const totalTaskInSeconds: number = beginningTaskHourInSeconds + beginningTaskMinutesInSeconds + beginningTaskSeconds + timeTaskinSeconds;

    return totalTaskInSeconds;
}

function determineEndTaskInHoursMinutesSeconds(beginningTaskHour: number, beginningTaskMinutes: number, beginningTaskSeconds: number, timeTaskinSeconds: number): string {
    let endTaskInSeconds: number = calculateEndTaskInSeconds(beginningTaskHour, beginningTaskMinutes, beginningTaskSeconds, timeTaskinSeconds);
    let endTaskFormatted: string = convertSecondsInHoursMinutesSeconds(endTaskInSeconds);
    return endTaskFormatted;
}

console.log(determineEndTaskInHoursMinutesSeconds(15, 35, 5, 95000));

