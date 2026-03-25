//string to number

let score = "33";
console.log(typeof score);//string
// console.log(typeof (score)); (same as above)
let valueInNumber = Number(score);
console.log(typeof valueInNumber); //number
console.log(valueInNumber);//33

let map = "33abc";
console.log(typeof score);//string
let valueInNum = Number(map);
console.log(typeof valueInNum); //number
console.log(valueInNum);//Nan (not a number)

//"33" ==> 33
//"33abc" ==> Nan
// null ==> 0
// undefined ==> Nan
// true ==> 1, false==> 0

//number to boolean
let isLoggedIn = 1;

let booleanIsLoggedIn = boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true

//0 ==> false
//1 ==> true
//"" ==> false
//"kushal" ==> true

//number to String
let someNumber = 33;

let stringNumber = string(someNumber);
console.log(stringNumber);//33
console.log(typeof stringNumber);//string


/************operations************/ 
let value = 3;
let negValue = -value;
console.log(negValue);//-3

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%3); //gives remainder after divison

let str1 = 'kushal';
let str2 = " Hi";
let str3 = str1 + str2;
console.log(str3);//kushal hi

console.log("1" + 2);//12
console.log(1 + "2");//12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32
console.log((3 + 4 )* 5 % 3); //use parenthesis in this type of code

console.log(+true);//1
console.log(+"");//0(not good write these type of code)

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2; not good practice(redeability matters)

//logical, or, not operator
let x = 5;
let y = 6;
console.log(x<y && x==5);// true && true gives true
 






