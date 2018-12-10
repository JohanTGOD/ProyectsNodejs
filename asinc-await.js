console.log("Empiezan los asycn y el await");


// Lo de abajo es una funcion normal de ejemplo para ver la diferencia

//let getNombre = () => {
//    return 'Fernando'
//}


//-------------------------------------------------------------------------

//esta de a continuacion es  la misma funcion anterior comentada pero con el async
// Que hace el async 
// es una propiedad que convierte automaticamente la funcion en una promesa

//Aca declaro la funcion con la propiedad de async para convertila en una promesa
let getNombre = async() => {

    return 'Fernando'
}

//Respuesta(instancia o llamado) de la funcion getNombre en Tipo promesa
getNombre().then(respuesta => {

        console.log('El nombre es :', respuesta);
    })
    .catch(err => {

        console.log("el error es : ", err);
    })

//respueta Normal
console.log(getNombre());



//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//await
// el await para que funcione debe estar dentro de una funcion async
// await se utiliza para ejecutar codigo de manera sincrona ya que js es asincrona


// Como lo menciono anteriormente para utilizar el await debe estar dentro de un asyn como lo hago a continuacion
// async en la funcion saludo
let saludo = async() => {

    console.log("Ejecutando funcion saludo ");


    // el aawait permite ejecutar codigo sincrono es decir espera , para ejecutar de uno en uno
    let nombre = await getNombre();


    return `bienvenido ${nombre}`

}

//como mi funcion saludo tiene un async entonces tengo que llamarlo como si fuera una promesa

saludo().then(res => {

    console.log(res);
});