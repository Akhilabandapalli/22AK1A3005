
class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    
    add(other) {
        return new ComplexNumber(this.real + other.real, this.imaginary + other.imaginary);
    }

    
    subtract(other) {
        return new ComplexNumber(this.real - other.real, this.imaginary - other.imaginary);
    }

    
    multiply(other) {
        const realPart = this.real * other.real - this.imaginary * other.imaginary;
        const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    
    conjugate() {
        return new ComplexNumber(this.real, -this.imaginary);
    }

    
    toString() {
        return `${this.real} ${this.imaginary >= 0 ? '+' : '-'} ${Math.abs(this.imaginary)}i`;
    }
}


const num1 = new ComplexNumber(3, 4);  // 3 + 4i
const num2 = new ComplexNumber(1, -2); // 1 - 2i

console.log(`Complex Number 1: ${num1.toString()}`);
console.log(`Complex Number 2: ${num2.toString()}`);

const sum = num1.add(num2);
const difference = num1.subtract(num2);
const product = num1.multiply(num2);
const conjugateNum1 = num1.conjugate();

console.log(`Addition: ${num1.toString()} + ${num2.toString()} = ${sum.toString()}`);
console.log(`Subtraction: ${num1.toString()} - ${num2.toString()} = ${difference.toString()}`);
console.log(`Multiplication: ${num1.toString()} * ${num2.toString()} = ${product.toString()}`);
console.log(`Conjugate of ${num1.toString()} = ${conjugateNum1.toString()}`);
