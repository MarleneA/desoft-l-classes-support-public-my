# Exercise #t01.03: Split Number

## Problem
Display in sequence the digits of units, tens, ... of a given number.

# Input

    1234

# Output

    4
    3
    2
    1    

## Pseudocode

```pseudocode
INICIO
    ED: numero, algarismo INTEIRO 

    LER(numero)
    
    REPETIR
        algarismo <- numero MOD 10
        ESCREVER (algarismo)
        numero <- numero DIV 10
    ENQUANTO (numero!=0)
FIM
```