//declaro objetos
let empleados = [{
        id: 1,
        nombre: "fernando"
    },

    {
        id: 2,
        nombre: "Matin"

    },
    {
        id: 3,
        nombre: "Juan"

    }
]

//declaro objetos
let salarios = [{
        id: 1,
        salario: 100
    },
    {
        id: 2,
        salario: 200
    }
]

//Creo una funcion que contiene un callback
let getEmpleado = (id, callback) => {

    //Busco een el objeto donde aparezca el id que envio por parametro
    let empleadoDB = empleados.find(empleado => {

        return empleado.id === id;
    })

    //Busco si encontro o no un empleado
    if (!empleadoDB) {
        // respuesta negativa porque no tiene el null
        callback(`No exite un usuario con el id ${id}`)
    } else {
        // Respuesta positiva porque tiene como parametro el null al inicio
        callback(null, empleadoDB)
    }

}


//aca se llama la funcion declarada anteriormente
//El primer parametro es el id que queremos buscar
//EL segundo parametro esta ente parentecis porque el primer parametro es el error y el segundo es la respuesta
//Positiva
getEmpleado(3, (err, returnCallback) => {

    if (err) {
        console.log("El erro es :", err);

    } else {

        console.log("El usuario es :", returnCallback);
    }
});



// Declaro otra funcion
let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salarioEmp => {
        return salarioEmp.id === empleado

    })

    if (!salarioDB) {
        callback("Error el salario de ese empleado no existe")
    } else {
        //console.log("El salariodb es :", salarioDB);
        callback(null, salarioDB);
    }



}



//aca se llama la funcion declarada anteriormente la de salario
//El primer parametro es el id que queremos buscar
//EL segundo parametro esta ente parentecis porque el primer parametro es el error y el segundo es la respuesta
//Positiva
getSalario(3, (err, rescallback) => {

    if (err) {
        console.log("El error es ", err);
    } else {

        console.log("El salario del empleado es :", rescallback);
    }
})