let btnGuardar = document.getElementById('btn-guardar-pelicula')



btnGuardar.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event)
    console.log('Has pulsado el botón: ' + event.target.textContent);

    let inputPelicula = document.getElementById('input-pelicula');
    let inputGenero = document.getElementById('input-genero');

    let nuevoGenero = inputGenero.value.trim();
    let nuevaPelicula = inputPelicula.value.trim();

    if (nuevoGenero && nuevaPelicula) {
        saveGenero(nuevoGenero, nuevaPelicula);
    }

});

function saveGenero(genero, pelicula) {
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', `https://ejemplos-dc1c1.firebaseio.com/peliculas/${genero}.json`);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.status === 200 && xhr.readyState === 4 ) {
            Swal.fire({
                text: 'Pelicula guardada!',
                type: 'success'
            });
        }
    });
    xhr.send(JSON.stringify(pelicula));
}
