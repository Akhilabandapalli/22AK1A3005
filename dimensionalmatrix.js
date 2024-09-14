function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    
    if (rows !== matrixB.length || cols !== matrixB[0].length) {
        throw new Error("Matrices must have the same dimensions for addition.");
    }

    let result = [];
    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return result;
}


function subtractMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    
    if (rows !== matrixB.length || cols !== matrixB[0].length) {
        throw new Error("Matrices must have the same dimensions for subtraction.");
    }

    let result = [];
    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = matrixA[i][j] - matrixB[i][j];
        }
    }
    return result;
}


function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    if (colsA !== rowsB) {
        throw new Error("Number of columns in matrix A must be equal to number of rows in matrix B.");
    }

    let result = [];
    for (let i = 0; i < rowsA; i++) {
        result[i] = [];
        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;
            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }
    return result;
}


function traceMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    if (rows !== cols) {
        throw new Error("Matrix must be square to calculate the trace.");
    }

    let trace = 0;
    for (let i = 0; i < rows; i++) {
        trace += matrix[i][i];
    }
    return trace;
}


const matrixA = [
    [1, 2],
    [3, 4]
];

const matrixB = [
    [5, 6],
    [7, 8]
];

try {
    console.log("Matrix A + Matrix B:");
    console.log(addMatrices(matrixA, matrixB));

    console.log("Matrix A - Matrix B:");
    console.log(subtractMatrices(matrixA, matrixB));

    console.log("Matrix A * Matrix B:");
    console.log(multiplyMatrices(matrixA, matrixB));

    console.log("Trace of Matrix A:");
    console.log(traceMatrix(matrixA));

} catch (error) {
    console.error(error.message);
}