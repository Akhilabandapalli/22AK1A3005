function isArmstrongNumber(num) {
    
    const numStr = num.toString();
    const numDigits = numStr.length;

    
    let sum = 0;
    for (let char of numStr) {
        const digit = parseInt(char, 10);
        sum += Math.pow(digit, numDigits);
    }

    
    return sum === num;
}


function checkArmstrongNumber(num) {
    if (num < 0) {
        console.log("Please enter a positive integer.");
        return;
    }
    
    if (isArmstrongNumber(num)) {
        console.log(`${num} is an Armstrong number.`);
    } else {
        console.log(`${num} is not an Armstrong number.`);
    }
}


const inputNumber = 153; 

checkArmstrongNumber(inputNumber);
