/**
 * Exercício 2:Câmbio (*)
Elabore uma solução para obter o valor de câmbio de valores em euros, numa das moedas indicadas na 
tabela. As opções de câmbio possíveis são as seguintes: D (dólar), L (libra), I (Iene), C (Coroa Sueca) e 
F (Franco Suíço).
Moeda Símbolo Câmbio (1 euro)
Dólar D 1,534
Libra L 0,774
Iene I 161,480
Coroa sueca C 9,593
Franco suíço F 1,601
 */

/**
 * 
 * @param exchangeInEuros 
 * @param exchangeValue 
 * @returns 
 */
function exchange(exchangeInEuros: number, exchangeValue: string): number {

    switch (exchangeValue) {
        case "D": {
            return exchangeInEuros * 1.534;
            break;
        }
        case "L": {
            return exchangeInEuros * 0.774;
            break;
        }
        case "I": {
            return exchangeInEuros * 161.480;
            break;
        }
        case "C": {
            return exchangeInEuros * 9.593;
            break;
        }
        case "F": {
            return exchangeInEuros * 1.601;
            break;
        }
        default: {
            console.log("Invalid value");
            break;
        }
    }
    return exchangeInEuros;
}

console.log(exchange(45.5, "D"));