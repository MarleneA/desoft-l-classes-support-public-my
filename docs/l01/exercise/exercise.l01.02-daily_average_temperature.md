# Exercise #t01.01: Display Day Average Temperature

## Problem
Calculate the average daily temperature over the course of a week. 
Temperatures were recorded hourly for 7 days a week.

## Pseudocode

```pseudocode
INICIO
    ED: dia, hora INTEIRO
    ED: temperatura, soma, media REAL
    
    REPETIR PARA dia <- 1 ATE 7 PASSO 1 //para cada dia da semana
        soma <- 0
    
        REPETIR PARA hora <- 1 ATE 24 PASSO 1 //para cada hora do dia
            LER (temperatura)
            soma <- soma + temperatura 
        FIMREPETIR
        
        media <- soma / 24) 
        ESCREVER (media)
    FIMREPETIR
FIM
```