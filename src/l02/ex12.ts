/**
 * Exercício 12: Custo de Artigo em Saldo (**)
Construa uma solução (métodos + testes) que permita calcular o preço de saldo de um artigo. Os 
descontos variam em função do preço, conforme se mostra na tabela abaixo.
Preço (€) Desconto
Preço > 200 60%
100 < Preço ≤ 200 40%
50 < Preço ≤ 100 30%
Preço ≤ 50 20%
 */

/**
 * 
 * @param itemPrice 
 * @returns 
 */
function determineDiscountPrice(itemPrice: number): number{
    let discountPrice: number = 0 ;

    if(itemPrice > 200){
        discountPrice = itemPrice * 0.60;
    }
    else if (itemPrice <= 200){
        discountPrice = itemPrice * 0.40;
    }
    else if (itemPrice <= 100){
        discountPrice = itemPrice * 0.30;
    }
    else if (itemPrice <= 50){
        discountPrice = itemPrice * 0.20;
    }
    return itemPrice - discountPrice;
}