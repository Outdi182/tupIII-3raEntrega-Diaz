const personas = [];

const form =
document.getElementById("formPersona");

const tabla =
document.getElementById("tablaPersonas");

const mensajeError =
document.getElementById("mensajeError");

function calcularIMC(peso, altura)
{
    const alturaMetros = altura / 100;

    return Number(
        (
            peso /
            (alturaMetros * alturaMetros)
        ).toFixed(2)
    );
}

function clasificarIMC(imc)
{
    if(imc < 18.5)
    {
        return {
            texto:"Bajo peso",
            clase:"estado-bajo"
        };
    }

    if(imc < 25)
    {
        return {
            texto:"Normal",
            clase:"estado-normal"
        };
    }

    if(imc < 30)
    {
        return {
            texto:"Sobrepeso",
            clase:"estado-sobrepeso"
        };
    }

    return {
        texto:"Obesidad",
        clase:"estado-obesidad"
    };
}

function renderTabla()
{
    tabla.innerHTML = "";

    personas.forEach((persona, indice)=>
    {
        const imc =
        calcularIMC(
            persona.peso,
            persona.altura
        );

        const estado =
        clasificarIMC(imc);

        const fila =
        document.createElement("tr");

        fila.innerHTML = `
            <td>${persona.nombre}</td>
            <td>${persona.apellido}</td>
            <td>${persona.edad}</td>
            <td>${persona.altura}</td>
            <td>${persona.peso}</td>
            <td>${imc}</td>

            <td class="${estado.clase}">
                ${estado.texto}
            </td>

            <td>
                <button onclick="eliminarPersona(${indice})">
                    Eliminar
                </button>
            </td>
        `;

        tabla.appendChild(fila);
    });
}

function eliminarPersona(indice)
{
    personas.splice(indice,1);

    renderTabla();
}

form.addEventListener("submit",(event)=>
{
    event.preventDefault();

    const nombre =
    document.getElementById("nombre").value.trim();

    const apellido =
    document.getElementById("apellido").value.trim();

    const edad =
    document.getElementById("edad").value.trim();

    const altura =
    document.getElementById("altura").value.trim();

    const peso =
    document.getElementById("peso").value.trim();

    if(
        nombre === "" ||
        apellido === "" ||
        edad === "" ||
        altura === "" ||
        peso === ""
    )
    {
        mensajeError.textContent =
        "Todos los campos son obligatorios.";

        mensajeError.className =
        "error";

        return;
    }

    mensajeError.textContent = "";

    personas.push({
        nombre,
        apellido,
        edad,
        altura:Number(altura),
        peso:Number(peso)
    });

    renderTabla();

    form.reset();
});