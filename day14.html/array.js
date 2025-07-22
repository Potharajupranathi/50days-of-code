//array destructuring
const fruits=["apple","banana","mango"];
const[a,b,c]=fruits;
console.log(a);
console.log(b);

//map
let numbers=[1,2,3,4];
let Add=numbers.map(num=>num+2);
console.log(Add);
console.log(numbers);


//filter
const number=[1,2,3,4]
const evennumbers=number.filter(num=>num%2==0);
console.log(evennumbers)


//reduce
const numb=[1,2,3,4];
const sum=numb.reduce((acc,num)=>acc+num,0)
console.log(sum);



const arrayOfArray=[[1,2],[3,4],[5,6]];
       const union=arrayOfArray.reduce((acc,num)=>{
        return acc.concat(num);
       },[]);//initial value of accumulator is an empty array
       console.log("Original array of arrays:",arrayOfArray);//original array
        console.log("After union of arrays:",union);//output:[1,2,3,4,5,6]

            


let names=["alice","bob"];
let age=[34,28];
console.log(names);
console.log(age);
