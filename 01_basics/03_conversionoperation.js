let score = "234ab"

console.log(typeof score)
console.log(typeof(score))
 let valueInNumber  = Number(score)// now string score is converted int  number
 console.log(typeof(valueInNumber))
 console.log(valueInNumber);//will give NAN 
let isLoggedIN ="ptr"
let isBooleanIsLoggedIn= Boolean(isLoggedIN)
console.log(isBooleanIsLoggedIn)
 // "33"=33
 // "33qv"=NAN
 //null=0
 //true=1;false =0
//  1=true ; hitesh =true

//*************** operations *********************//
let value =3
let negvalue=-value
console.log(negvalue)
console.log(2+2)//4
console.log(3**2)// returns power of the element  

// ADDITION OF TWO STRING 
let str1= "hello"
let str2= "hitesh"

let str3=str1+str2
// console.log(str3) 
// console.log(1+"2")//12
// console.log("1"+2)//12/
// console.log("1"+2+2)//122  not a good way use prethensis 
console.log(2+2+"1")//41
// result = the first element's type will be prior and other will be considered of that type.. 

console.log((3+4)* (5%3))
console.log(true)//=output=true
console.log(+true)// output =1//not a good way to write 
console.log(+"")// output 0


let numm1,num2,num3
num1=num2=num3=2+2 //not preferable code less readability

//increment and decrement operstor in js
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

//CONDITIONAL OPERATOR

console.log("02">1)//true 
console.log(null>0)//f
console.log(null==0)//f
console.log(null>=0)//T same  will occur in undefined but will return false in all these conditions  

//STRICT CHECK === 
// it will not convert data type it will first check the data type are same or not
console.log("2"===2)  //return false as data types are different  








