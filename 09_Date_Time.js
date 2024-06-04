// Dates


// let myDate = new Date()                                          //output

// console.log(myDate.toString())                    //  Tue May 14 2024 17:40:27 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())                //  Tue May 14 2024
// console.log(myDate.toISOString())                 //  2024-05-14T12:10:27.669Z
// console.log(myDate.toLocaleString())              //  14/5/2024, 5:42:07 pm
// console.log(myDate.toLocaleDateString())          //  14/5/2024
// console.log(myDate.toJSON())                      //  2024-05-14T12:12:07.968Z
   

let myCreatedDate = new Date(2023 ,0 ,23)

let myCreatedDate1 = new Date(2023 ,0 ,23,5,3)
console.log(myCreatedDate1.toLocaleString())                  //23/1/2023, 5:03:00 am

let myCreatedDate2 = new Date("2023-02-03")
let myCreatedDate3 = new Date("07-14-2005") 


let myTimeStamp = Date.now()

console.log(myTimeStamp)                                    //17156894173

console.log(myCreatedDate1.getTime())                        //
console.log(Math.floor(Date.now()/1000))                      //1715689417



let newDate = new Date()
console.log(newDate)                                               // /2024-05-14T12:32:26.146Z/

console.log(newDate.getMonth()+1)                               //  5

console.log(newDate.getDay())                                    // 2

//`${newDate.getDay()} is time`

newDate.getDate.toLocaleString('default',{
    weekday:"long"
})
