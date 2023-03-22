import {add} from '../add-function';

describe('testing add-function file', () => {
    test('empty string should result in zero', () => {
        expect(add('')).toBe(0);
    });

    test('\'1\' string should result in 1', () => {
        expect(add('1')).toBe(1);
    });

    test('negatives should raise an exception', () => {
        expect(() => {
            add('-1');
        }).toThrow('Negatives are not allowed: -1');
    });
});