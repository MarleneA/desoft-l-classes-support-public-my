# Demonstration #07: "Repetir Enquanto ..." Pitfall

## Problem

Read and write given numbers while zero is not entered.

## Example

Input:

    1
    2
    3
    0


Output:

    1
    2
    3


## Pseudocode

### Aproach #01

Problem: What is the first value of n?

```pseudocode
INICIO
    ED: n INTEIRO
    
    REPETIR ENQUANTO (n != 0)
        LER (n)
        ESCREVER (n)
    FIMREPETIR
FIM
```

### Aproach #02

```pseudocode
INICIO
    ED: n INTEIRO
    
    LER (n)
    REPETIR ENQUANTO (n != 0)
        ESCREVER (n)
        LER (n)
    FIMREPETIR
FIM
```