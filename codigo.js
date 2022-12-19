//Bienvenido/a

Toastify({
    text: "Bienvenido/a! click para mas informacion.",
    duration: 3000,
    destination: 'https://torneos.timbo.futbol/editions/863303382/tables/fixture?category=all',
    position: top ,
    style: {
        background: 'linear-gradient(to right, #ffebcd, #ff0000)'
    }
    
}).showToast();

//dias de entrenamiento
let diasDeEntrenamiento = parseInt (prompt("Ingrese los dias que suele entrenar"));
if (diasDeEntrenamiento < 1){
    console.log ("Bajo rendimiento")
}else if(diasDeEntrenamiento <= 3) {
    console.log ("Sos de los mios!");} 


//Entrenamiento
console.log ("Ingrese el entrenamiento");
let tipoDeEntrenamiento;
do{ 
    tipoDeEntrenamiento=prompt ("Ingresa el entrenamiento que sea de su preferencia (fin para salir)");
    console.log (tipoDeEntrenamiento);
}while(tipoDeEntrenamiento !="fin")


/*///precio que desea saber
let precioEntrenamiento=prompt ("Ingrese el entrenamiento para saber el precio que tiene. Funcional. -Fútbol. -Online. -Personalizado. (fin para salir)");{
switch(curso){
    case "Funcional":
        console.log ("Precio de funcional= $4.000");
        break;
    case "Fútbol":
        console.log ("Precio de fútbol = $3.200");
        break;
    case "Online":
        console.log ("Precio del online= $2.500");
        break
    case "Personalizado":
        console.log ("Precio del personalizado= $5.500")    
    default:
        console.log ("Curso no disponible.");
        break;
    }
curso=prompt ("Ingrese el entrenamiento que sea de su preferncia, y le diré su precio. Funcional. -Fútbol. -Online. -Personalizado (fin para salir)")
}
*/

const entrenamiento = [
    {
    id:1,
    nombre: "Funcional",
    precio : 4000
}, 
{
    id:2,
    nombre: "Fútbol",
    precio : 3200
},
{
    id:3,
    nombre: "Online",
    precio : 2500
},
{
    id:4,
    nombre: "Personalizado",
    precio : 5500
}
];

//sort
entrenamiento.sort ((a,b) => a.precio - b.precio);
console.log (entrenamiento);

//inputs
let campoTipoDeEntrenamiento = document.getElementById ("DS entrenamiento")
let campoCantidad = document.getElementById ("Cantidad") 

campoCantidad = 4; 

let tabla = document.createElement("table");
tabla.className="table table-striped";
let tablaBody = document.createElement("tbody");

for(const entrenamiento of entrenamientos){
    tablaBody.innerHTML += `
        <tr>
            <td>${entrenamiento.id}</td>
            <td>${entrenamiento.nombre}</td>
            <td>${entrenamiento.precio}</td>
        </tr>
    `;
}

tabla.append(tablaBody);
productosTabla.append(tabla);

//formulario
const form = document.querySelector('#form')
const nombre = form.nombre
const email = form.email

console.log(nombre)

let error = document.querySelector('error.')
form.addEventListener('submit.', validar)

function validar(e) {
    error.innerHTML = ''
    validarNombre(e)
    //validarEmail(e)
}
function validarNombre(e) {
    if (nombreYApellido.value == '' || nombreYApellido.value == null) {
        error.style.display ='block'
        error.innerHTML += '<li>ingresa nombre</li>'
        
        e.preventDefault()
    }
    
}

//get
function obtenerDatos(){
    const URLGET="https://api.itbook.store/1.0/new";
    fetch(URLGET)
    .then(resultado => resultado.json())
    .then(data => {
        console.log(data);
        const libros=data.servicio;
        console.log(servicios)
        libros.forEach((servicios)=>{
            document.getElementById("servicios").innerHTML += `
            <tr>
                <td> ${servicio.title}</t>
            <tr>
            
            `;
                })
    })
}

obtenerDatos();