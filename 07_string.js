 const name = "Ram"
 const count = 50

 console.log("name" + " count");                                      //name count

 console.log(`Jay Jay Shree ${name} `);                               //Jay Jay Shree Ram

 const gamename = new String('vai-bh-av');

 console.log(gamename[0]);                                             //v

 console.log(gamename.__proto__ );                                     // {}

 console.log(gamename.length);                                         //  9

 console.log(gamename.toUpperCase) ;                                   //  [Function: toUpperCase]

 console.log(gamename.charAt(2)) ;                                     //   i

 console.log(gamename.indexOf('h'));                                   //  5


 const  newstring = gamename.substring(0,4);                           // vai-
 console.log(newstring); 

 const  anotherstring = gamename.slice(0,4);                           // vai-
 console.log(anotherstring); ;
  
 const  newstringone = "    vaibhav   "                 
 console.log(newstringone) ;                                            //     vaibhav
 console.log(newstringone.trim()) ;                                     // vaibhav


const url = "https://vaibhavbhai.com/jayshree%20ram"                    //https://vaibhavbhai.com/jayshree+ram
     
console.log(url.replace('%20', '+')) ;