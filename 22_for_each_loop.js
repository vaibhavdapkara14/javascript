 const coding = ["javascript","Ruby","Cpp"]

 coding.forEach(function(item){
    // console.log(item)
 })


// using arrow function

 coding.forEach((item) => {
    // console.log(item)
 })

 function printMe(item){
    // console.log(item)
 }

//  coding.forEach(printMe)  


 coding.forEach((item,index,arr) =>{
    console.log(item,index,arr);   
 })


 const myCoding = [
    {
        languagename : "javascript",
        langugefile : "js"
    },
    {
        languagename : "cpp",
        langugefile : "c++"
    },
    {
        languagename : "Ruby",
        langugefile : "rb"
    },
 ]