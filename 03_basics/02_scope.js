var c =300

if(true){
let a =10
const b= 20
var c = 30
}
//console.log(a)// error
//console.log(b);//error
console.log(c); //output =30;

// this is why we doesnt use var mostly 

//when in browser console global scope is differnt from code envoirment like VS

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2;
}