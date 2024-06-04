const score = 400;
console.log(score);                                            // 400


const balance = new Number(400)
console.log(balance);                                            // [Number: 400]
console.log(balance.toString().length);                                            // 3
console.log(balance.toFixed(1));                                            // 400.0


const OtherNumber = 1234.7658
console.log(OtherNumber.toPrecision(4));                                            //1235


const hundereds = 10000000
console.log(hundereds.toLocaleString('en-IN'))                                            // 1,00,00,000

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=Math+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))                     // 4              //convert negative to positive value
console.log(Math.round(4.6))                  // 4               // ya round figure karta ha 4.6 ka 5
console.log(Math.ceil(4.2))                   //  5              // ya aap top ki value daga aapna 4.8 choose kiya ha tho ya aapko 5  hi value daga
console.log(Math.floor(4.8))                  //   5             // ya aap lower ki value daga aapna 4.8 choose kiya ha tho ya aapko 4  hi value daga
 console.log(Math.min(4,8,6,7,9))             //  4              // ya aapko  min4imum value pass karaga
console.log(Math.max(4,8,6,7,9))              //  9              // ya aapko max value pass karaga 

console.log(Math.random())                    //  0.540368588608418      //Genrate random value
 console.log((Math.random() *  10 )+ 1)       // 8.78152444039035        //Genrate random value above 1
console.log(Math.floor(Math.random() * 10)+1) // 1                       //Genrate random value above 1 or fixed value not decimal example 4


const min = 20;
const max = 30;

console.log(Math.floor(Math.random()) * (max - min + 1) + min);    // 20 // issma randon value min value 20 or max value 3 ka andar hi daga

