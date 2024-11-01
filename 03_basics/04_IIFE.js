
// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE                    // NAMED IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);// UNNAMED IIFE
} )('hitesh')   //PARAAMETER PASS 


// if we have to wite two iife so use semicolon at the end of first one