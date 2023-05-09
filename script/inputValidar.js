/* ------- validaciones formulario ------*/

const inputTelefono = document.getElementById("phoneNumber");
const mensajeError = document.getElementById("mensaje")

inputTelefono.addEventListener("blur",(event) => {
        validacionNumero=(event.target.value)
        let numeroIngresado= validacionNumero.toString().length
        if (numeroIngresado != 11){
            mensajeError.classList.add("mostrar")
        }else{
            mensajeError.classList.remove("mostrar")
        }
})
