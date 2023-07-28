/**
 * Exercício 6:Operações de múltiplos num intervalo (**)
Sabendo que o operador % dá o resto da divisão entre dois inteiros pretende-se que elabore para cada 
alínea uma solução (funções + testes) que retorne:
a) O número de múltiplos de 3 num dado intervalo.
b) O número de múltiplos de um dado número inteiro num dado intervalo.
c) O número de múltiplos de 3 e 5 num dado intervalo.
d) O número de múltiplos de dois números inteiros num dado intervalo.
e) A soma dos múltiplos de dois números inteiros num dado intervalo.
 */

function determineMultiples(): number{
    let multiples: number = 0;
    for(let i = 0; i < 10; i ++){
        if(i % 3 == 0){
            multiples = multiples + 1;
        }
    }
    return multiples;
}

function determineMultiplesWithARandomNumber(number: number): number{
    let multiples: number = 0;
    for(let i = 0; i < 10; i ++){
        if(i % number == 0){
            multiples = multiples + 1;
        }
    }
    return multiples;
}

function determineMultiplesOfThreeAndFive(rangeStart: number, rangeEnd: number): number{
    let multiples: number = 0;
    for(let i = rangeStart; i < rangeEnd; i ++){
        if(i % 3 == 0 && i % 5 ==0){
            multiples = multiples + 1;
        }
    }
    return multiples;
}

function determineMultiplesOfTwoNumbers(numberOne: number, numberTwo: number, rangeStart: number, rangeEnd: number): number{
    let multiples: number = 0;
    for(let i = rangeStart; i < rangeEnd; i ++){
        if(i % numberOne == 0 || i % numberTwo ==0){
            multiples = multiples + 1;
        }
    }
    return multiples;
}

function calculateSumOfMultiples(numberOne: number, numberTwo: number, rangeStart: number, rangeEnd: number): number{
    let sum: number = 0;
    for(let i = rangeStart; i <= rangeEnd; i ++){
        if(i % numberOne == 0 || i % numberTwo ==0){
            sum = sum + i;
        }
    }
    return sum;
}

console.log(calculateSumOfMultiples(3, 5, 0, 10));