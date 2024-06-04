// Singleton

// Object literals
const mySym = Symbol("key1")
const Jsuser = {
    name : "vaibhav",
    age : 23,
    location: "Indore",
    [mySym] : "mykey1",
    full_name : "vaibhav ji Dapkara",
    email:"dapkaravaibhav@gmail.com",
    isLoggedIn : false,
    lastLoginday : ["monday","friday"]

}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["full_name"])
console.log(Jsuser.mySym)

Jsuser.email = "dapkaravaibhav@gmail.com"
Object.freeze(Jsuser)
Jsuser.email = "dapkaravaibhav91@gmail.com"
console.log(Jsuser)

Jsuser.greetingc = function(){
    console.log("hekko console user")
}

Jsuser.greetingtwo = function(){
    console.log(`hekko console user ${this.name}`)
}