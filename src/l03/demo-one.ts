export function calculateCombinations(n: number, r: number): number {
    let result: number = 1;
    let fn, fr, fnr: number;

    if (n < 0) {
        throw new RangeError("n >= 0");
    }
    if (r < 0) {
        throw new RangeError("r >= 0");
    }
    if (n < r) {
        throw new RangeError("n >= r");
    }
    result = 1
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    fn = result;

    result = 1;
    for (let i = 2; i <= r; i++) {
        result = result * i;
    }
    fr = result;

    result = 1;
    for (let i = 2; i <= n - r; i++) {
        result = result * i;
    }
    fnr = result;

    result = fn / (fr * fnr);

    return result;
}


