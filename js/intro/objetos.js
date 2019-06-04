var persona = {
    nombre: 'Charly',
    apellido: 'Falco', 
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona['nombre']);

var clave ='apellido';
console.log(persona.clave);
console.log(persona[clave]);

persona.edad = 20;

console.log(persona.nombreCompleto());


var pelicula = {
    titulo: 'Los vengadores',
    director: {
        nombre:'...',
        apellido:'Russo',
    },
    //director: 'Hermanos Russo',
    genero: 'Accion/Superheroes',
    setAnyoEstreno: function(anyo){
        this.anyoEstreno = anyo;
        var self = this;
        function mostrar(){
            //console.log(this)
            //console.log(self);
        }
        //mostrar.bind(pelicula);
        mostrar.call(this);
    }
}


pelicula.setAnyoEstreno(2019);
console.log(pelicula.anyoEstreno);
console.log(pelicula)



// var serie = {
//     titulo: 'The Walking Dead',
//     episodios: 180,
//     episodiosVistos: 178
// }
function Serie(titulo, episodios, episodiosVistos){
    this.titulo = titulo;
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
}

var twd = new Serie('The Walking Dead', 180, 178);
var got = new Serie('Game of thrones', 180, 178);
console.log(twd);




var cancionBatman = new Array(16).join('what'-1) + ' Batman!';
console.log(cancionBatman);







var texto = 'Hola mundo!';
console.log(texto.length);
console.log(texto.toUpperCase);
console.log(texto.replace('o',0));
console.log(texto.replace(/o/gi,0));
console.log(texto.split(' '));
console.log(texto.substring(3,6));
console.log(texto.indexOf('!'));
console.log(texto.indexOf('e'));
console.log(texto.includes('e'));
console.log(texto.includes('o'));


var colores = ['amarillo', 'rojo', 'verde'];

var ultimo = colores.pop();
var primero = colores.shift();
console.log(ultimo, primero);

colores.push('blanco');
colores.unshift('azul');
colores = colores.concat([ultimo, primero]);
console.log(colores);



var hoy = new Date();
console.log(hoy.getFullYear);
console.log(hoy.getDay);
console.log(hoy.getDate);

var angel = {nombre: 'Angel'};
var angelJSON = JSON.stringify(angel);
var angelJS = JSON.parse(angelJSON)
console.log(angel);
console.log(angelJSON);
console.log(angelJS);


