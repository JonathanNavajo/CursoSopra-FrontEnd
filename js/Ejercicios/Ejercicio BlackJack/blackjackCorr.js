function getRandomNum(){
    return Math.ceil(Math.random()*9);
}

function empezar(){
    do{
        jugar();
        var seguirJugando = confirm('¿Quieres jugar otra vez?');
    }while(seguirJugando)
}

//Donde vamos a poner toda la lógica del juego
function jugar(){
    //var puntosJugador = jugarJugador();
    var puntosJugador = getPuntos(function(puntos){
        return confirm('Llevas ' + puntos + ' puntos...   ' + '¿Quieres otro numero?');
    });
    console.log('Puntos Jugador: ' + puntosJugador);
    if(puntosJugador < 20){
        //var puntosMaquina = jugarMaquina();
        var puntosMaquina = getPuntos(function(puntos){
            return puntos >= 17;;
        }); 
        console.log('Puntos Maquina: ' + puntosMaquina);
        if(puntosMaquina < 20){
            mostrarGanador(puntosJugador, puntosMaquina);
        }else{
            msgGanadorDirecto(puntosMaquina, 2)
        }
    }else{
        msgGanadorDirecto(puntosJugador, 1)
    }
}

function getPuntos(cb){
    var puntos = 0;
    var gana = false;
    var pierde = false;
    var quiereNum = true;
    do {
        puntos += getRandomNum();
        gana = puntos20(puntos);
        pierde = puntosMayorA20(puntos);
        if(!gana && !pierde){
            quiereNum = cb(puntos);
        }
    } while (quiereNum && !gana && !pierde)
    return puntos;
}

/*function jugarJugador(){
    var puntos = 0;
    var gana = false;
    var pierde = false;
    var quiereNum = true;
    do {
        puntos += getRandomNum();
        gana = puntos20(puntos);
        pierde = puntosMayorA20(puntos);
        if(!gana && !pierde){
            quiereNum = confirm('Llevas ' + puntos + ' puntos...   ' + '¿Quieres otro numero?');
        }
    } while (quiereNum && !gana && !pierde)
    return puntos;
}

function jugarMaquina(){
    var puntos = 0;
    var gana = false;
    var pierde = false;
    var quiereNum = true;
    do {
        puntos += getRandomNum();
        gana = puntos20(puntos);
        pierde = puntosMayorA20(puntos);
        if(!gana && !pierde){
            quiereNum = puntos >= 17;
        }
    } while (quiereNum && !gana && !pierde)
    return puntos;
}*/

function puntos20(puntos){
    return puntos === 20;
}

function puntosMayorA20(puntos){
    return puntos > 20;
}


function msgGanadorDirecto(puntos, jugador){
    var txtJugador = "el jugador!";
    var txtMaquina = "la maquina!";
    var msg = puntos === 20 && jugador === 1 ? 'Ha ganado el jugador!' : 'Ha ganado la máquina!'
        console.log(msg);
        alert(msg);
}


function mostrarGanador(puntosJugador, puntosMaquina){
    if (puntosJugador > puntosMaquina){
        console.log('Gana el jugador!');
        alert('Gana el jugador!');
    }else if (puntosJugador < puntosMaquina){
        console.log('Gana la maquina!');
        alert('Gana la maquina!');
    }else {
        console.log('Empate!');
        alert('Empate!');
    }
}

empezar();