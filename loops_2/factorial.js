let num = 9;

function factorialCalculator(num) {
  let result = 1;
  while (num > 1) {
    result = result * num
    num--
  }
  return result
}

const factorial = factorialCalculator(num)
const resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)
