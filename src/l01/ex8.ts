/**
 * Exercício 8: Cálculo da distância de uma trovoada (**)
Qual a distância a que se encontra uma trovoada?
Referência
https://www.ipma.pt/pt/educativa/faq/meteorologia/observacao/faqdetail.html?f=/pt/educativa/fa
q/meteorologia/observacao/faq_0009.html
Notas
É possível determinar a distância a que está uma trovoada, medindo o intervalo de tempo entre a 
ocorrência do relâmpago e o instante em que se ouve o trovão. Como a velocidade da luz é de 
aproximadamente 300 000 000 m/s (1 079 252 849 km/h), o relâmpago é visível quase 
“instantaneamente”. 
Contudo, como a velocidade do som no ar é substancialmente menor (1224 km/h), o trovão não se ouve 
em simultâneo.
Assim, a distância em metros ao local onde ocorreu a trovoada é obtida multiplicando a velocidade do 
som pelo intervalo de tempo, em segundos, entre o relâmpago e o trovão.
Por exemplo:
• se o intervalo é de 10 segundos, a trovoada está a 3 400 m (3,4 km);
• se a trovoada estiver a 5 000 m (5 km), o intervalo de tempo é de 14,7 s
 */

function calculteThunderstormDistance(timeRange: number): number {
    let soundVelocityInkM: number = 1224;
    let hourInSecond: number = 3600;
    let oneKmInMeters: number = 1000;

    return (soundVelocityInkM * timeRange) / hourInSecond * oneKmInMeters;
}

console.log(calculteThunderstormDistance(10));