const mercaderia = [
    {
        articulo:"Rita",
        precio:"$28000",
        talle:"talle 36 al 40"
    },
    {
        articulo:"Caterina",
        precio:"$22000",
        talle:"talle 38 al 40"
    },
    {
        articulo:"Mule",
        precio:"$23000",
        talle:"talle 36 al 40"
    },
    {
        articulo:"Lara/Sky blue",
        precio:"$24500",
        talle:"talle 36 al 38"
    },
    {
        articulo:"Tomi",
        precio:"$21000",
        talle:"talle 36 al 37"
    },
    {
        articulo:"Cata",
        precio:"$20500",
        talle:"talle 36 al 39"
    },
    {
        articulo:"Danubio",
        precio:"$22000",
        talle:"talle 36 al 40"
    },
    {
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
