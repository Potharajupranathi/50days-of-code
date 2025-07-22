let fruit=["apple","banana","cherry"];
let numbers=[10,20,30,40,50];
let mixeddata=["hello",123];
console.log(fruit);




let fruits=["apple","banana","cherry"]
    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(fruits[2]);
    console.log(fruits[10]);


let students=["chinnu","yama","harsha"]
console.log(students.length);
let empty=[];
console.log[empty.length];



//changing a existing element
let colors=["red","pink"];
console.log("original:",colors);
colors[1]="black";
console.log("modified:",colors);
colors[3]="white";
console.log("after adding white",colors);
console.log(colors.length)



//commom array methods
//push
let cars=["mg","bmw"];
let newlength=cars.push("mc","audi")
console.log(cars);
console.log(newlength);
//pop
let birds=["parrot","peackok"];
let lastbird= birds.pop();
console.log(birds);
console.log(lastbird);


//unshift
let number=[3,4];
let newlengths=numbers.unshift(1,2);
console.log(number);

//shift
let days=["mon","tue","wed"];
let firstDay=days.shift();
console.log(days);
console.log(firstDay);

//indexof
let groceries=["milk","bread","egg"];
console.log(groceries.indexOf("bread"));
console.log(groceries.indexOf("milk"));
console.log(groceries.indexOf("yogurt"));

//lastindexof
let list=["a","b","c"];
console.log(list.lastIndexOf("b"));

//include()
let items=["pen","paper","book"];
console.log(items.includes("pen"));
console.log(items.includes("pencil"));

//slice
let originalnums=[10,20,30,40,50,60];
    console.log("original",originalnums);
let part1=originalnums.slice(2,5);
    console.log("slice(2,5)",part1);
let part2=originalnums.slice(3);
    console.log("slice(3)",part2);

//splice
let mutableArray=["A","B","C","D","E"];
 console.log("initial",mutableArray);
//1.remove elements
let removed=mutableArray.splice(1,2);
    console.log("after removal",mutableArray);
    console.log("removed items",removed);
//2.add elements(without removing array)
   mutableArray.splice(1,0,"X","Y");
        console.log("after adding",mutableArray);
//3.replace elements
   mutableArray.splice(2,2,"P","Q");
   console.log("after replacing:",mutableArray);   

//arrayconcat
   let arr1=[1,2]
   let arr2=[3,4]
   let arr3=[5,6]
   let combined=arr1.concat(arr2,arr3);
   console.log(combined);
   console.log(arr1);

//spread operator
   const A=[1,2];
    const B=[3,4];
    const combine=[...A,...B];
    console.log(combine);

