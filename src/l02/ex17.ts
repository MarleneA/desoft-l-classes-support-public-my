/**
 * Exercício 17: Custo da Pintura (***)
Construa uma ou mais funções e respetivos testes que em conjunto permitam determinar o custo da 
pintura de um edifício, contabilizando tinta e mão-de-obra. 
Será fornecida a área do edifício, o custo do litro da tinta a utilizar e o respetivo rendimento do litro, isto 
é, a área que se consegue pintar com um litro dessa tinta e o salário/dia de um pintor. 
Considere a seguinte informação:
• Cada pintor trabalha 8 horas por dia e o seu rendimento é de 2 m2/hora;
• O número de pintores necessários é determinado a partir da seguinte tabela:
Área Número de Pintores
Entre 0 e 100 m2 exclusive 1
De 100 a 300 m2 exclusive 2
De 300 a 1000 m2 exclusive 3
Acima de 1000 m2 4
 */

/**
 * 
 * @param buildingArea 
 * @param literPaintCost 
 * @param yieldPerLiter 
 * @returns 
 */
function costPaint(buildingArea: number, literPaintCost: number, yieldPerLiter: number): number {
    let totalLitersCost: number = (buildingArea / yieldPerLiter) * literPaintCost;
    return totalLitersCost;
}

/**
 * 
 * @param buildingArea 
 * @param painterSalary 
 * @returns 
 */
function calculatePainterSalary(buildingArea: number, painterSalary: number): number {
    const workerCapacity: number = 16;
    return (buildingArea / workerCapacity) * painterSalary;
}

/**
 * 
 * @param buildingArea 
 * @param painterSalary 
 * @returns 
 */
function totalPaintersCost(buildingArea: number,painterSalary: number): number{
    let numberOfPainters: number = 1;

    if (buildingArea > 100 && buildingArea < 300) {
        numberOfPainters = 2;
    }
    else if (buildingArea < 1000) {
        numberOfPainters = 3;
    }
    else {
        numberOfPainters = 4;
    }
    return numberOfPainters * calculatePainterSalary(buildingArea, painterSalary);
}

/**
 * 
 * @param buildingArea 
 * @param painterSalary 
 * @param literPaintCost 
 * @param yieldPerLiter 
 * @returns 
 */
function totalCostPainting(buildingArea: number, painterSalary: number, literPaintCost: number, yieldPerLiter: number): number{
    return costPaint(buildingArea, literPaintCost, yieldPerLiter) + totalPaintersCost(buildingArea, painterSalary);
}

