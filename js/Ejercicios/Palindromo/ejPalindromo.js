
function esPalindromo(string){
    var stringEspacios = string.replace(/ /g, '');
    
    var arrayLetras = stringEspacios.split('');
    var arrayAlReves = arrayLetras.reverse();
    var stringAlReves = arrayAlReves.join('');
    if(stringEspacios === stringAlReves){
        console.log("ES PALINDROMO");
    }else{
        console.log("NO ES PALINDROMO");
    }
    return stringEspacios === stringAlReves;

    /*var stringEs = string.replace(/ /gi,"");
    console.log(stringEs);
    console.log(stringEs.length);
    var acabado = false;
    var i = 0;
    var i2 = stringEs.length -1;
    var iguales = false;
    while (!acabado && !iguales){
        if(!i===i2 && i<i2){
            if(!stringEs[i] === stringEs[i2]){
                acabado = true;
            }
        }else if(i2<i){
            iguales = true;
        }else{
            if(!stringEs[i] === stringEs[i2]){
                acabado = true;
            }else{
                iguales = true;
            }
        }

        i++;
        i2--;
    }

    if(iguales && !acabado){
        console.log("ES PALINDROMO");
    }else{
        console.log("NO ES PALINDROMO");
    }*/
}


esPalindromo("hola aloh");
esPalindromo("hola a loh");
esPalindromo("hola al oh");
esPalindromo("holaloh");
esPalindromo("hola alo");