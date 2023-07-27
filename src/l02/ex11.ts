/**
 * Exercício 11: Verifica se dígitos são crescentes (**)
Construa uma solução (métodos + testes) que dado um número de três dígitos (centenas, dezenas e 
unidades), verifique se a sequência dos algarismos é ou não crescente.
 */

/**
 * 
 * @param threeDigistNumber 
 * @returns true if the 3 digits number is in an ascending order.
 */
function ascendingOrder(threeDigistNumber: number): boolean {
    let hundreds: number = Math.trunc(threeDigistNumber / 100);
    let tens: number = Math.trunc(threeDigistNumber / 10) % 10;
    let units: number = threeDigistNumber % 10;

    if (hundreds < tens && tens < units) {
        return true;
    }
    return false;
}

console.log(ascendingOrder(987));
