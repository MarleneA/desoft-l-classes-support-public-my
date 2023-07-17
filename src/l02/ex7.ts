/**
 * Exercício 7: Cálculo de volume de um cubo (**)
Analise o seguinte algoritmo que a partir da área de um cubo expressa em cm2
calcula o seu volume.
INICIO (area: Real)
ED: aresta, volume REAL
SE (area>0) ENTÃO 
aresta <- RAIZ_QUADRADA(area/6)
volume <- aresta ^ 3
SENÃO 
volume <- -1
FIMSE
RETORNA volume
FIM
a) Implemente o algoritmo acima descrito. 
b) Copie o algoritmo e faça as alterações necessárias de modo a devolver a classificação do cubo de 
acordo com a seguinte tabela:
VOLUME (dm3
) CLASSIFICAÇÃO
<= 1 Pequeno
1 < V <= 2 Médio
> 2 Grande
c) Elabore um conjunto de testes unitários que garanta que o(s) processamento(s) é/são 
corretamente realizado(s).

 */

/**
 * 
 * @param area 
 * @returns 
 */
function calculateCubeVolume(area: number): string {
    let edge: number;
    let volume: number;

    if (area > 0) {
        edge = Math.sqrt(area / 6);
        volume = Math.pow(edge, 3);
    }
    else {
        volume = -1;
    }
    if (volume <= 1) {
        return "Small";
    }
    else if (volume <= 2) {
        return "Average";
    }
    else {
        return "Large";
    }
} 