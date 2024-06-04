const user = {
    username : "vaibhav",
    price : 34,

    welcomeMessage : function(){
        console.log(`${this.username},Welcome to website`)
    }
}

user.welcomeMessage()
user.username = "vaibhavji"
user.welcomeMessage()

//console.log(this)

// function chai(){
//     console.log(this);
// }


// function chai(){
//     let username = "ramramsa"
// console.log(this.username);
// }

//chai()

// function chai = () => {
//     let username = "ramramsa"
// console.log(this.username);
// }

//chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
//  }
            //or

  //const addTwo = (num1,num2) =>  num1 + num2
  //const addTwo = (num1,num2) =>  (num1 + num2)
  //const addTwo = (num1,num2) =>  ({username:"hitesh"})




console.log(addTwo(3,4))