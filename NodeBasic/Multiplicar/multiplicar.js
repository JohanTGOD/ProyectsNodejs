// Este archivo va a a ser instanciado por app.js
const fs= require('fs');
//Creamos la funcion que va a ser instanciada
let crearArchivo2 = (base)=>{

    return new Promise((resolve,reject)=>{
        //Valida si es numero
        if (!Number(base)) {
            reject('El valor introducido no es un numero');
        }
        let data = '';
        for (let i = 0; i< 10; i++)
        {
            data += `${base} * ${i} = ${base * i} \n`;
        }
 
        fs.writeFile(`tabla-${base}.txt`, data ,(err)=>{

            if (err) {
                reject(`El error es ${err}`)
            }else{
                resolve(`El archivo tabla -${base}.txt ha sido creado`);
            }
            
            
        } )

    })

}


// Esto de aca hace referencia a la funcion de arriba y es lo que permite la instancia
//desde otro archivo nodejs
module.exports = {
    crearArchivo2
}

