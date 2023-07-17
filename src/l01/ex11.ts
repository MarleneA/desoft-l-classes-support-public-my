/**
 * Exercício 11: Cálculo da altura de um edifício (Newton) (***)
Calcular a altura de um edifício usando a gravidade.
Referência
https://minilua.com/tres-metodos-diferentes-medir-altura-predio/
Notas
Suba no edifício e lá do alto largue uma pedra. Cronometre o tempo que a pedra vai levar para atingir o 
chão. De seguida use a Equação do movimento variado ( D=V0.t +(a.t2)/2 ) para descobrir a distância 
percorrida pela pedra (que nada mais é do que a altura do prédio).
• D - é a distância que a pedra vai percorrer (a altura do prédio).
• V0 - é a velocidade inicial da pedra, que, como é largada, vai ser igual a zero.
• a - é a aceleração da pedra, que neste caso é a gravidade da terra e vale 9,8 m/s².
• t - é o tempo cronometrado no relógio (em segundos).
 */

/**
 * 
 * @param timeInSeconds 
 * @returns the building height
 */
function calculateBuildingHeight(timeInSeconds: number): number {
    let inicialVelocity: number = 0;
    let stoneAceleration: number = 9.8;
    return (inicialVelocity * timeInSeconds) + (stoneAceleration * Math.pow(timeInSeconds, 2) / 2);
}

console.log(calculateBuildingHeight(2));