/**
 * Exercício 2: Saber se valor é igual ou superior a 8 (*)
Crie uma função que devolva verdadeiro se uma nota a analisar seja igual ou superior a 8.
 */

/**
 * 
 * @param num 
 * @returns true or false if a grade is equal or superior to eight
 */
function determineGradeEqualOrSuperiorEight(grade: number): boolean {
    if (grade >= 8) {
      return true;
    }
    return false;
}

console.log(determineGradeEqualOrSuperiorEight(9));