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
    return new ComplexNumber(this.real * other.real - this.imaginary * other.imaginary, this.real * other.imaginary + this.imaginary * other.real);
  }

  conjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }
}

// Test the class
let num1 = new ComplexNumber(3, 4);
let num2 = new ComplexNumber(2, 5);

console.log("Addition:", num1.add(num2));
console.log("Subtraction:", num1.subtract(num2));
console.log("Multiplication:", num1.multiply(num2));
console.log("Conjugate of num1:", num1.conjugate());
