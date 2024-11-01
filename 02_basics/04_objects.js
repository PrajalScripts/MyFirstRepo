//here we will discuss silgelton previously studied object literals

//const tinderUser = new Object() //singleton object 
const tinderUser ={}      
tinderUser.id="123abc"
tinderUser.name= "sammy"
tinderUser.loggedIn=false        //non singleton object 
// console.log(tinderUser);


const regularUser= {
    email:"ptiwari@gmail.com",
    fullName :{  
        userFullName : {
            firstName: "prajal",
            lastName : "tiwari"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);

// combining objects 
const obj1= {1:"a",2:"b"}
const obj2={3:"c",4:"d"}
    
//const obj3= {obj1,obj2}
//console.log(obj3);  // same array like objects its not merger just both object are contained here .
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }     
//const obj3 =Object.assign({},obj1,obj2) //we will also not ut use much 

// output { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj3= {...obj1,...obj2}  // good way 
console.log(obj3);

//another synatx if the value came from databasse

const users =[ {

    id:1,
    email:"p@gmail.com"

},{

    id:2,
    email:"p@gmatil.com"

},
{

},
{

}
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));//Object that contains the properties and 
//methods. This can be an object that you created or an existing Document Object Model (DOM) object.


console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));



const course = {

    coursename:"js in hindi",
    price: "678",
    courseInstructor: "prajal"
}
// course.courseInstructor --good way but its more clean way is 

const{courseInstructor} = course
console.log(courseInstructor);// its seems more long name so we can modify its name using : with name  

const{courseInstructor:Instructor} = course
console.log(Instructor); // this is known as DESTRUCTURING

// now a days values comes in json but od daays it comes in XML which is complex


//Structure of JSON
// {
//     "name":"hitesh",
//     "courseNmae":"MCA",
//     "price":"FREE"
// }  key and values both are string type 


// sometimes we get API in form of array of objects 
//jSON formatter tool 
// []--array ,  {}--objects 