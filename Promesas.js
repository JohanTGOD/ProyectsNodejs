console.log("Empiezan las promesas");

// Defino los objetos
let empleados = [{
        id: 1,
        nombre: "Johan"

    },
    {
        id: 2,
        nombre: "Sebastian"
    },
    {
        id: 3,
        nombre: "Samuel"
    }

];
// Defino los objetos
let salarios = [{
        id: 1,
        salario: 200
    },
    {
        id: 2,
        salario: 300
    }

];

//creo una funcion que me va a retornar una promesa
let getEmpleado = (id) => {

    //Aca hace el return de la promesa
    //resolve : Positivo
    //reject : Negativo
    return new Promise((resolve, reject) => {

        //Busco en el objeto donde aparezca el empleado
        let empleadoDB = empleados.find(empleadoToFind => {
            return empleadoToFind.id === id;

        })

        //Valida si exite un empleado
        if (!empleadoDB) {
            //Empleado no existe
            reject(`No existe un empleado con el id : ${id}`);
        } else {
            //Empleado existe
            resolve(empleadoDB);
        }
    });


};


//creo una funcion que me va a retornar una promesa
let getSalario = (empleado) => {
    //Aca hace el return de la promesa
    //resolve : Positivo
    //reject : Negativo
    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find(miSalario => {

            return miSalario.id === empleado.id
        })

        if (!salarioDB) {
            reject(`No existe el salario del empleado con el id: ${empleado}`, )
        } else {

            resolve(`El salario del empleado es : ${salarioDB.salario}`)
        }
    })


}



//Llamo la funcion anterior
// uso el then para saber la respuesta de la promesa
getEmpleado(2).then(empleado => {
    console.log("------------>", empleado);

    getSalario(empleado).then(elsalario => {
        console.log("------------>", elsalario);

    }, (error) => {

        console.log(error);
    })
}, (error) => {
    console.log(error);
});





//Promesas en cadena es lo mismo de la linea 84 pero mejor codificado
//Se llaman promesas en cadena 


getEmpleado(1).then(empleado => {

        return getSalario(empleado)

    })
    // puedo utilizar las promesas otra vez porque el return devuelve una promesa
    .then(resSalario => {
        console.log("Otra manera de hacer la promesa");
        console.log("============>", resSalario);
    })
    .catch(err => {

        console.log(err);
    })