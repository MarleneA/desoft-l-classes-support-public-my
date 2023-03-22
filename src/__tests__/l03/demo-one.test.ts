import {calculateCombinations} from "../../l03/demo-one";

describe('testing l03 examples', () => {
    test('ensure n < 0 throws exception', () => {
        //Arrange
        let n: number = -1;
        let r: number = 0;

        //Act
        expect(() => {
            calculateCombinations(n, r);
        }).toThrow('n >= 0');
    });
    test('ensure r < 0 throws exception', () => {
        //Arrange
        let n: number = 0;
        let r: number = -1;
        let result: number = -1;

        //Act + Assert
        expect(() => {
            calculateCombinations(n, r);
        }).toThrow('r >= 0');
    });
    test('ensure n < r throws exception', () => {
        //Arrange
        let n: number = 1;
        let r: number = 2;

        //Act + Assert
        expect(() => {
            calculateCombinations(n, r);
        }).toThrow('n >= r');
    });
    test('ensure combinations for 0,0 equals 1', () => {
        //Arrange
        let expectedValue: number = 1;
        let n: number = 0;
        let r: number = 0;
        let result: number = -1;

        //Act
        result = calculateCombinations(n, r);
        //Assert
        expect(result).toBe(expectedValue);
    });
    test('ensure combinations for 1,1 equals 1', () => {
        //Arrange
        let expectedValue: number = 1;
        let n: number = 1;
        let r: number = 1;
        let result: number = -1;

        //Act
        result = calculateCombinations(n, r);
        //Assert
        expect(result).toBe(expectedValue);
    });
    test('ensure combinations for 2,1 equals 2', () => {
        //Arrange
        let expectedValue: number = 2;
        let n: number = 2;
        let r: number = 1;
        let result: number = -1;

        //Act
        result = calculateCombinations(n, r);
        //Assert
        expect(result).toBe(expectedValue);
    });
    test('ensure combinations for 2,2 equals 1', () => {
        //Arrange
        let expectedValue: number = 1;
        let n: number = 2;
        let r: number = 2;
        let result: number = -1;

        //Act
        result = calculateCombinations(n, r);
        //Assert
        expect(result).toBe(expectedValue);
    });
    test('ensure combinations for 5,2 equals 10', () => {
        //Arrange
        let expectedValue: number = 10;
        let n: number = 5;
        let r: number = 2;
        let result: number = -1;

        //Act
        result = calculateCombinations(n, r);
        //Assert
        expect(result).toBe(expectedValue);
    });
});