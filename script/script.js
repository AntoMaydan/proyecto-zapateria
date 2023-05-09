/*------ muenu hamburguesa  ------*/

let menuhamburguesa = document.querySelector(".hamburguer");
let listaDesplegable = document.getElementById("lista");

menuhamburguesa.addEventListener("click",(event) => {
    console.log("me hicieorn click");
    console.log(listaDesplegable);
    listaDesplegable.classList.toggle("mostrar")
});

