let equipos = ['Valencia', 'Levante', 'Real Madrid', 'At Madrid', 'At Bilbao', 'Barcelona', 'Sevilla', 'Betis'];


// Valencia - Sevilla
// At Bilbao - Betis
// At MAdird -Barcelona
// Levante - Real Madrid



let equiposImpar = ['Valencia', 'Levante', 'Real Madrid', 'At Madrid', 'At Bilbao', 'Barcelona', 'Sevilla'];


// Valencia - Sevilla
// At Bilbao - Betis
// At MAdird -Barcelona
// Levante - Real Madrid

function numAleatorio(tamano){
    return Math.floor(Math.random() * tamano);
}

function mezclarEquipos(arrayEquipos){
    let longitud = arrayEquipos.length;
    let solucion = [];
    for(let i = 0; i < longitud; i++){
        var aleatorio = numAleatorio(arrayEquipos.length);
        solucion.push(arrayEquipos.splice(aleatorio,1));
    }
    return solucion;
}

function enfrentar(equipo1, equipo2, ...restoEquipos){
    if (equipo2){
        console.log(equipo1 + ' ' + equipo2 );
        if(restoEquipos.length != 0){
            enfrentar(...restoEquipos);
        }
    }else {
        console.log(equipo1 + ' pasa a la siguiente ronda')
    }

}

let mezclados1 = mezclarEquipos(equipos);
let mezclados2 = mezclarEquipos(equiposImpar);

console.log();
enfrentar(...mezclados1);

console.log();
enfrentar(...mezclados2);

