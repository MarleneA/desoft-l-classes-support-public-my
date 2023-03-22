# Exercise #t01.05: Check Digit

## Problem
Calculate a given number’s check digit according to Luhn’s algorithm.

# Input Example 1

    
    7992739871
# Output Example 1

    3

## Pseudocode

```pseudocode
INICIO
    ED: 
        numero, posicao, soma, digito, dobro INTEIRO LER(numero)
    
    posicao <- 0
    soma <- 0
    
    REPETIR ENQUANTO (numero != 0)  //para quando o numero chegar a zero

        digito <- numero MOD 10 
        numero <- numero DIV 10 //retira o algarismo à direita no número
        posicao <- posicao + 1
        
        SE (posicao MOD 2 != 0) ENTAO
            dobro <- digito * 2 
            
            SE(dobro > 9) ENTAO
                dobro <- dobro - 9 
            FIMSE    
    
            soma <- soma + dobro 
        SENAO
            soma <- soma + digito 
        FIMSE //processa com base no algarismo        
    
    FIMREPETIR
    
    ESCREVER(“check digit=“, (soma * 9) MOD 10) 
FIM

```
