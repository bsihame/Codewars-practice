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
  console.log("Even")
  }else{
  console.log("Odd")
}
}
even_or_odd(2)
even_or_odd(0)
even_or_odd(7)
even_or_odd(1)