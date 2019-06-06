class Coche {
    
    static numRuedas(){
        return 4;
    } 


    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
    }

    pintar(nuevoColor){
        this.color = nuevoColor;
    }
}


let tesla = new Coche('Tesla', 'Roadster', 'rojo');
console.log(tesla)
let vacio = new Coche();
console.log(vacio)
console.log(Coche.numRuedas())







class Persona {
    constructor(nombre, apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    getNombreCompleto(){
        return this.nombre + ' ' + this.apellidos;
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellidos, puesto){
        super(nombre, apellidos);
        this.puesto = puesto;
        let edad = 20;
        this.getEdad = function() {
            return edad;
        }
        this.setEdad = function(nuevaEdad){
            edad = nuevaEdad;
        }
    }
}


let jonathan = new Desarrollador('Jonathan', 'Navajo', 'JS');
console.log(jonathan.getNombreCompleto())
console.log(jonathan.edad)
console.log(jonathan.getEdad())