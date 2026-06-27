const productos = [
{
    nombre:"Mouse Gamer RGB",
    precio:15000
},
{
    nombre:"Teclado Mecánico",
    precio:45000
},
{
    nombre:"Monitor Samsung 24''",
    precio:180000
},
{
    nombre:"Auriculares HyperX",
    precio:35000
},

];

const contenedor =
document.getElementById("contenedor");

function renderProductos()
{
    contenedor.innerHTML = "";

    productos.forEach(producto =>
    {
        const card =
        document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${producto.nombre}</h3>

            <p class="precio">
                $${producto.precio.toLocaleString()}
            </p>
        `;

        contenedor.appendChild(card);
    });
}

document
.getElementById("btnOrdenar")
.addEventListener("click", () =>
{
    productos.sort((a,b)=>
        a.nombre.localeCompare(b.nombre)
    );

    renderProductos();
});

renderProductos();
