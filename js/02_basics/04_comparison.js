console.log(2 > 1);//true
console.log(2 >= 1);//true
console.log(2 < 1);//false
console.log(2 == 1);//false
console.log(2 != 1);//ture


console.log("2" > 1); //true("2" convert into number automatic)
console.log("02" > 1);//true 

// avoid these type of camparison bcs of clean code
// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null >= 0);//true(null convert into 0)

// console.log(undefined == 0);//false
// console.log(undefined > 0);//false
// console.log(undefined < 0);//false


//=== ==> strict check
console.log("2" === 2);//false(it checks data types also)
