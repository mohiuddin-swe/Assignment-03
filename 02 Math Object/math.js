// Function to calculate the square root of the sum of squares of numbers in an array
function calculateSquareRootOfSumOfSquares(numbers) {
    const sumOfSquares = numbers.reduce((accumulator, currentValue) => accumulator + Math.pow(currentValue, 2), 0);
    const squareRoot = Math.sqrt(sumOfSquares);
    return squareRoot;
  }
  
  // Example
  const numbers = [3, 4, 5];
  const result = calculateSquareRootOfSumOfSquares(numbers);
  console.log(result); // Output: 7.0710678118654755
  