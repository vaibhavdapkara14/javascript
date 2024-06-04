function sayMyName(){
    
console.log("V")
console.log("A")
console.log("I")
console.log("B")
console.log("H")
console.log("A")
console.log("V")
}

sayMyName();

// function addTwonumbers(number1 ,number2){
//     console.log( number1+number2)
// };


function addTwonumbers(number1 ,number2){
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
};

const result = addTwonumbers(3 , 5);
console.log( "result:",result)


function loginUserMessage(username= "sam"){
    if(!username){
        console.log("Please enter a username");

    }
    return`${username} just Logged in`
}

// console.log(loginUserMessage("vaibhav") )
console.log(loginUserMessage("vaibhav") )

    function calculateCartPrice(val1 ,val2, ...num1) {
        return num1;
    }

    console.log(calculateCartPrice(200,400,500,100))


    const user = {
        username:"vaibhav",
        price :199
    }

    function  handleObjects(anyObject) {
     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)

    }

    handleObjects({
        username:"ram",
        prize:34
    })


    const myNewArray =[200,400,600,100]

    function returnSecoendValue(getArray){
        return getArray
    }
    console.log(returnSecoendValue(myNewArray))
    console.log(returnSecoendValue(200,500,400,300));s

