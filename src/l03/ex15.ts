function verificationOfIDNumber(cc: number[], digitControl: number): boolean {
    let multiplication: number = 1;
    let sum: number = 0;
    let weightedSum: number = 0;
    let element: number = 9;
    for (let i = 0; i < cc.length; i++) {
        multiplication = cc[i] * element;
        element --;
       sum = sum + multiplication;
    }
    weightedSum =  sum + digitControl;
    if(weightedSum % 11 == 0){
        console.log("Correct");
        return true;
    }
    console.log("Wrong");
    return false;
}

console.log(verificationOfIDNumber([1, 2, 5, 2, 0, 5, 8, 0], 5));