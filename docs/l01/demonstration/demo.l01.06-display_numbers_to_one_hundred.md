# Demonstration #06: Display numbers to one hundred

## Problem

Display the numbers from 1 to 100

## Example

Output:

    1, 2, 3, .., 98, 99, 100


## Pseudocode

### Aproach #01

This end up on an infinte loop.

```pseudocode
INICIO
    ED: n INTEIRO
    
    n <- 1 
    
    REPETIR
        ESCREVER (n)
        n <-n + 1 
    FIMREPETIR
FIM
```

### Aproach #02

Using "Repetir Enquanto ..."

```pseudocode
INICIO
    ED: n INTEIRO
    
    n <- 1 
    
    REPETIR ENQUANTO (n <= 100)
        ESCREVER (n)
        n <-n + 1 
    FIMREPETIR
FIM
```

### Aproach #03

Using "Repetir ... Enquanto"

```pseudocode
INICIO
    ED: n INTEIRO
    
    n <- 1 
    
    REPETIR 
        ESCREVER (n)
        n <-n + 1 
    ENQUANTO (n <= 100)
FIM
```

### Aproach #04

Using "Repetir Para ..."

```pseudocode
INICIO
    ED: n INTEIRO
    
    n <- 1 
    
    REPETIR PARA n <- 1 ATE 100 PASSO 1 
        ESCREVER (n)
    FIMREPETIR
FIM
```