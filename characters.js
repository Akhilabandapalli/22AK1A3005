
const fs = require('fs');


function readAndReverse(fileName, n) {
    try {
        
        const data = fs.readFileSync(fileName, 'utf8');

        
        const substring = data.slice(0, n);

        
        const reversed = substring.split('').reverse().join('');

        console.log(`Original: ${substring}`);
        console.log(`Reversed: ${reversed}`);
    } catch (error) {
        console.error('Error reading the file:', error);
    }
}
const fileName = 'sample.txt';
const n = 30; 
readAndReverse(fileName, n);
