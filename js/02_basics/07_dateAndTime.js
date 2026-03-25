//dates

let myDate = new Date();
// console.log(myDate.toString);//wed march 23 2025 12:03:40 GMT+000...
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2026, 0, 23);
// console.log(myCreatedDate.toDateString());


// let myCreatedDate =new Date("2026, 0, 23, 5, 3");
let myCreatedDate = new Date("01-14-2023");


let myTimestamp = Date.now();

// console.log(myTimestamp);//in mili seconds
// console.log(myCreatedDate.getTime());//in mili seconds
// console.log(Math.floor(Date.now()/1000));//in seconds


let newDate = new Date();
console.log(newDate.getDate() + 1);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default', {
  weekday: "long",
})




