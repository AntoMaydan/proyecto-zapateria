const crearTarjetas = (img,nombre,precio,descripcion) =>{
    let tarjeta = document.createElement("div");// creas el div 
    let contenido= `                            
        <div class="grid-item catalogo-item">
            <img class="img-catalogo" src=${img} alt="">
            <p class="titulo-producto">${nombre}</p>
            <p>${precio}</p> 
            <p>${descripcion}</p>
        </div>
    
        `
    tarjeta.innerHTML = contenido // lo mostras en el html
    return tarjeta                // retornas la tarjeta , siempre tenes que retornar algo si no no funciona
}

const container = document.querySelector(".marca");// si lo haces con clases

const mostrarInfo =async (data)=>{
    
    let infoArticulos = await dato.map((elemento) => { // yo use map vos podes usar forEcht , dicen que map es mejor 
        const crearEtiqueta = crearTarjetas(elemento.img,elemento.nombre,elemento.precio,elemento.descripcion);
        container.appendChild(crearEtiqueta)
    })
    return infoArticulos
}

mostrarInfo()