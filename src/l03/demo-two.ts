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

    fn = factorial(n);

    fr = factorial(r);

    fnr = factorial(n - r);

    result = fn / (fr * fnr);

    return result;
}

function factorial(n: number): number {
    let result: number = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

