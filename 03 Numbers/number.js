// Function to check if a number is a prime number
function isPrime(number) {
    // 1 is not a prime number
    if (number <= 1) {
      return false;
    }
  
    // Check for divisibility by numbers from 2 to the square root of the given number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // Number is divisible by i, hence not a prime number
      }
    }
  
    return true; // Number is not divisible by any number, it is a prime number
  }
  
  // Example
  const number = 17;
  const result = isPrime(number);
  console.log(result); // Output: true
  