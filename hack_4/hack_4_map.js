/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let number = [];

for (i=1 ; i<=7; i+=2){
    number.push(i)
}

result = number.map(number => number)

//export result
module.exports = result;