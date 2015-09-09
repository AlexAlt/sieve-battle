// Official Sieve of Eratosthenes

var eratosthenize = function(number) {
  var numbers = [];

  // create an array of numbers from 2 to number
  for (var i = 2; i <= number; i++) {
    numbers.push(i)
  }

  for (var prime = 2; prime <= number; prime++) {
    // assign prime and then increment
    for (var i = prime + 1; i <= number; i++) {
      // go through each number and check if divisible by prime
      if (i % prime === 0) {
        // if so, find index of number in array
        var index = numbers.indexOf(i);
        if (index > -1) {
          // and remove from array
          numbers.splice(index, 1);
        }
      }
    }
  }

  return numbers;
}

// New and Much Improved Alex and Vaughn Sieve:
//
// var sieveMe = function(number) {
//   var primes = [];
//
//   for (var i = 2; i <= number; i++) {
//     if (isPrime(i)) {
//       primes.push(i)
//     }
//   }
//
//   return primes;
// }
//
// var isPrime = function(number) {
//   var prime = true;
//   for (var i = 2; i < number; i++) {
//      if (number % i === 0) {
//        prime = false;
//      }
//   }
//   return prime;
// }
