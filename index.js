console.log("This is my first program");
console.log("Welcome John, your monthly salary is 500000");




const num1 = 5;  
const num2 = 3;  
// Add two numbers  
const sum = num1 + num2;  
// Display the sum  
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);










const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for input
rl.question("Enter a number: ", (input) => {
  const number = parseInt(input);

  // Check if number is positive, negative, or zero
  if (number > 0) {
    console.log("The number is positive");
  } else if (number === 0) {
    console.log("The number is zero");
  } else {
    console.log("The number is negative");
  }

  // Close the interface
  rl.close();
});

