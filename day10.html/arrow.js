
let hello=function()
{
   return "hello world"
    
}
console.log(hello());

//even-odd
let pranathi=(num)=>{
    return num%2==0?
    "even":"odd";
}
console.log(pranathi(7))


//factorial
let n=prompt("enter a number:");
let f=1;
for(let i=1;i<=n;i++){
    f*=i;
}
console.log("factorial of"+n+"is"+f);


//number is divisible by both 3 and 5
const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
};

// Example: Input from user
let input = prompt("Enter a number:");
fizzBuzz(Number(input));

