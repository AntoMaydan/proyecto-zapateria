const crearTarjetas = (img,articulo,precio,talle) =>{
    let tarjeta = document.createElement("div");
    let contenido= `
        <div class="grid-item catalogo-item">
            <img class="img-catalogo" src=${img} alt="">
            <p class="titulo-producto">${articulo}</p>
            <p>${precio}</p> 
            <p>${talle}</p>
        </div>
    
        `
    tarjeta.innerHTML = contenido
    return tarjeta
}


const container = document.querySelector("[data-table]");

console.log(container)

const traerInfo = async()=>{
   let info = await fetch ("https://api-zapateria-render.onrender.com/todosLosArticulos")
            .then((res)=>res.json())
            .catch(error => console.log("HAY UN ERROR!!" +error))
    return info
}

const mostrarInfo =async ()=>{
    let dato= await traerInfo()
    let infoArticulos = dato.map((elemento) => { 
        const crearEtiqueta = crearTarjetas(elemento.img,elemento.articulo,elemento.precio,elemento.talle);
        container.appendChild(crearEtiqueta)
    })
    return infoArticulos
}

mostrarInfo()





