/**    TASK
 
* Generate a list of numbers from 1 to 100
* If they're multiple of 3 ---> Print Fizz
* If they're multiple of 5 ----> Print Buzz
* If they're multiple of both of them ---> Print Fizz Buzz
*/

// List of numbers from 1 to 100 to be printed

var numbers = new Array (100);

for (var i = 0; i < 100; i++) {
    numbers[i] = i +  1;   // Populate the array
}

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Print all the values stored in the array
}

