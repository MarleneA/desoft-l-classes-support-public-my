/**
 * Exercício 2: Cálculo do valor de encomenda (*)
Uma florista utiliza tulipas e rosas na execução de ramos de flores. O preço das flores varia com 
frequência. O preço unitário de cada flor é conhecido apenas quando é efetuado o pedido do ramo. Um 
cliente ao pedir o ramo de flores define a quantidade de rosas e tulipas que pretende. Calcule o preço 
final do pedido do cliente.
Dúvidas
• Quantas rosas e quantas tulipas?
• Qual o preço unitário das rosas e das tulipas?
• Como se calcula o valor do ramo?
Abordagem
• Perguntar a quantidade de rosas e tulipas.
• Perguntar o preço unitário das rosas e das tulipas
• Total = rosas * preço unitário das rosas + tulipas * preço unitário das tulipas
 */

/**
 * 
 * @param numberTulipes 
 * @param unitPriceTulipes 
 * @param numberRoses 
 * @param unitPriceRoses 
 * @returns The total price of a bouquet with roses and tulipes
 */
function bouquetPrice(numberTulipes: number, unitPriceTulipes: number, numberRoses: number, unitPriceRoses: number): number {
    if (numberTulipes == 0 || numberRoses == 0)
        throw new RangeError('Number of flowers invalid');

    let totalPrice = (numberTulipes * unitPriceTulipes) + (numberRoses * unitPriceRoses);
    return totalPrice;
}

console.log(bouquetPrice(5, 0.10, 6, 0.20));