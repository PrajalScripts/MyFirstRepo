// for 0f 

[{},{},{}]//objects in array

const arr = [1,2,3,4,5]
 sum =0;
for (const element of arr) {
    sum = sum+element; 
    console.log(element);
}

console.log(sum);
console.log(arr);

const greeting ="Hello World";
for (const element of greeting) {

   console.log(`each char is ${element}`);
    
    
}

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('CH',"CHINA")

// console.log(map);

for (const [key,value] of map) {
 console.log(key,':-',value);
     
};
const coading = ["js", ""];

//object can not be iterate through it  
