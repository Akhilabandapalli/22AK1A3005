
function findFibonacciPosition(num) {
    if (num < 1) return -1; 
    
    let a = 1;
    let b = 1;
    let position = 1; 

    if (num === a) return position;
    
    position++;
    while (b < num) {
        let temp = a;
        a = b;
        b = temp + b;
        position++;
    }
    
    return b === num ? position : -1;
}


function generateFibonacciSeries(max) {
    let a = 1;
    let b = 1;
    let series = [a, b];
    
    while (b < max) {
        let temp = a;
        a = b;
        b = temp + b;
        series.push(b);
    }
    
    return series;
}


function checkFibonacciNumber(num) {
    if (num < 1) {
        console.log("Please enter a positive integer.");
        return;
    }

    const position = findFibonacciPosition(num);

    if (position !== -1) {
        const series = generateFibonacciSeries(num);
        console.log(`${num} is the ${position}th Fibonacci number.`);
        console.log(`Fibonacci series up to ${num}: ${series.join(' ')}`);
    } else {
        console.log(`${num} is not a Fibonacci number.`);
    }
}


const inputNumber = 21; 

checkFibonacciNumber(inputNumber);
