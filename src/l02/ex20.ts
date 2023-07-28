/**
 * Exercício 20: Cálculo do salário semanal (***)
Pretende-se calcular o salário semanal de um empregado. Sabe-se que o número de horas semanais de 
trabalho são 36 e que o valor por hora é de 7,5€. 
Se o empregado fizer horas extras (mais de 36 horas) recebe 10€ por cada uma das 5 primeiras horas 
extra e 15€ por cada uma das restantes horas extra. Elabore uma solução (métodos + testes) que calcule 
e retorne o salário semanal de um empregado a partir do nº de horas que este trabalhou
 */

/**
 * 
 * @param extraHours 
 * @returns 
 */
function calculateWeeklySalaryWithExtraHours(extraHours: number): number{
    const weeklySalaryWithoutExtraHours: number = 270;
    let extraHoursPayment: number;


    if (extraHours < 5) {
        extraHoursPayment = extraHours * 10 ;
    }
    else{ 
        extraHoursPayment = (extraHours - 5) * 15 + 50;
    }
    return weeklySalaryWithoutExtraHours + extraHoursPayment;
}

console.log(calculateWeeklySalaryWithExtraHours(5));