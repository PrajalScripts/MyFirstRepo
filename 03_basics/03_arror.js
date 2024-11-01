const  user ={ userName:"prajal"
,price:"12324",

welcomemessage:function(){
    console.log(`${this.userName}, welcome to website `);
    console.log(this);
    
}
// this talks about current context
}
user.welcomemessage()
user.userName="sam"
user.welcomemessage()

// console.log(this) //will return empty in code envoirment but it will show window in the browser 

// function chai(){
//     let userName= "prajal"
//     console.log(this.userName);  // it will give undefined 
    
// }
// chai();


    const chai=()=>{
let userName="hitesh"
console.log(this);


    }
    // chai()




    // const addwo=(num1,num2)=>{
    //     return num1+num2;
    // }

    // implecit return --

    //const addTwo = (num1,num2) => num1+num2
   // const addTwo = (num1,num2) =>( num1+num2)
    // to return an object we should wrap it into parenthesis.
    console.log(addTwo(3,7));
    
    const addTwo = (num1, num2) => ({username: "hitesh"})


    console.log(addTwo(3, 4))
    
    
    // const myArray = [2, 5, 3, 7, 8]
    
    // myArray.forEach()