/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */


let numberArray = [1, 2, 3, 4, 5];
let strNum = ['one', 'three', 'five']
let stringArray = ["foo", "bar", "baz", "qux", "echo"]
let result = [];
let string = [];
let salida = [];

 // remplazamo los valores 1, 3, 5 por one, three, five

for (i = 0; i <= numberArray.length; i++) {

    let num = numberArray[i];
    let remplazo = num;

    for (j = 0; j <= strNum.length; j++) {

        if ((num === 1 && j === 0) || (num === 3 && j === 1) || (num === 5 && j === 2)) {

            remplazo = strNum[j];
        };
    };

    salida.push(remplazo);
};


//remplazamos los valores de las palabras

let remplazo = {

    'foo': 'f00',
    'bar': 'Bar',
    'baz': 'b@z',
    'qux': 'quX',
    'echo': '3ch0'
};

for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    string.push(remplazo[str] || str);
};


result = ["h@ck", ...salida, "h@ck", ...string, "h@ck"]

console.log(result)


//export result
module.exports = result;