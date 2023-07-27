/**
 * Exercício 14: Emissão de Notificação (**)
O departamento que controla o índice de poluição do meio ambiente mantém 3 grupos de indústrias que 
são altamente poluentes do meio ambiente. 
O índice de poluição aceitável varia de 0 até 0,3. 
Se o índice subir para além de 0,3 as indústrias do 1º grupo são intimadas a suspenderem as suas 
atividades, se o índice crescer para além de 0,4 as indústrias do 1º e 2º grupo são intimadas a suspenderem 
as suas atividades e se o índice superar os 0,5 os 3 grupos devem ser notificados a paralisarem as suas 
atividades. 
Elabore uma solução (métodos + testes) que recebe o índice de poluição medido e retorna a notificação 
apropriada
 */

function rangePollutionIndex(pollutionIndex: number): string{
if(pollutionIndex <= 0.3){
    return "Acceptable";
}
else if(pollutionIndex > 0.3){
    return "1º group needs to suspend the activity";
}
else if(pollutionIndex > 0.4){
    return "1º and 2º groups needs to suspend the activity";
}
else{
    return "The 3 groups needs to suspend the activity";
}
}