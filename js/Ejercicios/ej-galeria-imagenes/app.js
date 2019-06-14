let arrayImagenes = ['https://i.imgflip.com/1otk96.jpg', 'https://i.imgflip.com/2fm6x.jpg', 'https://i.imgflip.com/gtj5t.jpg', 'https://i.imgflip.com/gk5el.jpg'];

let imagenMostrar = 0;

function sliderImagenes(arrayImagenes) {
    let botonAnterior = document.getElementById('btn-anterior');
    let botonSiguiente = document.getElementById('btn-siguiente');
    mostrarImagen(arrayImagenes[imagenMostrar]);
    botonAnterior.addEventListener('click', (event) => {
        event.preventDefault();
        if (imagenMostrar === 0) {
            imagenMostrar = arrayImagenes.length - 1;
            console.log(imagenMostrar);
        } else {
            imagenMostrar--;
            console.log(imagenMostrar);

        }
        mostrarImagen(arrayImagenes[imagenMostrar]);
    })


    botonSiguiente.addEventListener('click', (event) => {
        event.preventDefault();
        if (imagenMostrar === 3) {
            imagenMostrar = 0;
            console.log(imagenMostrar)
        } else {
            imagenMostrar++;
            console.log(imagenMostrar)

        }
        mostrarImagen(arrayImagenes[imagenMostrar]);
    })
}

sliderImagenes(arrayImagenes);



function mostrarImagen(imagen) {
    console.log(imagen);
    let resultado =
        `
            <img id="imagen" src=${imagen} alt=""><br>            
        `

    let mostrar = document.getElementById('mostrarImagen')
    mostrar.innerHTML = resultado;
}