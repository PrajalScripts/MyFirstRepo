// if

const isUserLoggedin=true
const temperature =47;
// if (2 =="2"){
//     console.log("executed");// == doesnot check for daatype
    
// }
if (2 ===3){
    console.log("executed");// === check for dataype
    
}
if(temperature<50){
    console.log("less than 50");
    
}
else{
    console.log("not less tha  50");
    
}

const score =200
if(score>100){
    const power="fly";
    console.log(`user power: ${power}`);
    
}

//console.log(`user power: ${power}`);// it will give error becuase scope is  within {}
//in VAR this error does not come which is drawbacck of VAR

// SHORTHAND NOTATION 
const balance = 1000

if(balance>500) console.log("test");
// if(balance>500) console.log("test"),console.log("prajal"); immemature way 

//shift+ALT+DOWNARROW for duplicate

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
