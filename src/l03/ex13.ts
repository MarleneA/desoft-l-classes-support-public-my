function calculateWaysToGetANumber(givenNumber: number): number {
    if(givenNumber < 0 || givenNumber > 20){
        throw new Error("Only numbers between 0 and 20!");
    }
    let sum: number = 0;
    let count: number = 0;
    for (let i = 0; i < 10; i++) {
        for(let j = i; j < 10; j++){
            sum = i + j;
        if( sum == givenNumber){
          count ++; 
        }
    }
    }
    return count;
}

console.log(calculateWaysToGetANumber(5));