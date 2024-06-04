//  Stack (Primitive)   Heap(Non Primitive)

let Youtubename = "Cricket Khelo"

let anothername = Youtubename
anothername = "chaiorcode"

console.log(Youtubename);
console.log(anothername);

let userone = {
    email: "userone@gmail.com",
    upi : "userone@ybl"

}
let userTwo = userone;

userTwo.email= "dapkaravaibhav@gmail.com"

console.log(userone.email)
console.log(userTwo.email)