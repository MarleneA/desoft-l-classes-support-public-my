/**
 * Exercício 5:Retenção Salarial (*)
Numa determinada empresa, o salário bruto dos seus trabalhadores está sujeito à seguinte regra de 
imposto a reter: o montante até 500€ está sujeito a um imposto de 10%; o montante entre 500€ e 1000€ 
está sujeito a um imposto de 15%; e o montante acima de 1000€, a um imposto de 20%.
Construa uma solução que dado o salário bruto de um trabalhador calcule e devolva o respetivo salário 
líquido.
 */

function withholdingSalary(grossSalary: number): number {
    let netSalary: number = Math. round(grossSalary * 0.90);

    if (grossSalary < 501) {
        netSalary;
    }
    else if(grossSalary < 1001){
        netSalary = Math.round(grossSalary * 0.85);
    }
    else{
        netSalary = Math.round(grossSalary * 0.80);
    }
    return netSalary;
}
console.log(withholdingSalary(501));