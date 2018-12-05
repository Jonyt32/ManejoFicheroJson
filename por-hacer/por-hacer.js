const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () =>{

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json',data,(err) =>{
        if(err){
            throw new Error('NO se pudo grabar',err);
        }
    });

}

const cargarDB = () =>{

    try{
        listadoPorHacer = require('../db/data');
    }
    catch(err){
        listadoPorHacer = [];
    }
    //console.log(listadoPorHacer);
}

const getListado = () =>{

    cargarDB();
    return listadoPorHacer;

} 

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}

const actualizar = (descripcion, completado) =>{
    cargarDB();
    console.log('descripcion', descripcion);
    let Index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(listadoPorHacer);
    console.log(descripcion);
    console.log(Index);
    if(Index >= 0){
        listadoPorHacer[Index].completado = completado;
        guardarDB();
        return true;
    }
    else{
        return false;
    }
}

module.exports ={
    crear,
    getListado,
    actualizar
}