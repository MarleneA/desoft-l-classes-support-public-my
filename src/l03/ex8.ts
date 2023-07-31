/**
 * Exercício 8:Algarismos de um número (**)
Para cada uma das alíneas seguintes elabore uma solução (funções + testes) que retorne:
a) O número de algarismos de um número inteiro.
b) O número de algarismos pares de um número inteiro.
c) O número de algarismos ímpares de um número inteiro.
d) A soma dos algarismos de um número inteiro.
e) A soma dos algarismos pares de um número inteiro.
f) A soma dos algarismos ímpares de um número inteiro.
g) A média dos algarismos de um número inteiro.
h) A média dos algarismos pares de um número inteiro.
i) A média dos algarismos ímpares de um número inteiro.
j) Um número inteiro cujos dígitos estão pela ordem inversa (e.g. dado 987 retorna 789).
 */

// a)
function digitsOfANumber(givenNumber: number): number {
    return givenNumber.toString().length;
}

// a)
function determineDigitsWithMathematic(givenNumber: number) {
    let digitsNumber: number = 0;

    while (givenNumber > 0) {
        digitsNumber++;
        givenNumber = Math.floor(givenNumber / 10);
    }
    return digitsNumber;
}

//b)
function evenDigits(givenNumber: number): number {
    let digit: number = 0;
    let evenDigit: number = 0;

    while (givenNumber > 0) {
        digit = givenNumber % 10;

        if (digit % 2 == 0) {
            evenDigit++;
        }
        givenNumber = Math.floor(givenNumber / 10);
    }
    return evenDigit;
}

//c)
function oddDigits(givenNumber: number): number {
    let digit: number = 0;
    let oddDigit: number = 0;

    while (givenNumber > 0) {
        digit = givenNumber % 10;

        if (digit % 2 != 0) {
            oddDigit++;
        }
        givenNumber = Math.floor(givenNumber / 10);
    }
    return oddDigit;
}

//d)
function sumDigits(givenNumber: number): number {
    let digit: number = 0;
    let sumDigit: number = 0;

    while (givenNumber > 0) {
        digit = givenNumber % 10;
        givenNumber = Math.floor(givenNumber / 10);
        sumDigit = sumDigit + digit;
    }
    return sumDigit;
}

//e)
function sumEvenDigits(givenNumber: number): number {
    let evenDigit: number = 0;
    let sumEvenDigit: number = 0;

    while (givenNumber > 0) {
        evenDigit = givenNumber % 10;

        if (evenDigit % 2 == 0) {
            sumEvenDigit = sumEvenDigit + evenDigit;;
        }
        givenNumber = Math.floor(givenNumber / 10);
    }
    return sumEvenDigit;
}

//f)
function sumOddDigits(givenNumber: number): number {
    let oddDigit: number = 0;
    let sumOddDigit: number = 0;

    while (givenNumber > 0) {
        oddDigit = givenNumber % 10;

        if (oddDigit % 2 != 0) {
            sumOddDigit = sumOddDigit + oddDigit;;
        }
        givenNumber = Math.floor(givenNumber / 10);
    }
    return sumOddDigit;
}

//g)

function averageDigits(givenNumber: number): number {
    let digit: number = 0;
    let sumDigit: number = 0;
    let cont: number = 0;

    while (givenNumber > 0) {
        digit = givenNumber % 10;
        givenNumber = Math.floor(givenNumber / 10);
        sumDigit = sumDigit + digit;
        cont++;
    }
    return sumDigit / cont;
}

//h)
function averageEvenDigits(givenNumber: number): number {
    let digit: number = 0;
    let even: number = 0;
    let evenDigit: number = 0;

    while (givenNumber > 0) {
        digit = givenNumber % 10;

        if (digit % 2 == 0) {
            even = even + digit;
            evenDigit++;
        }
        givenNumber = Math.floor(givenNumber / 10);
    }
    return even / evenDigit;
}

//i)
function averageOddDigits(givenNumber: number): number {
    let digit: number = 0;
    let odd: number = 0;
    let oddDigit: number = 0;

    while (givenNumber > 0) {
        digit = givenNumber % 10;

        if (digit % 2 != 0) {
            odd = odd + digit;
            oddDigit++;
        }
        givenNumber = Math.floor(givenNumber / 10);
    }
    return odd / oddDigit;
}

//j) Um número inteiro cujos dígitos estão pela ordem inversa (e.g. dado 987 retorna 789).
function reverseOrder(givenNumber: number): number {
    let digit: number = 0;
    let reverseNumber: number = 0;

    while (givenNumber > 0) {
        digit = givenNumber % 10;
        reverseNumber = reverseNumber * 10 + digit;
        givenNumber = Math.floor(givenNumber / 10);
    
    }
return reverseNumber;
}
console.log(reverseOrder(987));


