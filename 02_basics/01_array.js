//ARRAY

const myArr=[1,2,3,4,5,6,5]
console.log(myArr[0]);//zerro based indexing 
//shares the same reference --shallow copy
//methods in javascript of array 

const myHeros=["shakti ","salaman"]
const number=  new Array(1,4,6,9)

//array methods 
myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.unshift(0)// it insert at index 0 ; means it shifts all successor values 
myArr.shift()//removes the unshift number
console.log(myArr);
console.log(myArr.includes(8));

const newarr= myArr.join()
console.log(myArr);
console.log(newarr);
console.log(typeof newarr);
console.log(typeof myArr);

//slice ,   splice 

console.log("A", myArr);

const myn1 = myArr.slice(1 ,3)//last one excluded in it 3 not included 

console.log(myn1);

console.log("B",myArr);
const myn2 = myArr.splice(1 ,3)
console.log(myn2);
console.log("c",myArr);
// difference between slice and splice

//slice doesnt remove those element in original array while splice does
