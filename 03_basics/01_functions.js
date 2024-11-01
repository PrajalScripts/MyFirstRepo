//package of code-- function 
// difference between parameter and arguents 

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()//----()-it does the execution 

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//when we dont know the number of arguments like shopping card user just add the objects 
//...---is called both spread and rest operator depends upon use case 
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(2,200,24,3435));

function calculateCartPrice1(a,b,...num1){
    return num1//will return 24,3435only 
}
console.log(calculateCartPrice1(2,200,24,3435));


const user={
    userName:"hitesh",
    price:"4000"
}
function handleObjects(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}
handleObjects(user);


// we also can directly pass objects 
handleObjects({userName:"sam"
    ,price:"123"
})



const mynewArray = [200,400,600,800]

function returnSecondValue(getArray){

return getArray[1];

}
console.log(returnSecondValue(mynewArray));


