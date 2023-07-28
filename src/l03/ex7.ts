/**
 * Exercício 7:Mais operações sobre intervalos (**)
Para cada uma das alíneas seguintes elabore uma solução (funções + testes) que retorne:
a) A soma de todos os números pares num dado intervalo.
b) A quantidade de todos os números pares num dado intervalo.
c) A soma de todos os números ímpares num dado intervalo.
d) A quantidade de todos os números ímpares num dado intervalo.
e) A soma de todos os números múltiplos de um dado número num dado intervalo. Os dois 
números, que definem os limites do intervalo, não estão necessariamente por ordem crescente.
f) O produto de todos os números múltiplos de um dado número num dado intervalo.
g) A média dos múltiplos de um dado número num intervalo definido por dois números.
h) A média dos múltiplos de X ou Y num intervalo definido por dois números. X e Y são dados.
 */

function evenNumbers(rangeStart: number, rangeEnd: number): number {
    let sumEven: number = 0;
    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (i % 2 == 0) {
            sumEven = sumEven + i;
        }
    }
    return sumEven;
}

function quantityOfEvenNumbers(rangeStart: number, rangeEnd: number): number {
    let evenNumbers: number = 0;
    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (i % 2 == 0) {
            evenNumbers = evenNumbers + 1;
        }
    }
    return evenNumbers;
}


function oddNumbers(rangeStart: number, rangeEnd: number): number {
    let sumOdd: number = 0;
    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (i % 2 != 0) {
            sumOdd = sumOdd + i;
        }
    }
    return sumOdd;
}

function quantityOfOddNumbers(rangeStart: number, rangeEnd: number): number {
    let oddNumbers: number = 0;
    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (i % 2 != 0) {
            oddNumbers = oddNumbers + 1;
        }
    }
    return oddNumbers;
}

function SumOfMultiples(givenNumber: number, rangeStart: number, rangeEnd: number): number {
    let array: number[] = [rangeStart, rangeEnd].sort((a, b) => a - b);
    let sumMultiples: number = 0;
    for (let i = array[0]; i <= array[1]; i++) {
        if (i % givenNumber == 0) {
            sumMultiples = sumMultiples + i;
        }
    }
    return sumMultiples;
}

function productOfMultiples(givenNumber: number, rangeStart: number, rangeEnd: number): number {
    if (rangeStart == 0) {
        throw new Error("Invalid Range");
    }
    let product: number = 1;
    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (i % givenNumber == 0) {
            product = product * i;
        }
    }
    return product;
}

function averageOfMultiples(givenNumber: number): number {
    let multiplesArray: number[] = [];
    let sum: number = 0
    let j: number = 0;
    for (let i = 0; i <= 10; i++) {
        if (i % givenNumber == 0) {
            multiplesArray[j] = i;
            j++;
        }
    }
    for (let k = 0; k < multiplesArray.length; k++) {
        sum = sum + multiplesArray[k];
    }
    return sum / multiplesArray.length;
}

function averageMultiplesOptionTwo(givenNumber: number): number {
    let sum: number = 0;
    let size: number = 0;
    for (let i = 0; i < 10; i++) {
        if (i % givenNumber == 0) {
            sum = sum + i;
            size++;
        }
    }
    return sum / size;
}

function averageMultiplesOfTwoNumbers(givenNumberOne: number, givenNumberTwo: number): number {
    let sum: number = 0;
    let size: number = 0;
    for (let i = 0; i < 11; i++) {
        if (i % givenNumberOne == 0 || i % givenNumberTwo == 0) {
            sum = sum + i;
            size++;
        }
    }
    return sum / size;
}


function test12() {
    let array: number[] = [3, 6, 7, 1, 9, 11];

    for (let i = 0; i <= 6; i++) {
        console.log(array[i]);
    }
}

