function sortEvenAndOddNumbers(givenNumbers: number[]): number[] {
    if (givenNumbers.length < 0 || givenNumbers.length > 9) {
        throw new Error("Only numbers with one digit");
    }
    let evenNumbers: number[] = [];
    let oddNumbers: number[] = [];

    for (let i = 0; i < givenNumbers.length; i++) {
        if (givenNumbers[i] % 2 == 0) {
            evenNumbers[i] = givenNumbers[i];
        }
        else {
            oddNumbers[i] = givenNumbers[i];
        }
    }
    return evenNumbers.concat(oddNumbers);
}

function sortEvenAndOddNumbers2(givenNumbers: number[]): number[] {
    if (givenNumbers.length < 0 || givenNumbers.length > 9) {
        throw new Error("Only numbers with one digit");
    }
    let evenNumbers: number[] = givenNumbers.filter(elem => elem % 2 == 0);
    let oddNumbers: number[] = givenNumbers.filter(elem => elem % 2 != 0);

    return evenNumbers.concat(oddNumbers);
}
