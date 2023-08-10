function acumulatedProduct(numbersList: number[], givenNumber: number): number {
    let acumulated: number = 1;
    for (let i = 0; i < numbersList.length; i++) {
        acumulated = acumulated * numbersList[i];

        if (acumulated > givenNumber) {
            return i;
        }
    }
    return -1;
}
console.log(acumulatedProduct([3, 6, 12, 123], 89));