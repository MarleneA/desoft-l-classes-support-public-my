import { reverseOrder } from "./ex8";

/**
 * Exercício 9:Capicuas e Armstrong (**)
Para cada uma das alíneas seguintes elabore uma solução (funções + testes) que:
a) Verifique se um número inteiro é capicua.
b) Verifique se um dado número é um número de Armstrong, i.e., se for igual à soma dos cubos 
dos seus algarismos.
c) Retorne a primeira capicua num dado intervalo.
d) Retorne a maior capicua num dado intervalo.
e) Retorne o número de capicuas num dado intervalo.
f) Retorne o primeiro número de Armstrong num dado intervalo.
g) Retorne a quantidade de números de Armstrong num dado intervalo.
 */

function verifyPalindromeNumber(givenNumber: number): boolean {
    let reverseDigits: number = reverseOrder(givenNumber);
    if (givenNumber == reverseDigits) {
        return true;
    }
    return false;
}


function isArmstrongNumber(givenNumber: number): boolean {
    let digit: number = 0;
    let numberInDigits: number = 0;
    let armstrongNumber: number = 0;
    let initialNumber = givenNumber;

    while (givenNumber > 0) {
        digit = givenNumber % 10;
        givenNumber = Math.trunc(givenNumber / 10);
        numberInDigits = Math.pow(digit, 3);
        armstrongNumber = armstrongNumber + numberInDigits;
    }
    return initialNumber == armstrongNumber;
}

// c) Retorne a primeira capicua num dado intervalo.
//Opção a)
function firstPalindromeInRange(rangeStart: number, rangeEnd: number): number {
    for (let i = rangeStart; i < rangeEnd; i++) {
        if ((i < -9 || i > 9) && i == reverseOrder(i)) {
            return i;
        }
    }
    return -1;
}
//Opção b)
function firstPalindromeInARange(rangeStart: number, rangeEnd: number): number {
    for (let i = rangeStart; i < rangeEnd; i++) {
        if (i > -10 && i < 10) {
            continue;
        } else if (i == reverseOrder(i)) {
            return i;
        }
    }
    return -1;
}

//D)
function biggestPalindrome(rangeStart: number, rangeEnd: number): number {
    let biggest: number = 0;
    for (let i = rangeStart; i < rangeEnd; i++) {
        if ((i < -9 || i > 9) && i == reverseOrder(i) && i > biggest) {
                biggest = i;

        }
    }
    return biggest;
}

//E)
function numberOfPalindromes(rangeStart: number, rangeEnd: number): number {
    let palindromes: number = 0;
    for (let i = rangeStart; i <= rangeEnd; i++) {
        if (i > -10 && i < 10) {
            continue;
        } else if (i == reverseOrder(i)) {
            palindromes++;
        }
    }
    return palindromes;
}

//F) Retorne o primeiro número de Armstrong num dado intervalo.

function firstArmstrongInARange(rangeStart: number, rangeEnd: number){
    let digit: number = 0;
    let numberInDigits: number = 0;
    let armstrongNumber: number = 0;

    for(let firstArmstrong = rangeStart; firstArmstrong < rangeEnd; firstArmstrong ++){
        let number: number = firstArmstrong;
        while (number > 0) {
            digit = number % 10;
            number = Math.trunc(number / 10);
            numberInDigits = Math.pow(digit, 3);
            armstrongNumber = armstrongNumber + numberInDigits;
        }
    
    if(armstrongNumber == firstArmstrong){
        return firstArmstrong;
    }
}
return -2;
}

// g) Retorne a quantidade de números de Armstrong num dado intervalo.

function quantityOfArmstrongsInARange(rangeStart: number, rangeEnd: number): number{
    let digit: number = 0;
    let numberInDigits: number = 0;
    let armstrongNumber: number = 0;
    let count: number = 0;

    for(let firstArmstrong = rangeStart; firstArmstrong <= rangeEnd; firstArmstrong ++){
        let number: number = firstArmstrong;
        while (number > 0) {
            digit = number % 10;
            number = Math.trunc(number / 10);
            numberInDigits = Math.pow(digit, 3);
            armstrongNumber = armstrongNumber + numberInDigits;
        }
      
    if(armstrongNumber == firstArmstrong){
        count ++;
    }
    armstrongNumber = 0;
}
return count;
}

console.log(quantityOfArmstrongsInARange(153, 407));
