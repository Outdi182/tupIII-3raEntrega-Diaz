const productos = [
{
    nombre:"Mouse Gamer RGB Hyperx",
    precio:15000
},
{
    nombre:"Teclado Mecánico Red Dragon",
    precio:45000
},
{
    nombre:"Monitor Samsung 24''",
    precio:180000
},
{
    nombre:"Auriculares HyperX Cloud Stinger Core",
    precio:35000
},
{
    nombre:"Webcam Logitech",
    precio:28000
},
{
    nombre:"Parlantes Bluetooth Gadnic",
    precio:22000
},
{
    nombre:"Mouse Pad Netmak 120cm",
    precio:15000
},
{
    nombre:"Joystick Playstation 4 Inalambrico Original",
    precio:32000
},
{
    nombre:"Router TP link 2 antenas",
    precio:24000
}
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
