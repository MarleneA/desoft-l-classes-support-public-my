/**
 * Exercício 9: Cálculo distância percorrida (**)
Calcular a distância percorrida pelo Zé.
Notas
Dois amigos, o Manel e o Zé, adoram correr sempre que podem. Em tom de desafio, resolveram correr 
a maratona do Porto para verificar qual era o que estava mais em forma! Correram juntos, lado a lado, 
até o Zé desistir. O Manel completou os 42195 m da prova em 4 horas, 2 minutos e 10 segundos. O Zé 
desistiu ao fim de 1 hora e 5 minutos de prova. Quantos km correu o Zé?
A velocidade média de um movimento é calculada pela razão entre o deslocamento percorrido e o 
intervalo de tempo. Fórmula da velocidade média:
v – velocidade média; ΔS – deslocamento; Δt – intervalo de tempo
 */

/**
 * 
 * @returns the distance running by Zé
 */
function calculateRunningDistance(): number {
    let runningDistanceManelInMeters: number = 42195;
    let runningTimeManelHoursToMinutes: number = 4 * 60 + 2;
    let runningTimeManelHoursToSeconds: number = runningTimeManelHoursToMinutes * 60 + 10;
    let runningTimeZeHoursToMinutes: number = 1 * 60 + 5;
    let runningTimeZeHoursToSeconds: number = runningTimeZeHoursToMinutes * 60;
    let runningDistanceZeInMeters: number = runningDistanceManelInMeters * runningTimeZeHoursToSeconds / runningTimeManelHoursToSeconds;
    return runningDistanceZeInMeters / 1000;
}

console.log(calculateRunningDistance());