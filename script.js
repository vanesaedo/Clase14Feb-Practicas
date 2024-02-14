// Ejercicio 1

/*
let arrPrueba2 = [true, false]

function determinarSiBooleanos(arr) {
    for (let i = 0; i < arr.length; i++){

        if (typeof arr[i] === 'boolean'){
            return true;
        } 
    } 
    return false;
}
let arrPrueba1 = [0, null, undefined, NaN,true];
console.log(determinarSiBooleanos(arrPrueba1))
*/

//Ejercicio 2
/*
function elevarArr (param) {

    let arrResultante = [];

    for (let i=0 ; i < param.length; i++){
        arrResultante.push(param[i]**3);       
    }
    arrResultante = arrResultante.sort((a,b) => (a - b));
    return arrResultante;
}
let enteros = [-2,4,6,-89,10];
console.log(elevarArr(enteros));
*/

//Ejercicio3
/*Crea la función "contarCaracteres". Contar todas las "o"  almacenadas en un array de palabras. En cada posición del array hay una palabra almacenada. Tip: piensa en doble bucle. Ejemplo de datos y llamada a la función
let data = ["yoda", "best", "has", "tortilla", "cAfe", "barrita tomate", "zumo"];
contarCaracteres(data,"a");*/

let data = ["palabra", "gato", "pelota", "campo"];
let a = "a";
const contarCaracteres = (data, a) => {
    
    let contadorLetra = 0;
    for (let i = 0; i < data.length; i++) {

        for (let j = 0; j < data[i].length; j++) {

            if (data[i][j] === (a)) {
                contadorLetra++;  
            }
        }
    }
    return contadorLetra;
}

console.log(contarCaracteres(data,"p"));

//Con un bucle

const soloUnParametro = (data, a) => {
    
    for (i = 0; i < data.length; i++){
        let arrFragmentos = [];
        let numFragm = (data.split("a").length);
        
    }
   
}