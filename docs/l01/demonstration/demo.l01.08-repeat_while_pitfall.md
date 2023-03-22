# Demonstration #08: "Repetir ... Enquanto" Pitfall

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

Problem: This approach prints zero.

```pseudocode
INICIO
    ED: n INTEIRO 
    
    REPETIR    
        LER (n)
        ESCREVER (n) 
    ENQUANTO (n != 0)
FIM
```

### Aproach #02

```pseudocode
INICIO
    ED: n INTEIRO 
    
    REPETIR
        LER (n)
        SE (n != 0 ) ENTAO
            ESCREVER (n) 
        FIMSE
    ENQUANTO (n != 0) 
FIM
```