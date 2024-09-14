function sumOfDivisors(num) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (i !== num) {
                sum += i;
            }
            
            if (i !== 1 && i !== num / i && num / i !== num) {
                sum += num / i;
            }
        }
    }
    return sum;
}

function classifyNumber(num) {
    if (num <= 0) {
        return "Number must be a positive integer.";
    }

    const sum = sumOfDivisors(num);

    if (sum === num) {
        return "Perfect";
    } else if (sum > num) {
        return "Abundant";
    } else {
        return "Deficient";
    }
}


const inputNumber1 = 6; 
const inputNumber2 = 12; 

console.log(`Number ${inputNumber1} is ${classifyNumber(inputNumber1)}.`);
console.log(`Number ${inputNumber2} is ${classifyNumber(inputNumber2)}.`);