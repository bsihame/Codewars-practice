// Jan 13, 2020

//solution('world'); // returns 'dlrow'

console.log("Q 1")

// this to check the work and whiteboard steps
let str1 = "world"
const solution1=(str) =>{
  console.log(str1)
  //split str => it will be split and in array
  let newArray = str1.split('');
  console.log(newArray)
  let reverseArr = newArray.reverse()
  console.log(reverseArr);
  // join
  let joinedArr = reverseArr.join('')
  console.log()
  //console.log(joinedArr)
  return joinedArr
}
console.log(solution1(str1))
//solution1(str1)

const solution2 = (str2) => {
  return str2.split('').reverse().join('');
}
console.log(solution2("Hello"))

const solution3 = str1 => str1.split('').reverse().join('');
console.log(solution3("NYC"))

//============================================================================================================
console.log("Q2")
//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// Test.assertEquals(even_or_odd(2), "Even")
// Test.assertEquals(even_or_odd(0), "Even")
// Test.assertEquals(even_or_odd(7), "Odd")
// Test.assertEquals(even_or_odd(1), "Odd")

function even_or_odd(number) {
  if(number % 2===0){
  console.log("Even")// return "Even"
  }else{
  console.log("Odd")
}
}
even_or_odd(2)// consol.log()
even_or_odd(0)
even_or_odd(7)
even_or_odd(1)


const even_or_odd2=(number) => number % 2 === 0 ? 'Even' : 'Odd';
console.log(even_or_odd2(2))
console.log(even_or_odd2(0))
console.log(even_or_odd2(7))
console.log(even_or_odd2(1))
//===========================================================
//Jan 15, 2020 
console.log("Q3")
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]
// [4, 1, 1, 1, 4])--->[8, 2, 2, 2, 8]
//  [2, 2, 2, 2, 2, 2])--->[4, 4, 4, 4, 4, 4]

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

function maps(x){
  return x.map(x =>  x * 2 )
}
console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4]));
console.log(maps([2, 2, 2, 2, 2, 2]));
//==============================================================================
console.log("Q4")
//jan 18, 2020
//We need a function that can transform a number into a string.

//What ways of achieving this do you know?

// Examples:
// numberToString(123); // returns '123';`   
// numberToString(999); // returns '999';`

function numberToString(num) {
  return num.toString()
}
console.log(numberToString(123));
console.log(numberToString(999));

function numberToString(num2) {
  return String(num2);
}
console.log(numberToString(123));
console.log(numberToString(999));

function numberToString(num3) {
  return num3 + "";
}

console.log(numberToString(345));
console.log(numberToString(888));


//====================================================================================
console.log("Q5")

function digitize(n) {
  let arr = []
  return n.toString().split("").reverse().join("")
  
  }
  console.log(digitize(348597));

//=================================================================================
console.log("week 2")

//jan 23
console.log("problem 1")

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// stringToNumber("1234") == 1234
// stringToNumber("605" ) == 605
// stringToNumber("1405") == 1405
// stringToNumber("-7"  ) == -7

const stringToNumber = (str)=> {
  // put your code here
  return parseInt(str)
}
console.log(stringToNumber("1234"));
console.log(stringToNumber("605" )) 
console.log(stringToNumber("1405")) 
console.log(stringToNumber("-7"  ))
//=================================================================================
console.log("problem 2");

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// returns ''


function list(names){
  let result = "";
    
    if (names.length === 1) {
      return names[0].name;
    } else if (names.length === 2) {
      return names[0].name + " & " + names[1].name;
    } else if (names.length === 0) {
      return "";
    } else {
        for (var i = 0; i < names.length - 2; i++) {
        result += names[i].name + ", ";
        }
      result = result + names[names.length-2].name + " & " + names[names.length-1].name	
      return result;
    }
  }
  console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]))


  



