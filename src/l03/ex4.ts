/**
 * Exercício 4:Classificação Qualitativa (*)
Elabore uma solução que receba as classificações inteiras, entre 0 e 20, de um aluno de uma turma, e 
que devolva a classificação qualitativa correspondente, de acordo com a seguinte tabela de 
equivalências.
Nota Inteira Nota Qualitativa
[0, 4] Mau
[5, 9] Medíocre
[10, 13] Suficiente
[14, 17] Bom
[18, 20] Muito Bom
 */

function qualitativeClassification(grade: number): string{
    if (grade < 1 || grade > 20){
        throw new Error("Invalid code");
    }
    let classification: string = "Bad";
    if(grade < 5){
        classification;
    }
    else if(grade < 10){
        classification = "Mediocre";
    }
    else if (grade < 14){
        classification = "Sufficient";
    }
    else if (grade < 18){
        classification = "Good";
    }
    else if (grade <= 20){
        classification = "Excellent";
    }
    return classification;
}
