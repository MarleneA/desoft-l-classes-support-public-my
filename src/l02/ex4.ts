/**
 * Exercício 4: Operadores de divisão (*)
Analise o seguinte algoritmo. Considere ainda a existência dos seguintes operadores
MOD: operador MÓDULO - devolve o resto da divisão inteira (5 MOD 2 → 1).
DIV: operador DIVISÃO INTEIRA – devolve o quociente inteiro (5 DIV 2 → 2).
INICIO (numero: INTEIRO)
ED: digito1, digito2, digito3 INTEIRO
SE (numero <100 OU numero >999) ENTÃO
ESCREVER(“Número não tem 3 dígitos”)
digito1 <- -1
SENÃO
digito3 <- numero MOD 10
digito2 <- (numero DIV 10) MOD 10
digito1 <- (numero DIV 100) MOD 10
FIMSE
RETORNAR digito1
FIM
a) Descreva por palavras sua o objetivo do algoritmo.
b) Implemente o algoritmo numa função.
c) Elabore um conjunto de testes unitários que garanta que o(s) processamento(s) é/são 
corretamente realizado(s).
 */

/**
 * 
 * @param number 
 * @returns 
 */
function divisionOperators(number: number): number {
    let digitThree: number;
    let digitTwo: number;
    let digitOne: number;

    if (number < 100 || number > 999) {
        digitOne = -1;
        console.log("Number don't have 3 digits");
    }
    else {
        // caso o numero seja com 3 digitos retorna sempre o resultado do digito 1 por causa do return digitOne;
        digitThree = number % 10;
        digitTwo = (number / 10) % 10;
        digitOne = (number / 100) % 10;
    }
    return digitOne;
}

console.log(divisionOperators(455));