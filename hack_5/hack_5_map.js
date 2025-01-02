/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let number= [];

for(i=7; i>=1; i-=2){
    number.push(i)
}

result = number.map(number => number)

//export result
module.exports = result;