/* ------- validaciones formulario ------*/

const inputTelefono = document.getElementById("phoneNumber");
const mensajeError = document.getElementById("mensaje2");

inputTelefono.addEventListener("blur",(event) => {
        let validacionNumero=(event.target.value);
        let numeroIngresado= validacionNumero.toString().length
        if (numeroIngresado != 10){
            mensajeError.classList.add("mostrar")
        }else{
            mensajeError.classList.remove("mostrar")
        }
})

const inputNombre = document.querySelector(".inputNombre");
const mensajeError1 = document.getElementById("mensaje1")
inputNombre.addEventListener("blur",(event)=>{
     event.preventDefault()
     let nombre = (event.target.value);
     let verificacionNombre = nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
     /*const divPadre = document.querySelector(".input-container");
     let mensajeError1 =document.createElement("div");
     mensajeError1.classList.add("mostrar");
     mensajeError1.innerHTML=`<span>Error!!!El nombre debe comenzar con mayuscula</span>`;
     verificacionNombre != nombre ? 
     divPadre.appendChild(mensajeError1 ): divPadre.removeChild(mensajeError1);*/
     verificacionNombre != nombre ? mensajeError1.classList.add("mostrar") : mensajeError1.classList.remove("mostrar");
     
}
)


