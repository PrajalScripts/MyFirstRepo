//Dates

let myDate= new Date()

console.log(myDate.toTimeString());
 
let myCreatedDate= new Date(2023,0,23)
let myCreatedDate2= new Date("2023-1-14")//month starts from 0;
console.log(myCreatedDate2.toLocaleDateString());
console.log(myCreatedDate.getTime());


let timeStamp = Date.now();
console.log(timeStamp);//make comparision always in milisecond'
console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
console.log(newDate);
console.log(newDate.getFullYear());    




newDate.toLocaleString('default',{
    weekday:"long"
})
