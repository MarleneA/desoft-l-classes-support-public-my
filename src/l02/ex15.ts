/**
 * Exercício 15: Custo Jardinagem (**)
Uma empresa presta serviços de jardinagem e pretende automatizar o processo de cálculo de custos para 
a construção de jardins. 
Desenvolva uma solução (métodos + testes) que dada:
• a área em m2 onde será colocada a grama
• o número de árvores desejados
• o número de arbustos desejados 
seja calculado, de acordo com a tabela, a quantidade de horas necessárias para execução do serviço 
solicitado pelo cliente e também apresentar o custo estimado para o referido serviço.
A tabela indica os custos a considerar nesse cálculo.
Item Custo Tempo estimado
Grama 10 € / m2
300 s/ m2
Árvores 20 € /cada 600 s/cada
Arbustos 15 € /cada 400 s/cada
Custo trabalho / hora 10 € 1h
 */

function gardeningCost(grassArea: number, numberOfTrees: number, numberOfBushes: number): number {
    let grassAreaCost: number = grassArea * 10;
    let numberOfTreesCost: number = numberOfTrees * 20;
    let numberOfBushesCost: number = numberOfBushes * 15;

    return grassAreaCost + numberOfTreesCost + numberOfBushesCost;
}

function gardeningTotalCost(grassArea: number, numberOfTrees: number, numberOfBushes: number): number {
    let grassAreaTime: number = grassArea * 300;
    let numberOfTreesTime: number = numberOfTrees * 600;
    let numberOfBushesTime: number = numberOfBushes * 400;
    let globalGardenTimeInSeconds: number = (grassAreaTime + numberOfTreesTime + numberOfBushesTime) * 0.002777;

    return globalGardenTimeInSeconds + gardeningCost(grassArea, numberOfTrees, numberOfBushes);
}