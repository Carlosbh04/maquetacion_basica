let informacion = [];


function guardarInformacion(){
    let nombre = document.getElementById("nombre");
    let origen= document.getElementById("origen");
    let destino = document.getElementById("destino");
    let personas = document.getElementById("personas");
    let fecha = document.getElementById("fecha");

    let  nuevaInformacion ={
        nombre_nuevaInformacion: nombre.value,
        origen_nuevaInformacion: origen.value,
        destino_nuevaInformacion: destino.value,
        personas_nuevaInformacion: personas.value,
        fecha_nuevaInformacion : fecha.value,

        };

    informacion.push(nuevaInformacion);
    console.log(nuevaInformacion);
}

 

function filterInfo(){
    let tabla = document.getElementById("nuevaInformacion");
    let aside = document.querySelector(".aside2");

    if(aside.classList.contains("aside")){
        aside.classList.remove("aside");
    }

    tabla.innerHTML = `
    <tr class="table__head">
    <th>Nombre</th>
    <th>Origen</th>
    <th>Destino</th>
    <th>Numero de persona</th>
    <th>Fecha</th>
    </tr>
    `

    for(let i = 0; i< informacion.length; i++){
        if(informacion[i].destino_nuevaInformacion.toLowerCase() == "canarias" ||
        informacion[i].destino_nuevaInformacion.toLowerCase() == "mallorca" ||
        informacion[i].destino_nuevaInformacion.toLowerCase() == "galicia"){
            tabla.innerHTML += 
            ` <tr>
            <th>${informacion[i].nombre_nuevaInformacion}</th>
            <th>${informacion[i].origen_nuevaInformacion[0].toUpperCase() + informacion[i].origen_nuevaInformacion.substring(1).toLowerCase()}</th> 
            <th>${informacion[i].destino_nuevaInformacion[0].toUpperCase() + informacion[i].destino_nuevaInformacion.substring(1).toLowerCase()}</th>
            <th>${informacion[i].personas_nuevaInformacion}</th>
            <th>${informacion[i].fecha_nuevaInformacion}</th>
            </tr>`
            
            
        }
    }
}


  
