"use strict" //traet older js code to newer version of js

// alert('hello'); only used in browser console(we are using nodejs not browser)

//use mdn documentation for easy learning but ecmascript is real documentation

//data Types

//primitive data types
let name = "kushal";//string data types
let age = 18; //number data types
let isLoggedIn = false; //boolean
let state; //undefined(value is not defined)

/*typeof*/
console.log(typeof "kushal");//string
console.log(typeof null);//object (js error)
console.log(typeof age );//number
console.log(typeof undefined);//undefined

//number ==> 2 to power 53
//bigint ==> very large number
const bigNumber = 243094375856485n;

//strings ==> "" or ''
//boolean ==> true/false
//null ==> standalone value (value is assigned but that vaue is empty)
//undefined ==> value is not given or defined
//symbol ==> unique
const id = symbol('123');
const anotherId = symbol('123');

console.log(id === anotherId);//false


//Non primitive datatypes
//1. objects
//2.arrays
//3.functions

const heros = ["shaktiman", "naagraj", "doga"]; //this is an array
let myobj = {
  name: "kushal",
  age: 19,
}// this is an object

const myFunction = function(){
  console.log("hello world"); //this is an function
  
}
//js is dynamic type language we cant tell js any value that its a integer flaot or something




