const myObject = {
    cpp  :'c++',
    js : 'javascript',
    java : 'java',
    rb  : 'Ruby'
}

for( const key in myObject){
    // console.log(`${key} is shortcut by ${myObject[key]}`)
}

const programming  = ['js','python' ,'javascript']

for( const key in programming){
// console.log(programming[key])
}



const map = new Map()

map.set('IN', "INDIA")
map.set('USA',"UNITED STATE OF AMERICA")
map.set('FR',"FRANCE")

for (const key  in map){
    // console.log(key)                   give no response
}