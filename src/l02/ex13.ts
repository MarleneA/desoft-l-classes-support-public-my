/**
 * Exercício 13: Estruturas de decisão encadeadas (**)
Dado o seguinte algoritmo:
INICIO (aprovados: REAL)
ED: resultado: STRING
SE (aprovados <0 OU aprovados >1) ENTÃO
ESCREVER(“Valor Inválido”)
SENÃO
SE (aprovados <0.2) ENTÃO
ESCREVER(“Turma Má”)
SENÃO
SE (aprovados <0.5) ENTÃO
ESCREVER(“Turma Fraca”)
SENÃO
SE (aprovados <0.7) ENTÃO
ESCREVER(“Turma Razoável”)
SENÃO
SE (aprovados <0.9) ENTÃO
ESCREVER(“Turma Boa”)
SENÃO
ESCREVER(“Turma Excelente”)
FIMSE
FIMSE
FIMSE
FIMSE
FIMSE
RETORNAR resultado
FIM
a) Analise-o e descreva por palavras suas a funcionalidade do mesmo.
b) Implemente o algoritmo.
c) Elabore um conjunto de testes unitários que garanta que o processamento é corretamente 
realizado.
d) Copie a solução anterior e altere-a, de forma que os limites de validação sejam flexíveis (definidos 
pelo utilizador), ou seja, recebidos por parâmetro
 */

/**
 * 
 * @param classapproved 
 * @returns 
 */
function classClassification(classapproved: number,): string {
    if (classapproved < 0 || classapproved > 1) {
        return ("Invalid value");
    }
    else if (classapproved < 0.2) {
        return ("Bad Class");
    }
    else if (classapproved < 0.5) {
        return ("Weak Class");
    }
    else if (classapproved < 0.7) {
        return ("Reasonable Class");
    }
    else if (classapproved < 0.9) {
        return ("Great Class");
    }
    else {
        return ("Excellent Class");
    }
};

function classClassificationWithGivenParameters(classapproved: number, range: number): string {
    if (classapproved < 0 || classapproved > 1) {
        return ("Invalid value");
    }
    else if (classapproved < range) {
        return ("Bad Class");
    }
    else if (classapproved < range) {
        return ("Weak Class");
    }
    else if (classapproved < range) {
        return ("Reasonable Class");
    }
    else if (classapproved < range) {
        return ("Great Class");
    }
    else {
        return ("Excellent Class");
    }
};

