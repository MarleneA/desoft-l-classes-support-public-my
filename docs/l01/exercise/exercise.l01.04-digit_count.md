# Exercise #t01.04: Digit Count

## Problem
Count the digits of a given number.

# Input Example 1

    453

# Output Example 1

    3    

# Input Example 2

    5

# Output Example 2

    1

## Pseudocode

### Approach #01

```pseudocode
INICIO
    ED: n, qtd INTEIRO
    
    LER(n) 
    qtd <- 0 
   
    REPETIR
        qtd <- qtd + 1
        n <- n DIV 10 
    ENQUANTO (n!=0) 
    
    ESCREVER (qtd)
FIM
```

### Approach #02

Optimized version. No need to check numbers lower than 9.

```pseudocode
INICIO
    ED: n, qtd INTEIRO

    LER(n)
    qtd <- 1
    
    REPETIR ENQUANTO (n > 9)
        qtd <- qtd + 1
        n <- n DIV 10 
    FIM REPETIR
    
    ESCREVER (qtd) 
FIM
```