# Demonstration #10: Factorial

## Problem

Calculate the factorial of a number entered by the user. n! = 1 * 2 * 3 * ... * (n-1) * n

## Example

Input:

    5


Output:

    120

## Pseudocode

### Aproach #01

Using "Repetir Para ..."

```pseudocode
INICIO
    ED: x, n, fatorial INTEIRO
    
    LER (n)
    fatorial <- 1
    
    REPETIR PARA x <- 1 ATE n PASSO 1
        fatorial <- fatorial * x 
    FIMREPETIR
    
    ESCREVER (fatorial) 
FIM

```

### Aproach #02

Using "Repetir Enquanto ..."

```pseudocode
INICIO
    ED: x, n, fatorial INTEIRO 
    
    LER (n)
    fatorial <- 1
    x<- 1
    
    REPETIR ENQUANTO (x <= n)
        fatorial <- fatorial * x
        x <- x +1 FIMREPETIR
    ESCREVER (fatorial) 
FIM
```