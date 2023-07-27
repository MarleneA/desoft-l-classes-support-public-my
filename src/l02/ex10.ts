/**
 * Exercício 10: Múltiplos (**)
Implemente uma ou funções e respetivos testes que em conjunto permitam que, dados dois números (X 
e Y) indique se um é múltiplo do outro, retornando, conforme o caso, uma das mensagens do tipo: X é 
múltiplo de Y ou Y é múltiplo de X ou X não é múltiplo nem divisor de Y.
 */

/**
 * 
 * @param x 
 * @param y 
 * @returns the indication if x is a multiple of Y, vice versa, or neither. 
 */
function multiples(x: number, y: number): string {
    let multipleNumber: string = "X isn't multiple or divisor of Y";

    if (x % y == 0) {
        multipleNumber = "X is multiple of Y";
    }
    else if (y % x == 0) {
        multipleNumber = "Y is multiple of X";
    }
    return multipleNumber;
}

console.log(multiples(5, 10));
