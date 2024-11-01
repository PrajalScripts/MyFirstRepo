// primitive datatypes 
// 7 catagerios
// 1-string //call by value,NUMBER,BOOLEAN ,null,undefined ,symbol -used to make any value unique , BigInt-use to hNandle large scientific values 

// 2= reference or nompriitive 
// Array .objects,Functions  
// javascript is dynamically typed
const a=100
const b= 100.3
const bignumber=12849732367287914n//bigInt
const heros=["ram", "shyam"]

let obj ={
    name: "prajal",
    age: 22,
}
console.log(typeof bignumber)

const Id = Symbol('123')
const anotherId= Symbol('123')
console.log(Id==anotherId)//false 
console.log(Id===anotherId);//false


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive type , copy of variable) ......Heap(non_primtive, reference of original value )

let myYoutubeName="PrajalYoutube"//primitive type will go in stack 
let anotherName= myYoutubeName
anotherName="chaiAndCode"

console.log(anotherName)
console.log(myYoutubeName)

let userone = {
email :"pt@gmail.com",
upi:"pt@ibl"
}
let usertwo =userone

usertwo.email="pt23@gmail.com"
console.log(userone)
console.log(usertwo)
