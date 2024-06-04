//        Array

const myArr = [0,1,2,3,4,5]

const myHeros = ["saktiman" ,"hanuman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);                            // 1


//Array methods

myArr.push(6);                         
myArr.push(7);
myArr.pop();

myArr.unshift(6)

myArr.shift();
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const NewArr = myArr.join();
console.log(myArr);
console.log(typeof NewArr);                   //string


// Slice Splice

console.log("A",myArr)                                 //A [0, 1, 2, 3,4, 5, 6]

const myn1 = myArr.slice(1,3)
console.log(myn1)                                        //[ 1, 2 ]
console.log("B",myArr)                                  //B [0, 1, 2, 3,4, 5, 6]

const myn2 = myArr.splice(1,3)                              //B [ 0, 4, 5, 6 ]
console.log("B",myArr)
console.log(myn1)                                           //[ 1, 2 ]





