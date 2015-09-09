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

var calcExecTime = function(arg, fcn) {
  var start = performance.now();
  var result = fcn(arg);
  var end = performance.now();
  return {
    result: result,
    execTime: end - start
  };
}

$(document).ready(function() {
  $("form#input_form").submit(function(event) {
    var inputNumber  = $("input#number").val();

    // get execution time for Sieve of Eratosthenes
    var eExec = calcExecTime(inputNumber, eratosthenize);
    var ePrimes = eExec.result;
    var eTime = eExec.execTime;

    // get execution time for Get Sieved
    var gExec = calcExecTime(inputNumber, getSieved);
    var gPrimes = gExec.result;
    var gTime = gExec.execTime;

    if (gTime < eTime) {
      $('#winning-sieve').text('Get Sieved');
      $('#winning-time').text(gTime);
      $('#losing-sieve').text('Sieve of Eratosthenes');
      $('#losing-time').text(eTime);
      $("#primes").text(gPrimes.join(", "));
    } else {
      $('#winning-sieve').text('Sieve of Eratosthenes');
      $('#winning-time').text(eTime);
      $('#losing-sieve').text('Get Sieved');
      $('#losing-time').text(gTime);
      $("#primes").text(ePrimes.join(", "));
    }

    $("#result").show();

    event.preventDefault();
  });
});


// New and Much Improved Alex and Vaughn Sieve:

var getSieved = function(number) {
  var primes = [];

  for (var i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }

  return primes;
}

var isPrime = function(number) {
  var prime = true;
  for (var i = 2; i < number; i++) {
     if (number % i === 0) {
       prime = false;
     }
  }
  return prime;
}
