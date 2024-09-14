function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}


function printPrimesInRange(min, max) {
    if (min > max) {
        console.log("Invalid range: 'min' should be less than or equal to 'max'.");
        return;
    }

    console.log(`Prime numbers between ${min} and ${max}:`);
    for (let num = min; num <= max; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}


const rangeMin = 1;   
const rangeMax = 20;  

printPrimesInRange(rangeMin, rangeMax);