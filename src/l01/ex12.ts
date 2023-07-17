/**
 * Exercício 12: Cálculo da altura de um edifício (Tales) (***)
Calcular a altura de um edifício usando o teorema de Tales
Referência
https://minilua.com/tres-metodos-diferentes-medir-altura-predio/
Notas
Nesta abordagem vamos usar o Teorema de Tales, que nada mais é do que comparação de dois triângulos 
que são semelhantes. Esta abordagem só funciona em dias de sol.
Imagine o edifício e a respetiva sombra. Coloca-te ao lado deste edifício, de forma a apanhares sol. O 
edifício projeta uma sombra no chão que é necessário saber quanto mede. O teu corpo também projeta 
uma sobra no chão, mede-a também. Como conhece a tua altura, então isto basta para aplicar o Teorema 
de Tales que nada mais é do que comparar a tua altura com a altura do edifício através da sombra que 
vocês projetam.
Exemplo para uma pessoa que mede 2m de altura:
• H – altura do edifício
• S – sombra do edifício
• h – altura da pessoa
• s – sombra da pessoa
 */

/**
 * 
 * @param heightPerson 
 * @param shadowBuilding 
 * @param shadowPerson 
 * @returns the result of the height building calculating the shadows.
 */
function determineBuildingHeight(heightPerson: number, shadowBuilding: number, shadowPerson: number): number {
    return (shadowBuilding / shadowPerson) * heightPerson;
}

console.log(determineBuildingHeight(2, 40, 4));