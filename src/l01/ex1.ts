/**
 * Exercício 1: Percentagem por género (*)
Dada a quantidade de rapazes e raparigas de uma turma, calcule a percentagem de rapazes e raparigas 
dessa turma. 
Dúvidas
• Qual o tamanho da turma?
• Quantos rapazes?
• Quantos raparigas?
• Como se calcula uma percentagem?
Abordagem
• Perguntar a quantidade de rapazes e raparigas.
• Total = rapazes + raparigas
• Percentagem = valor parcial / total
Proposta de pseudocódigo
INICIO
ED: 
rapazes, raparigas, total INTEIRO
percentagemDeRapazes, percentagemDeRaparigas REAL
LER(rapazes, raparigas)
total <- rapazes + raparigas
percentagemRapazes <- rapazes / total
percentagemRaparigas <- raparigas / total
ESCREVER(“percentagem de rapazes = “, percentagemDeRapazes)
ESCREVER(“percentagem de raparigas = “, percentagemDeRaparigas)
FIM
 */




function percentageGirls(numBoys: number, numGirls: number): number {
    let classTotal = numBoys + numGirls;
    return numGirls / classTotal;
}

console.log("Girls percentage is " + percentageGirls(8, 16));

function percentageBoys(numBoys: number, numGirls: number): number {
    let classTotal = numBoys + numGirls;
    return numBoys / classTotal;
}

console.log("Boys percentage is " + percentageBoys(8, 16));