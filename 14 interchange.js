function interchangeColumns(matrix) {
    // Create a copy of the matrix
    let copy = matrix.map(row => row.slice());

    let rows = copy.length;
    let cols = copy[0].length;
    for (let i = 0; i < rows; i++) {
        let temp = copy[i][0];
        copy[i][0] = copy[i][cols - 1];
        copy[i][cols - 1] = temp;
    }
    return copy;
}

// Example usage:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Original Matrix:");
for (let row of matrix) {
    console.log(row);
}

let result = interchangeColumns(matrix);
console.log("\nMatrix after interchanging columns:");
for (let row of result) {
    console.log(row);
}

