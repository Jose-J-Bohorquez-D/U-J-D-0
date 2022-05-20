/* ejemplos de tipos de datos en javaScript */

//tipo de dato string
var nombre = "Jose J. Bohorquez D.";
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

nombre = 2.7;
console.log(typeof nombre);

//tipo de dato numerico
var number = 23;
console.log(typeof number);

//tipo de dato objeto
var objeto = {
    nombre   : "Aaron",
    apellido : "Bohorquez",
    edad     : 2.3
}
console.log(typeof objeto);

//tipo de dato boolean (true, false)
var bandera = false;
console.log( typeof bandera);

//tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log( typeof simbolo);

//tipo clase es una funcion
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }    
}
console.log(typeof Persona);

//tipo de dato undefined
var x;
console.log( typeof x);

var x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

//arreglos
var autos=['bmw','audi','volvo'];
console.log(typeof autos);

//tipo vacio o  tipo de dato vacio
var z = "";
console.log(z);
console.log(typeof z);

//concatenar cadenas 
var nombre = "Jose";
var apellido = "Bohorquez";

var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto); 

var nombreCompleto2 = "jose" + " " + "bohorquez";
console.log(nombreCompleto2) ;

var x = nombre + 2 + 3;
console.log(x);

x = nombre + (2+3);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);





