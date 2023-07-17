/**
 * Exercício 1: Média Pesada (*)
Analise o seguinte algoritmo.
INICIO (nota1: INTEIRO, nota2: INTEIRO, nota3: INTEIRO, 
peso1: INTEIRO, peso2: INTEIRO, peso3: INTEIRO) 
ED: mediaPesada REAL
mediaPesada  (nota1*peso1+ nota2*peso2+ nota3*peso3) /(peso1+peso2+peso3)
RETORNA (mediaPesada)
FIM
a) Represente o algoritmo sob a forma de fluxograma.
b) Implemente algoritmo numa função.
c) Modularize o método elaborado anteriormente de forma a separar a entrada/saída de dados do 
processamento dos mesmos.
d) Elabore um conjunto de testes unitários que garanta que o processamento (i.e., o cálculo da 
média) é corretamente realizado.
 */

/**
 * 
 * @param gradeOne 
 * @param weightOne 
 * @param gradeTwo 
 * @param weightTwo 
 * @param gradeThree 
 * @param weightThree 
 * @returns the result of weight average
 */
function calculateWeightedAverage(gradeOne: number, weightOne: number, gradeTwo: number, weightTwo: number, gradeThree: number, weightThree: number): number {
    let weightedAverage: number = (gradeOne * weightOne + gradeTwo * weightTwo + gradeThree * weightThree) / (weightOne + weightTwo + weightThree);
    return weightedAverage;
}