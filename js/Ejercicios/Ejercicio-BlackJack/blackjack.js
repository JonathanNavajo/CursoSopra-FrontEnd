

do{
     //Math.floor(Math.random()*9);

    //Turno jugador
    var sumaArrayJ = new Array();
    var sumaArrayM = new Array();
    var fuera = 0;
    var continua = confirm('¿Quieres jugar?');
    var sumaJ = 0;
    var sumaM = 0;
    while(continua && fuera === 0){
        var numeroAzar = Math.floor(Math.random()*10)+1 ;
        sumaArrayJ.push(numeroAzar);
        
        if(sumaArrayJ.reduce(function(sacc,elem){
            sumaJ = sacc += elem; 
            console.log(sumaJ);
            return sumaJ;
        }, 0) > 20){
            alert('Te has pasado!!');
            fueraJ = 1;
        }else{
            continua = confirm('Tu numero es: ' + numeroAzar + '   La suma es: ' + sumaJ + '    ¿Quieres otro numero?');
        }  
    }
    fuera = 0;
    //Turno maquina
    while(fuera === 0 && sumaJ <= 20){
        numeroAzar = Math.floor(Math.random()*10)+ 1;
        console.log('EL NUMERO ES: ' + numeroAzar);
        sumaArrayM.push(numeroAzar);
        
        if(sumaArrayM.reduce(function(sacc,elem){
            sumaM = sacc += elem; 
            console.log('LA SUMA ES: ' + sumaM);
            return sumaM;
        }, 0) > 17){
            fuera = 1;
        }
    }

    if(sumaJ <= 20 && sumaM > 20){
        alert('HAS GANADO!');
    }else if(sumaJ > sumaM){
        alert('HAS GANADO!');
    }else if(sumaJ < sumaM && sumaM <= 20){
        alert('HAS PERDIDO');
    }




    var esVerdad = confirm('¿Quieres volver a jugar?');

}while(esVerdad)

