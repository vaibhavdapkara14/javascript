// Var c = 300

let a = 300
 if(true) {
    let a = 10
    const b = 20
    console.log("INNER", a)
}
for(let i = 0; i < Array.length; i++) {
    const element =array[i];
}

console.log(a);
//console.log(b);
//console.log(c);

    
function one() {
    const username = "vaibhav"

    function two() {
        const website = "youtube"
        console.log(username)
    }
   // console.log(website)

   //two()
}
one();

if(true) {
    const username = "hitesh"
    if(username === "hitesh") {
        console.log(username + website)
    }
    //console.log(webs)
}

// console.log(username)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Interasting +++++++++++++++++++++++

addone(5)
function  addone(number) {
    return number + 1;
}

addTwo(5)

const addTwo = function(number) {
    return number +2;
}
