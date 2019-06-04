var Traductor = (function(){
    console.log('Hola');


    function traduce(idioma, texto){
        switch(idioma){
            case 'en':
                return en[texto] ? en[texto] : 'No tenemos esta traduccion'
                break;
            case 'it':
                return en[texto] ? en[texto] : 'No tenemos esta traduccion'
                break;
            default: return 'No conocemos ese idioma'
                
        }
        //return idioma[texto];
    }

    /*function en(texto){
        return en2[texto];
    }
    function it(n1,n2){
        return it2[texto];
    }*/

    var en = {
        'hola': 'hello',
        'adios': 'bye'
    }

    var it = {
        'buenos dias': 'boungiorno'
    }

    //Como hacemos accesibles estas funciones
    return{
        traduce: traduce
        /*en: en,
        it: it,*/
    }
})()