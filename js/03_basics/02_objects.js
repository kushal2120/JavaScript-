 //object
 //CRUD operation ==> create, read, update, delete
//create an object
const user = {
  name: "kushal",
  age: 19,
  emailId: "kushal@123gmail.com",
  amount: 3500,
}
//keys ==> name , age, emailId, amount
//values ==> kushal, 19, kusha....., 3500
console.log(user);
console.log(typeof user);//object
//if we want to access only age
console.log(user.age);//19
//if we want to insert any value
user.aadhar = 1234;
console.log(user);
//if we want to update any existing value
user.amount = 5000;
console.log(user);
//if we want to delete any value
delete user.emailId;
console.log(user);

//behind the scene object stored in string form
console.log(user["name"]);//kushal
console.log(user.name);//kushal
console.log(user["age"]);//19
console.log(user.age);//19

//if we change any valye in user2 then user also changes
const user = {
  name: "kushal",
  age: 19,
  emailId: "kushal@123gmail.com",
  amount: 3500,
}
const user2 = user;
user2.age = 90;
console.log(user);

//if we want to access any users keys,values, or both
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//loop to get keys (not recommended)
for(let keys in user){
  console.log(keys,user[keys]); 
}
//if we write user.keys to get keys it will be undefined

//to get 2 or more values together(destructuring object)
const {name:userName,age:userAge} = user;
console.log(userName,userAge);
//(desstructuring array)
const arr = [10,20,30,40,50];
const [first,second] = arr;
console.log(first,second);


//for of loop to excess keys (array)
const user = {
  name: "kushal",
  age: 19,
  emailId: "kushal@123gmail.com",
  amount: 3500,
}
const temparr = Object.keys(user);
console.log(temparr);
for(let keys of temparr){
  console.log(keys);
  
}

//for of loop to access values (array)
for(let values of Object.values(user)){
  console.log(values);
  
}

// function in objects(methods)
const user = {
  name: "kushal",
  age: 19,
  emailId: "kushal@123gmail.com",
  amount: 3500,
  greeting: function(){
    console.log(`Darohar is coming on 26th march ${this.name}`); //instead of "user.name" we can use "this.name"keyword bcs if we create user2 and change the name it will print kushal not updated name
    return 20;
  }
}
user.greeting();//Darohar is coming on 26th march kushal
const va = user.greeting();
console.log(va);//20

//objects in objects(nested objects)
const user = {
  name: "kushal",
  age: 19,
  emailId: "kushal@123gmail.com",
  amount: 3500,
  address: {
    city: "kolkata",
    state: "uttrakhand",
  }
}
console.log(user);
console.log(user.address);
console.log(user.address.state);


//if we dont want to change value in user2 but at the same time we want copy user in user2 then we user spread operator(shalow copy)
const user = {
  name: "kushal",
  age: 19,
  emailId: "kushal@123gmail.com",
  amount: 3500,
  address: {
    city: "kolkata",
    state: "uttrakhand",
  }
}
const user2 = {...user};//spread operator
user2.name ="som";
console.log(user);
//spread does not support nested objects so we have to use structured clone (deep copy)
const user2 = structuredClone(clone);
user2.address.city = "agra";
console.log(user);

//we can write keys in number form also and we can excess these keys in different form 
const user = {
  name: "kushal",
  age: 19,
  0: "kushal@123gmail.com",
  1: 3500,
  2: "som",
}
console.log(user[1]);

//keys can be in symbol also 
const sym = Symbol("Id");
const user = {
  name: "kushal",
  age: 19,
  0: "kushal@123gmail.com",
  1: 3500,
  2: "som",
  [sym]: "hello",
}
console.log(user[sym]);




//objects memory part left (stack and heap tutorial first then object memory part)