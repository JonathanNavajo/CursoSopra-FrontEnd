//Una funcion que se ejecuta sola, que carga otras funciones por ejemplo

var miCalculadora = (function(){
    console.log('Hola');

    //Como hacemos accesibles estas funciones

    function suma(n1,n2){
        return n1 + n2;
    }
    function resta(n1,n2){
        return n1 - n2;
    }
    function multiplica(n1,n2){
        return n1 * n2;
    }
    function divide(n1,n2){
        return n1 / n2;
    }
    return{
        suma: suma,
        retsa: resta,
        multiplica: multiplica,
        divide: divide,
    }
})()

miCalculadora.suma(1,2);


function suma(){
   return 1;
}
