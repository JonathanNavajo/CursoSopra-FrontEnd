
do{
    var numElegido = Math.floor(Math.random()*51);
    console.log(numElegido);
    var num = prompt('Introduce un numero: ');
    

    var contador = 0;

    while(Number(num) !== numElegido){
        contador ++;
        if(num < numElegido){
            alert('Tu numero es menor que el elegido');
            num = prompt('Introduce un numero: ');
        }else {
            alert('Tu numero es mayor que el elegido');
            num = prompt('Introduce un numero: ');
        }   
    }

    alert('HAS ACERTADO');
    alert('El numero de intentos ha sido: ' + contador);

    var esVerdad = confirm('¿Quieres volver a jugar?');

}while(esVerdad)