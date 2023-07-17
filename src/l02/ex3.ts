/**
 * Exercício 3: Distância entre dois pontos (*)
Crie uma função que, tendo como dados de entrada dois pontos num plano – P(x1, y1) e P(x2, y2) –
calcule a distância entre eles. 
 */

/**
 * 
 * @param pointXOne 
 * @param pointXTwo 
 * @param pointYOne 
 * @param pointYTwo 
 * @returns the distance between to points
 */
function distanceBetweenToPoints(pointXOne: number, pointXTwo: number, pointYOne: number, pointYTwo: number): number {
    return Math.sqrt(Math.pow((pointXTwo - pointXOne), 2) + Math.pow((pointYTwo - pointYOne), 2));
}

console.log(distanceBetweenToPoints(5, 3, 4, 2));