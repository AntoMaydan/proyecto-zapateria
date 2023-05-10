/* ------- validaciones formulario ------*/

const inputTelefono = document.getElementById("phoneNumber");
const mensajeError = document.getElementById("mensaje2");

inputTelefono.addEventListener("blur",(event) => {
        let validacionNumero=(event.target.value);
        let numeroIngresado= validacionNumero.toString().length
        if (numeroIngresado != 11){
            mensajeError.classList.add("mostrar")
        }else{
            mensajeError.classList.remove("mostrar")
        }
})

const inputNombre = document.querySelector(".inputNombre");
const mensajeError1 = document.getElementById("mensaje1")
inputNombre.addEventListener("blur",(event)=>{
     let validacionNombre = (event.target.value);
     console.log(validacionNombre);
     let verificar =/^[^A-Z]+$/g
     let textoVerificado = verificar.test(validacionNombre)
     console.log(textoVerificado)
})