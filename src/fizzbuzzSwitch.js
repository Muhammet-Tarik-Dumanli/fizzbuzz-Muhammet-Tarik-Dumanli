function fizzbuzzSwitch(num) {
  switch (true) {
    case num % 3 === 0 && num % 5 === 0:
      return "FizzBuzz";
      break;
    case num % 3 === 0:
      return "Fizz";
      break;
    case num % 5 === 0:
      return "Buzz";
      break;
    default:
      return num;
      break;
  }
}

module.exports = fizzbuzzSwitch;
