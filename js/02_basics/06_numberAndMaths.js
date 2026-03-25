const score = 400;
console.log(score);//400


const balance = new Number(100);

console.log(balance);//[Number: 100] (show direct with number type)
console.log(balance.toString);//100 (convert into string)
console.log(balance.toString().length);//3 (3 values)
console.log(balance.toFixed(2));//100.00

const otherNumber = 23.5899;

console.log(otherNumber.toPrecision(3));//58.6
//if 123.5959 then it gives 124

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));//10,00,000


/*********Maths*************/
console.log(Math);//Object [Math]{}

console.log(Math.abs(-4));//4 (absolute value)
console.log(Math.round(4.6));//5 (roundoff)
console.log(Math.ceil(4.2));//5(top value)
console.log(Math.floor(4.2));//4(below value)
//square rrrot, sin, cos , many more on mdn

console.log(Math.min(4, 6, 3, 8));//3 (minium value)
console.log(Math.random());//0.379873973(give random value between 0 to 1)

console.log((Math.random()*10) + 1);//give random number between 1 to 10 in decimal
console.log(Math.floor(Math.random()*10) + 1);//give random number but roundoff ( 10, 7, 6, 3) and (+ 1 bcs we dont get 0 values)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);// we get value between 10 to 20 and( + min bcs we dont get value below 10)















