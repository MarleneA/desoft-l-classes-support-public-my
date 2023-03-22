# Exercise #t01.01: Classifiy Student Grade

## Problem
Write an algorithm capable of reading two values between 0 and 20 
(related to the two assessment tests that a student has taken), classify and display  
the current situation of that student based on the following acceptance criteria:

* The student's grade is obtained by averaging the two assessments’ grades
    * According to the grade, the student's situation is:
        * “Reprovado” – if grade is below 7.5 
        * “Oral” – if grade is equal or greater than 7.5 but less than 10 
        * “Approved” – if grade is equal or greater than 10

## Example

Input:

    gradeOne = 5 
    gradeTwo = 5

Output:

    Approved

## Pseudocode

### Aproach #01

```pseudocode
INICIO
    ED: av1, av2 INTEIRO  
        nota REAL
    
    LER (av1, av2)
    nota <- (av1 + av2) / 2 
    
    SE (nota < 7.5) ENTÃO
        ESCREVER (“Reprovado”) 
    SENÃO
        SE (nota < 10) ENTÃO 
            ESCREVER (“Oral”)
        SENÃO
            ESCREVER (“Aprovado”)
        FIMSE 
    FIMSE
FIM
```

### Aproach #02

Usign Boolean Algebra

```pseudocode
INICIO
    ED: av1, av2 INTEIRO  
        nota REAL
    
    LER (av1, av2)
    nota <- (av1 + av2) / 2 
    
    SE (nota < 7.5) ENTÃO
        ESCREVER (“Reprovado”) 
    FIMSE
    
    SE (nota >= 7.5 E nota < 10) ENTÃO 
        ESCREVER (“Oral”)
    FIMSE 
    
    SE (nota >= 10) ENTÃO 
        ESCREVER (“Aprovado”)
    FIMSE 
FIM
```

### Aproach #03

Usign Boolean Algebra

```pseudocode
    
INICIO
    ED: av1, av2 INTEIRO  
        nota REAL
    
    LER (av1, av2)
    nota <- (av1 + av2) / 2 
    
    SE (nota < 7.5) ENTÃO
        ESCREVER (“Reprovado”) 
    SENÃO
        SE (nota >= 7.5 E nota < 10) ENTÃO 
            ESCREVER (“Oral”)
        SENÃO
            ESCREVER (“Aprovado”)
        FIMSE 
    FIMSE
FIM
```