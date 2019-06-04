function Serie(titulo, episodios, episodiosVistos,finalizada){
    this.titulo = titulo;
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
    this.finalizada = function (){
        return this.episodios === this.episodiosVistos;
    }
    //this.finalizada = finalizada;
}

var twd = new Serie('The Walking Dead', 180, 178);
var got = new Serie('Game of thrones', 150, 150);
var lqsa = new Serie('La que se avecina', 180, 180);
var oa = new Serie('Original Angel', 26, 13);
var cher = new Serie('Chernobyl', 150, 150);

let arrayPeliculas = [twd, got, lqsa, oa, cher];
let arrayPeliculasNo = new Array();


function noFinalizadas(array){

    arrayPeliculasNo = array.filter(function (elem){
        return !elem.finalizada();
    })
    /*for(var i = 0; i < array.length; i++){
        if(!array[i].finalizada()){
            arrayPeliculasNo.push(array[i]);
            //console.log(array[i]);
        }
        
    }*/
    console.log(arrayPeliculasNo)
    return arrayPeliculasNo;
}

noFinalizadas(arrayPeliculas);

