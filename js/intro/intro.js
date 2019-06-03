/* console.log('Hola mundo!');*/

var texto = "Hola mundo!";
console.log(texto);
console.log(typeof(texto));

texto = 3;
console.log(texto);
console.log(typeof(texto));

//No se tienen en cuenta los espacios ni los saltos de linea

console.log(                 ''
);


//Se pueden usar las dos formas pero la primera es la recomendada por buena practica
var unTexto = '';
var un_numero = 3;


var nombre1 = "Me llamo \"Jonathan\""
var nombre2 = 'Me llamo "Jonathan"'

if(nombre1){
    console.log('Valor Truthy')
}

if (unTexto){
    console.log("Valor Truthy")
}else{
//if (!unTexto){
    console.log("Valor Falsy")
}


//ARRAYS
var nums = [1,2,3,4,5];
var numsConstructor = new Array(6,7,8,9);


//Crea un array de 3 posiciones
var ar3Posiciones = new Array(3);

//Pero se puede hacer:
ar3Posiciones[0] = 10;
ar3Posiciones[1] = 11;
ar3Posiciones.push(12);
ar3Posiciones.push(13);
ar3Posiciones.push(14);
console.log(ar3Posiciones);


//Si se puede hacer
nombre1 = 'Jonathan';
console.log(nombre1[1]);

//No se puede hacer
num = 225;
console.log(num[1]);

//Se pueden crear arrays de lo que sea
var direccion = ['Calle', 'Norte', 12, '3B', 28330, 'Madrid', true]

//Podemos cambiar el tipo de cualquier campo
direccion[4] = '28330';
console.log(direccion);


//Operador ternario
var txtNum = 3 % 2 === 0 ? 'Es par' : 'Es impar'

//Seria lo mismo que:
var txtNum2 = '';
if(3 % 2 === 0){
    txtNum2 = 'Es par'
}else{
    txtNum2 = 'Es impar'
}

console.log(txtNum);
console.log(txtNum2);

//Mostrar mensaje

//Consola
console.log('Mensaje de informacion');
console.warn('Mensaje de peligro');
console.error('Mensaje de error');


//PopupJS

//alert('Mostramos un mensaje');
//var esVerdad = confirm('Es verdad lo que dicen?');

//var miNombre = prompt('Como te llamas?');



//Condicionales
var miNombre = 'Jonathan';

if(miNombre === 'Paco'){
    console.log('Eres Paco');
}else if (miNombre === 'Jonathan'){
    console.log('Eres Jonathan');
}else{
    console.log('No eres Paco ni tampoco Jonathan, quien eres?')
}


//Switch

switch(miNombre){
    case 'Paco':
        console.log('Eres Paco');
        break;
    case 'Jonathan':
        console.log('Eres Jonathan');
        break;
    default: 
        console.log('No eres Paco ni tampoco Jonathan, quien eres?'); 
}


//Bucles

let nombres = ['Robb', 'Arya', 'Sansa', 'Rickon', 'Bran'];

//For
for(var i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

//ForIN
for (var i in nombres){
    console.log('FORIN: ' + nombres[i]);
}

//ForOF
for (var nombre of nombres){
    console.log('FOROF: ' + nombre);
}

//While
var num = prompt('Introduce un numero: ');

while(Number(num) !== -1){
    console.log('Introduce -1 para salir del bucle');
    num = prompt('Introduce un numero: ');
}

//DO While

do{
    console.log('Introduce -1 para salir del bucle');
    num = prompt('Introduce un numero: ');
}while(Number(num) !== -1)