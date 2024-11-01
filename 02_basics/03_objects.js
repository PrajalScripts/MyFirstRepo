//singleton  //

// silgleton forms when we create thorugh constructure 

// if we are creating using literlas then singleton will not form 
// Object.create --creates singleton 
const mySym=Symbol("key1")


const JsUser={
    name : "hitesh",
    "fullname":"prajal tiwari ",// ---1you cant access it using . operator
    
    [mySym]:"prajalll",// here we have not used it as a symbol it is a string so that method is wrong so we should use square brackets 
   //if we dont use [ then the type will be string not symbol ]
    age:13,

    location :"noida",
    email: "pt@gmail",
    isLoggedIn:false,
    lastloginDays :["monday", "friday"]
}

// method to access objects
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["fullname"]);
// we cant access it using the dot method because applying " " will give error 

console.log(typeof[mySym]);
console.log(JsUser);


