import { servis } from "./consumoApi";
console.log(servis)

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

servis
.traerInfo()
.then((res)=>{
    res.forEach((articulos)=>{
        const crearEtiqueta = crearTarjetas(articulos.articulo,articulos.precio,articulos.talle);
        container.appendChild(crearEtiqueta)
    })
})
.catch((error)=>alert(`ocurrio un error ${error}`))
