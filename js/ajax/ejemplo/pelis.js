
// https://ejemplos-dc1c1.firebaseio.com/generos.json
// https://ejemplos-dc1c1.firebaseio.com/peliculas/<genero>.json


// Paso 1: Pedir los generos
// Paso 2: Mostrar popup para elegir un genero
// Paso 3: Pedir las peliculas del genero elegido
// Paso 4: Mostrar las peliculas recibidas en un popup

function getGeneros() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/generos.json');

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText);
            let datos = JSON.parse(xhr.responseText);
            let genero = prompt('Elige un genero ' + datos);
            pedirPeliculas(genero);
        }
    }
    xhr.send();

}



function pedirPeliculas(genero) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/peliculas/'+genero+'.json');

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            let r = JSON.parse(xhr.responseText);
            for (let id in r){
                console.log(r[id])
                alert(r[id])
            }
            
        }
    }
    xhr.send();
}

getGeneros();

