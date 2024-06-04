//const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "123vi"
tinderuser.name = "vaibhav"
tinderuser.IsLoggedIn = false

console.log(tinderuser);                                      //{ id: '123vi', name: 'vaibhav', IsLoggedIn: false }

const regularUser = {
    email :"dapkaravaibhav.com",
    fullname :{
        userfullname:{
            firstname:"vaibhav",
            lastname:"dapkaravaibhav"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);            // vaibhav

const obj1 = {1:"a",2:"b"}
const obj3 = {3:"a",4:"b"}
const obj5 = {5:"a",6:"b"}

const obj4 = {...obj1, ...obj3}
console.log(obj4)                                       //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id:1,
        email: "user@example.com"
    },
    {
        id:2,
        email: "user@example.com"
    },
    {
        id:3,
        email: "user@example.com"
    },
    {
        id:4,
        email: "user@example.com"
    }
]

users.email

console.log(tinderuser)                                    //{ id: '123vi', name: 'vaibhav', IsLoggedIn: false }
// console.log(object.keys(tinderuser))

console.log(object.values(tinderuser))

console.log(object.entries(tinderuser))

const  course ={
    coursename:"js in Hindi",
    price: "999",
    courseInstructor:"Instructor"
}

//course Instructor

const {courseInstructor} = course

const{courseInstructor:instructor} = course;

console.log(courseInstructor);
console.log(instructor)


// {
//     "name": "Course",
//     "coursename" : "js in hindi",
//     "price":"free"

// }

[
    {},
    {},
    {}
]