const name = "kushal";
const repoCount = 50;

// console.log(name + repoCount + " value");//kushal50 value (dont use this suntax)
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = newstring('kushal');

console.log(gameName[0]); //k
console.log(gameName[2]); //s
console.log(gameName.__proto__);//{}
console.log(gameName.length);//6
console.log(gameName.toUpperCase());//KUSHAL
console.log(indexOf('s'));//2

const newString = gameName.substring(0, 4);
console.log(newString);//kush

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);//hal

const newString1 = "  kushal  ";
console.log(newString1);//   kushal (space)  
console.log(newString1.trim);//kushal

const url = "https://kushal.com/kushal%20kesarwani";
console.log(url.replace('%20', '-'));//https://kushal.com/kushal-kesarwani(replce %20 to -)

console.log(gameName.split('-'));


//go through all strings methods on mdn 

