let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let msg = 'El canario estรก en la jaula...';
        resolve(msg);
    }, 1000);
}).then(msg => {
    console.log('MSG: ' + msg);
})


getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json').then((misDatos) => {
    console.log(misDatos);
    // return getDatos()
})

function getDatos(url) {
    return new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let datos = JSON.parse(xhr.responseText);
                resolve(datos);
            }
        });

        xhr.send();

    });
}

function getArrayFromObject(obj) {
    const arr = [];
    for (let id in obj) {
        arr.push(obj[id]);
    }
    return arr;
}

function getGeneroElegido(generos) {
    const arrGeneros = getArrayFromObject(generos);
    return prompt(`Elige un genero: ${arrGeneros.join(', ')}`);
}

getDatos('https://ejemplos-dc1c1.firebaseio.com/generos.json')
    .then((generos) => {
        console.log(generos);
        let genero = getGeneroElegido(generos);
        return getDatos(`https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);
    })
    .then((objPeliculas) => {
        const peliculas = getArrayFromObject(objPeliculas);
        alert(`${convierteArray(peliculas).join(', ')}`);
    })


// function fn2() {
//     console.log(1);

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             console.log(2);
//             let num = 3;
//             resolve(num);
//         }, 1000);
//     });
// }



function convierteArray(array) {
    let arrayAux = [];
    arrayAux = array.map(function (x) {
        return '- ' + x;
    });
    return arrayAux;
}

let array = convierteArray(['peli1', 'peli2']);
console.log(array);

