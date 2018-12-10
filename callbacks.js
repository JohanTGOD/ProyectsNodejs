// Esto de aca es un callback
setTimeout(() => {
    console.log("pasaron los 3 segundos");
}, 3000);




// esto de aca es una funcion con dos parametros donde la primera es un id normal
//La segunda es un callback
let getUsuarioById = (id, callback) => {
    //Se declara un objeto de tipo json
    let usuario = {

        nombre: 'Fernando',
        id
    }

    if (id === 20) {
        //Aca se empieza a utilziar el callback
        //Aca es donde el callback da una respuesta negativa porque no tiene el "NULL"
        callback(`El usuario con id ${id} no exists en bd`)
    } else {
        //Aca se empieza a utilziar el callback
        //Aca es donde el callback da una respuesta positiva porque  tiene el "NULL" como primer parametro
        callback(null, usuario);

    }




}

//aca se llama la funcion declarada anteriormente
//El primer parametro es el id que queremos buscar
//EL segundo parametro esta ente parentecis porque el primer parametro es el error y el segundo es la respuesta
//Positiva
getUsuarioById(30, (err, usu) => {

    if (err) {
        console.log(`El error es ${err}`);
    } else {
        console.log("El usuario de bases de datos es : ", usu);

    }



})