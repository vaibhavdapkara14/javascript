const coding = ["js","ruby","java"]

const value = coding.forEach( (item) => {
    // console.log(item)
    // return item
})

console.log(value)

const myNums = [1,2,3,4,5,6,7,8]

myNums.filter((num) => {
   return  num>4
    })

    const newNums = []

    myNums.filter((num) => {
        if(num>4){
            newNums.push(num) 
        }
    })
    console.log(newNums)


const books = [
{title: 'book One ',genre: ' Fiction',publish:1991  , edition: 2000},
{title: 'book Two',genre: 'Non Fiction',publish:1992  , edition: 2009},
{title: 'bookThree',genre: 'History',publish:1999 , edition: 2021},
{title: 'book Four',genre: 'Non Fiction',publish:1981 , edition: 2005},
{title: 'book Five',genre: 'Science',publish:1977 , edition: 2009},
{title: 'book Six ',genre: 'History',publish:1977 , edition: 2007},
{title: 'book Seven',genre: 'Non Fiction',publish:2002 , edition: 2002},
{title: 'book Eight',genre: 'Science',publish:1982 , edition: 2016}

]

let userbooks = books.filter((bk) => bk.genre === 'History')
console.log(userbooks)

 userbooks = books.filter((bk) => bk.edition === 2009)
console.log(userbooks)

 userbooks = books.filter((bk) => bk.publish === 1977)
console.log(userbooks)



//////////////////////////////////////////////////////      maps

const myNumers= [1,2,3,4,5,6,7,8,9,10,11]

const newNumers = myNumers.map((num) => num * 10)
 
const newnums = newNumers
                .map((num) => num * 10)
                 .map((num) => num+1)
                 .filter((num) => num >= 40)

                 console.log(newNums);


///////////////////////////////////////////////////////////// .Reduce ////////////////////////////////////////////////////////////



const myNums1 = [1,2,3,4,5,6]

const myTotalNums1 = myNums(function(acc, currval){
    console.log(` acc: ${acc} currval: ${currval}`)
    return acc+currval;
},0)



console.log(myTotalNums1)

const myTotalNums = myNums((acc, currval) => acc+currval ,0)



const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "ruby",
        price: 29
    },
    {
        itemName : "py course",
        price: 999
    },
]
 const pricetopay = shoppingCart.reduce((acc, item) => acc+item.price , 0)


console.log(pricetopay)



