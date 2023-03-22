let numlist: number[] = [2, 4, 6, 8];
console.log(numlist);

console.log(numlist[2]);

numlist[2] = 10;
console.log(numlist[2]);

console.log(numlist);

let j: any;
let nums: number[] = [1, 2, 3, 4]

for (j in nums) {
    console.log(nums[j])
}
let multi: number[][] = [[1, 2, 3], [23, 24, 25]]
console.log(multi[0][0])
console.log(multi[0][1])
console.log(multi[0][2])
console.log(multi[1][0])
console.log(multi[1][1])
console.log(multi[1][2])


function displayNames(array_names: string[]) {
    for (var i = 0; i < array_names.length; i++) {
        console.log(array_names[i])
    }
}

let names: string[] = ["Mary", "Tom", "Jack", "Jill"]
displayNames(names);

function disp(): string[] {
    return ["Jill", "Tom", "Jack", "Mary"]
}

let newNames: string[] = disp();
displayNames(newNames);