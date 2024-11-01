const marvelHereos= ["thor","loky","spiderman"]
const dc = ["superman","flash","batman"]

//marvelHereos.push(dc)
console.log(marvelHereos);// it creates array in array  ; here array takes any type of object in array 

//good method
 const allHereos= marvelHereos.concat(dc)
console.log(allHereos);

//more optimised way to add the arrays  

const all_new_heros= [...allHereos,...dc]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6,],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(3);// places all in one array 
console.log(another_array);
console.log(real_another_array);

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"}))  //intresting will return nul values


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
