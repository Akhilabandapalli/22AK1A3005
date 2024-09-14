function calculateLuckyNumber(dob) {
    
    const digitsOnly = dob.replace(/\D/g, '');

    
    let sum = 0;
    for (const digit of digitsOnly) {
        sum += parseInt(digit, 10);
    }

    
    while (sum >= 10) {
        let tempSum = 0;
        while (sum > 0) {
            tempSum += sum % 10;
            sum = Math.floor(sum / 10);
        }
        sum = tempSum;
    }

    return sum;
}


function printLuckyNumber(dob) {
    if (!/^\d{2}-\d{2}-\d{4}$/.test(dob)) {
        console.log("Invalid date format. Please enter in DD-MM-YYYY format.");
        return;
    }

    const luckyNumber = calculateLuckyNumber(dob);
    console.log(`The lucky number based on the date of birth ${dob} is: ${luckyNumber}`);
}


const dateOfBirth = "14-03-2004"; 

printLuckyNumber(dateOfBirth);