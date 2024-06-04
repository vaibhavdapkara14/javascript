const marvel_heroes =["thor","spiderman","batman"]

const dc_heroes= ["warner", "pant","dhoni"]

marvel_heroes.push(dc_heroes);

console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);


const All_heroes = marvel_heroes.concat(dc_heroes)
console.log(All_heroes);

const All_new_heroes = [...marvel_heroes ,...dc_heroes]

console.log(All_new_heroes);

const another_Array = [1 ,2 , 3,[ 4, 5, 6], 7,[ 6 ,7 , [ 4 ,5]]]

const real_another_Array = another_Array.flat(Infinity)
console.log(real_another_Array)



console.log(Array.isArray("vaibhav"))                //false
console.log(Array.from("vaibhav"))
console.log(Array.from({name:"vaibhav"}))



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.from(score1,score2,score3))


