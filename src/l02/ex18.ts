/**
 * Exercício 18: Cálculo hora de chegada de comboio (***)
Elabore uma solução (métodos + testes) para apoio à CP que permita indicar a hora de chegada de um 
determinado comboio (horas e minutos), conhecida a hora de partida (horas e minutos) e a duração da 
viagem (horas e minutos). Na informação de retorno deve ainda ser indicado se o comboio chega no 
próprio dia ou no dia seguinte. Considere que a duração da viagem nunca é superior a 24 horas.
 */


function arrivingTime(departureHour: number, departureMinutes: number, travelDurationHour: number, travelDurationMinutes: number): string {
    let hourInMinutes: number = 60;
    let departureInMinutes: number = (departureHour * hourInMinutes) + departureMinutes;
    let travelDurationInMinutes: number = (travelDurationHour * hourInMinutes) + travelDurationMinutes;
    let totalTravelInMinutes: number = departureInMinutes + travelDurationInMinutes;
    let arrivingTimeInHours: number = Math.trunc(totalTravelInMinutes / hourInMinutes);
    let modArrivingTime: number = totalTravelInMinutes % 60;

    return arrivingTimeInHours + ":" + modArrivingTime;
}

console.log(arrivingTime(10, 30, 2, 35));

function arrivingOnTheSameDay(travelDurationHour: number, travelDurationInMinutes: number): string {
    const totalDuration: number = travelDurationHour + travelDurationInMinutes;
    if (totalDuration < 24) {
        return "Same Day";
    }
    return "Next day";
}

console.log(arrivingOnTheSameDay(25, 30));