// Immediately Invoked Function Expression (IIFE)

(function chai(){
    Console.log(`DB CONNECTED`);

})();

( (name) => {
    console.log(`DBCONNECTED TWO ${name}`);
})('hitesh')