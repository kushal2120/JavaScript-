 //more array methods to learn
//array ==> store data types

// let marks1 = 100;
// let marks2 = 50;
// let marks3 = 70;
// let marks4 = 80;

//we can also write this
let marks = [100, 50, 70, 80];
console.log(marks);
console.log(marks.length);//to check how many element in array

// let arr = [300,30,"kushal", true];//we can put multiple data types in an array
// to check position in array
console.log(arr[0]);//300
console.log(arr[2]);//kushal
console.log(typeof arr);//object
//to change value in array
arr[1] = 90;
console.log(arr);//[300, 90,"kushal", true]
//to add new element
arr.push(90);
arr.push("strike");
console.log(arr);//[300,30,"kushal", true, 90, "strike"]
//to delete element from end
arr.pop();
console.log(arr);//[300,30,"kushal", true, 90]
//add new element in starting and delete in first place (using shift and unshift system performance drops)
arr.unshift(10);
console.log(arr);//[10, 300,30,"kushal", true, 90]
arr.shift();
console.log(arr);//[300,30,"kushal", true, 90]

//to print these number one by one
// let arr2 = [10, 30, 50,  90, 11];

for(let i=0; i<=arr.length; i++){
  console.log(arr[i]);
}
//another method ==> for of loop
for(let num of arr){
  console.log(num);
}

//primitive data: copying by actual(value) data
//Copying Arrays: Copy by Reference(non primitive data)
// let arr = [10, 30, 50, 90, 11];
// let arr2 = arr2;
arr2.push(30);
console.log(arr);// [10, 30, 50, 90, 11, 30]

// const arr = [10, 30, 50, 90, 11];
arr = [80, 90, 11]; //not allowed(error)


//slice
// const arr = [10, 30, 50, 90, 11];
// const arr2 = console.log(arr.slice(2, 4));//[50, 90]
//no changes in original array
console.log(arr);//[10, 30, 50, 90, 11]

//splice ==> changes in original array
// const arr3 = console.log(arr.splice(1, 3));//[30, 50, 90];
console.log(arr);//[10, 11] (left element )


//spread operator ==> merge them
// const arr = [10, 30, 50, 90, 11];
// const arr2 = ["kushal", 11, true];
arr.push(arr2);//output will be combined all array in array

const arr3 = [arr, arr2];
console.log(arr3);//output will be one after one array not in combined
// but if we want individual element output, then we use spread
const arr4 = [...arr,...arr2];
console.log(arr4);


//array to string
const names = ["kushal", "som", "kunal", "som"];
console.log(names.toString());//kushal, som, kunal
console.log(names.join(" "));//this also convert into string but with spaces
//to search any element
console.log(names.indexOf("som"));1
// if som was not in array then it give -1 output
//if multiple som was present then it give first one position
console.log(names.lastIndexOf("som"));//3
//to check any element present or not 
console.log(names.includes("som"));//true (if not output will be false)


//to short an element 
const names1 = ["kushal", "som", "kunal", "som", "charlie", "mohit"];
names1.short();
names1.reverse();//in reverse
console.log(names1);//short in dictionary order and also check small and capital letter(capital letter came first and small after)


const a = [101, 90, 80, 32, 91];
a.short();
console.log(a);//[101, 32, 80, 90, 91] (it short on the basis on character, 1 come first then 3 then 8 then 9 and so on)
//if we want short number in normal form
a.short((a,b)=> a-b);//[32, 80, 90, 91, 101] (ascending order)
a.short((a,b)=> b-a); //descending order


//excess element in 2d array
const b = [10,30,50[40,90,80], 11];
console.log(b[3]);//[40,90,80]
console.log(arr[3[1]]);//90
console.log(arr[3[0]]);//40

console.log(b[1]);//30
console.log(b[2]);//50
console.log(b[4]);//11
//better method to excess elent in 2d or 3d array ==> flat
const c = arr.flat(Infinity); //infinity for flat element at every level 
console.log(c);//[10,30,50,40,90,80, 11]



// to excess Element in cpp
// base_address + index*size of Data(4)
//but not in js bcs of uncosistent of size of data 