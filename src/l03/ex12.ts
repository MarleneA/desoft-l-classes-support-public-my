function numberClassification(givenNumber: number): number{
    if(!Number.isInteger(givenNumber)){
        throw new Error ("Only Integers alowed");
        
    }
    let sum: number = 0;
    for(let i = 0; i < givenNumber; i++){
        if(givenNumber % i == 0){
            sum = sum + i;
        }
    }
    if(givenNumber == sum){
        return 0;
    }
    else if(givenNumber < sum){
        return 1;
    }
   return -1;
}
