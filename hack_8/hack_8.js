/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (i=0; i<arr.length; i++) {

    if (i == 1){
        result.push(arr[i].charAt(0) + arr[i].charAt(1).replace('a','@') + arr[i].slice(2))
    }
    if (i == 2){
        result.push(arr[i].charAt(0) + arr[i].charAt(1).replace('a','@') + arr[i].slice(2))
    }
    if(i == 3 ){
        result.push(arr[i].toUpperCase())
    } 
}


//export result
module.exports = result;