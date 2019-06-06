/* "Hola" => "aloH"
    MO: reverse ("Hola")
    lt txt = "Hola".reverse();
    txt = "aloH"
*/

String.prototype.reverse = function(){
    let arrayAux = this.split('');
    let stringAlReves = (arrayAux.reverse()).join('');

    console.log(stringAlReves);
}

'Jonathan'.reverse();
