function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}


function nextPalindrome(num) {
    let next = num + 1;
    while (true) {
        if (isPalindrome(next)) {
            return next;
        }
        next++;
    }
}


function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


function checkNumber(num) {
    if (isPrime(num)) {
        console.log(nextPalindrome(num));
    } else {
        console.log("Not prime");
    }
}


const inputNumber = 19; 
checkNumber(inputNumber);
