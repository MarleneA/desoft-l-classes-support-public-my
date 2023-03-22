/***
 * Adds a comma separated list of numbers
 * @param numbers A comma separated list of numbers
 *
 * @throws RangeError if any of the numbers are negative
 * @throws TypeError if any of the numbers are not integers
 *
 * @returns The sum of the numbers
 *
 * @example
 * add('1, 2, 4, 5') // returns 12
 *
 * @example
 * add('1, 2, 4, 5, -1') // throws RangeError
 *
 *  @example
 *  add('1, 2, 4, 5, 1.5') // throws TypeError
 *
 * @note export is used so that tests can import the function
 *
 */
export function add(numbers: string): number {
    let integers = numbers.split(',').map(x => parseInt(x));
    let negatives = integers.filter(x => x < 0);

    if (negatives.length > 0)
        throw new RangeError('Negatives are not allowed: ' + negatives.join(', '));

    return integers
        .filter(x => x <= 1000)
        .reduce((a, b) => a + b, 0);
}

//let result = add('1, 2, 4, 5');
//console.log(result);
