/**
 * Exercício 3:Descrição do Produto (*)
Construa uma solução que recebe um código de um produto e retorna a descrição de acordo com o 
quadro abaixo.
CÓDIGO CLASSIFICAÇÃO
1 Alimento não perecível
2 a 4 Alimento perecível
5 a 6 Vestuário
7 Higiene pessoal
8 a 15 Limpeza e utensílios domésticos
Qualquer Outro (<>0) Código Inválido
 */

function productClassification(code: number): string{
    if (code < 1 || code > 15){
        throw new Error("Invalid code");
    }
    let classification: string = "Non-perishable food";
    if(code = 1){
        classification;
    }
    else if(code >2 && code < 4){
        classification = "Perishable food";
    }
    else if (code > 5){
        classification = "Clothing";
    }
    else if (code = 7){
        classification = "Personal Hygiene";
    }
    else if (code < 15){
        classification = "Cleaning and household items";
    }
    return classification;
}