console.log("Continuacion del asyn-await ");
console.log("Vamos a coger una parte del codigo de promesas y lo vamos a transformar en asyn-await ");

//El codigo viejo empieza desde aca

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
// convertimos el codigo anterior el de archivo promesas y lo convertimos en async y await
let getEmpleado = async(id) => {

    //Aca hace el return de la promesa
    //resolve : Positivo
    //reject : Negativo


    //Busco en el objeto donde aparezca el empleado
    let empleadoDB = empleados.find(empleadoToFind => {
        return empleadoToFind.id === id;

    })

    //Valida si exite un empleado
    if (!empleadoDB) {
        //Empleado no existe
        //reject remplazado por el throw new err
        throw new Error(`No existe un empleado con el id : ${id}`);
    } else {
        //Empleado existe
        //resolver reeemplazado por el return
        return (empleadoDB);
    }



};


//creo una funcion que me va a retornar una promesa
// lo convertimos en async y await 
let getSalario = async(empleado) => {
    //Aca hace el return de la promesa
    //resolve : Positivo
    //reject : Negativo


    let salarioDB = salarios.find(miSalario => {

        return miSalario.id === empleado.id
    })

    if (!salarioDB) {
        //reject remplazado por el throw new err
        throw new Error(`No existe el salario del empleado con el id: ${empleado}`, )
    } else {
        //resolver reeemplazado por el return
        return (` ${salarioDB.salario}`)
    }



}

// Hasta aca





// ahora vamos a llamar las funciones con la forma del asyn y el await
//Recordar que el el await se llama dentro de un asycn



//Aca vamos a utilizar el async y el await

// como nos damos cuenta definimos el async para poder utilziar el await
// el await hace correr el codigo de manera asincrona

let getInformacion = async(id) => {
    //llamamos la funcion de getEmpleado de manera sincrona
    let empleado = await getEmpleado(id);
    //llamamos la funcion de getSalario de manera sincrona
    let salario = await getSalario(empleado);
    return `El empleado ${empleado.nombre} tiene un salario de ${salario}`
}


//Llamamos la funcion y como devuelve una promesa lo llamamos de esta manera
getInformacion(1).then(res => {
        console.log(res);
    })
    .catch(err => {

        console.log("El error es: ", err);
    })