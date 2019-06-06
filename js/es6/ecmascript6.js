//CONSTANTES
const NUM_MAX = 3;
//NUM_MAX = 2;


// LEt
let angel = 'Angel';
angel = 'Paco';
console.log(angel);

function getNum(p1){
    let n1 = 0; 
    var n2 = 1;
    // console.log(n1);
    // console.log(n2);

    if(p1 === 0){
        let n1 = 3;
        var n2 = 4;
        console.log(n1);
        console.log(n2);
    }
    console.log(n1);
    console.log(n2);
}

getNum(0);

//TEMPLATE LITERALS

let nombre = 'Rickon';
let apellido = 'Stark';
let nombreCompleto = 'Me llamo ' + nombre + ' ' + apellido;
let nombreCompleto2 = `Me llamo ${nombre} ${apellido}`;
let suma = `La suma de 2 + 2 es ${2+2} y es ${2+2%2===0 ? 'par' : 'impar'}`;




//ARROW FUNCTIONS

[1, 2, 3, 4].map(function(num){
    return num*2;
})

let numDobles = [1, 2, 3, 4].map((num)=>{
    return num*2;
})

console.log(numDobles);




let pelicula = {
    titulo: 'Los vengadores',
    director: {
        nombre:'...',
        apellido:'Russo',
    },
    //director: 'Hermanos Russo',
    genero: 'Accion/Superheroes',
    setAnyoEstreno: function(anyo){
        this.anyoEstreno = anyo;
        let mostrar = () =>{
            console.log(this)
        }
        mostrar();
    }
}


pelicula.setAnyoEstreno(2019);
console.log(pelicula.anyoEstreno);


//REST PARAMS

function getNumLoteria(idSorteo, ...nums){
    console.log(nums);
    return `Sorteo ${idSorteo}: ${nums.join(', ')}`;
}

let numganador = getNumLoteria(1, 4, 24, 31, 38);
console.log(numganador);



//SPREAD OPERATOR

let telefonoDesconocido = ['+34',677334672];
let telefono = ['+34',677334672, 'Charly'];

function creaNumConPrefijo(prefijo, numTelf, nombre = 'Desconocido'){
    return `${nombre}: ${prefijo} ${numTelf}`;
}
console.log(creaNumConPrefijo(...telefono));
console.log(creaNumConPrefijo(...telefonoDesconocido));



//DESESTRUCTURACION

let serie = {
    titulo: 'Gangland Undercover',
    temporadas: 3,
    episodios: 30,
    finalizada: true
}

let {titulo,finalizada, ...restoProps} = serie;
console.log(titulo, finalizada)
console.log(restoProps)

let mascotas = ['gato', 'perro', 'pez', 'canario'];

// let gato = mascotas[0];
// let perro = mascotas[1];
// let pez = mascotas[2];

//En vez de acceder uno a uno a las mascotas, podemos hacer lo siguiente

//let [gato, perro, pez, canario] = mascotas
//console.log(gato, pez)
let [gato, perro, ...restoMascotas] = mascotas
console.log(gato, perro)
console.log(restoMascotas)