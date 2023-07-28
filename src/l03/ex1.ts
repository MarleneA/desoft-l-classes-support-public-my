/**Dado o seguinte algoritmo:
ED: res, num, x INTEIRO
ALG
INÍCIO
res ← 1
PARA (x ← num ATE 1 PASSO -1) FAZER
res ← res * x
FIMPARA
DEVOLVER res
FIM
a) Descreva por palavras suas o objetivo do algoritmo.
b) Traduza o algoritmo para uma função.
c) Elabore um conjunto de testes unitários que garanta que o processamento é corretamente
realizado.
d) Tem garantias de que esta solução é finita? Se não tem, altere-a de modo a garantir.*/

/**
 * 
 * @returns 
 */
function factorial(): number {
    let result: number = 1;
  

    for (let i = 5; i > 1; i--) {
        result = result * i
    }
    return result;
}