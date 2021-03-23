/**    TASK
* Write a program:
* Generate a list of numbers from 1 to 100
* If they're multiple of 3 ---> Print Fizz
* If they're multiple of 5 ----> Print Buzz
* If they're multiple of both of them ---> Print Fizz Buzz
*/



// List of numbers from 1 to 100 to be printed

var numbers = new Array (100);

for (var i = 0; i < 100; i++) {
    numbers[i] = i + 1;   // Populate the array
}

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Print all the values stored in the array
}

 // Find the multiple of 3 and 5 and of them both

 for (var i=1; i <= 100; i++) {
    if( numbers[i] % 3 === 0 && numbers[i] % 5 === 0 ) {
        document.getElementById("FizzBuzz").innerHTML = "FizzBuzz";
    } else {
        if( numbers[i] % 3 === 0 ) {
            document.getElementById("FizzBuzz").innerHTML ="Fizz";
        }
        if( numbers[i] % 5 === 0 ) {
            document.getElementById("FizzBuzz").innerHTML = "Buzz";
        }
    }
 }