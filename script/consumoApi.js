const crearTarjetas = (articulo,precio,talle) =>{
    let tarjeta = document.createElement("div");
    let contenido= `
        <div class="grid-item catalogo-item">
            <img class="img-catalogo" src="img/1botastrento.png" alt="">
            <p class="titulo-producto">${articulo}</p>
            <p>${precio}</p> 
            <p>${talle}</p>
        </div>
    
        `
    tarjeta.innerHTML=contenido
    return tarjeta
}


const container = document.querySelector("[data-table]");

console.log(container)

const traerInfo = async()=>{
    await fetch ("http://localhost:4001/todosLosArticulos")
            .then((res)=>res.json())
            .then((res)=>respuesta(res))
}

traerInfo()




