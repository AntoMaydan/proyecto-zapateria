const mercaderia = [
    {
        img : "img/10zapatosrita.png",
        articulo:"Rita",
        precio:"$28000",
        talle:"talle 36 al 40"
    },
    {
        img :"img/11zapatoscaterina.png",
        articulo:"Caterina",
        precio:"$22000",
        talle:"talle 38 al 40"
    },
    {
        img:"img/12zapatosmule.png",
        articulo:"Mule",
        precio:"$23000",
        talle:"talle 36 al 40"
    },
    {
        img:"img/14zapatoslara.png",
        articulo:"Lara/Sky blue",
        precio:"$24500",
        talle:"talle 36 al 38"
    },
    {
        img:"img/15zapatostomi.png",
        articulo:"Tomi",
        precio:"$21000",
        talle:"talle 36 al 37"
    },
    {
        img:"img/16zapatoscata.png",
        articulo:"Cata",
        precio:"$20500",
        talle:"talle 36 al 39"
    },
    {
        img:"img/17zapatosdanubio.png",
        articulo:"Danubio",
        precio:"$22000",
        talle:"talle 36 al 40"
    },
    { 
        img:"img/13zapatoslara.png",
        articulo:"Lara/Silver",
        precio:"$24500",
        talle:"talle 37 al 40"
    }

]


const todosLosProductos = (req,res) =>{
    let infoArticulos = JSON.stringify(mercaderia)
    res.send(infoArticulos)
};

module.exports = {todosLosProductos}
