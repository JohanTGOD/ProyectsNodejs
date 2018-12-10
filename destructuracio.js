//Declaro un objeto json y dentro de el tengo una funcion

let deadpooll = {
    nombre: "johan",
    apellido: "mora",
    poder: "programar",
    getNombre: function() {

        return `${this.nombre} ${this.apellido} - poder : ${this.poder}`
    }

};





// old scholl
//let nombreCompleto = deadpooll.getNombre();
//let nombre = deadpooll.nombre;
//let apellido = deadpooll.apellido;
//let poder = deadpooll.poder;

//---------------------------------------------------------------------------------------------------------


//new 
let { nombre, apellido, poder } = deadpooll;
console.log(nombre, apellido, poder);