
const Entrenamiento = () => {
    /*
    let entrenamientoLibre = "Entrenamiento Libre";
    let entrenamientoPersonalizado = "Entrenamiento Personalizado";
    let precioLibre = 3000
    let precioPersonalizado = 4000
 */
    let nombreCompleto = prompt("Por Favor Ingrese su Nombre y Apellido")
    document.getElementById("usuario").innerText = nombreCompleto
    let edad = prompt("Cual es tu edad")
    document.getElementById("edad").innerText = edad
}
Entrenamiento();

const objeto = {
    producto1: {
        nombre: 'Bancos',
        imagen: "./img/bancos.jfif",
        descripcion: 'Banquitos multi uso',
        precio: 4500,
    },
    producto2: {
        nombre: 'Porta Discos',
        imagen: "./img/portadiscos.jfif",
        descripcion: 'Porta discos con porta barras',
        precio: 10000,
    },
    producto3: {
        nombre: 'Rack de sentadillas',
        imagen: "./img/racksentadillas.jfif",
        descripcion: 'Rack para realizar sentadillas y mas usos',
        precio: 14000,
        
    },
    producto4: {
        nombre: 'Porta Barras',
        imagen: "./img/portabarras.jfif",
        descripcion: 'Para colocar las barras',
        precio: 12000,
    }
}

const productosGimnasio = document.getElementById('productos');

productosGimnasio.innerHTML = `
    <div class="div">
        <aside class="car">
            <div class="card bor" >
                <div class="card-body tamaño">
                    <img class="foto" src=${objeto.producto1.imagen} alt=${objeto.producto1.nombre}</img>
                    <h5 class="card-title text">${objeto.producto1.nombre}</h5>
                    <p class="text">${objeto.producto1.descripcion}</p>
                    <p class="text">Precio: $${objeto.producto1.precio}</p>
                </div>
            </div>
        </aside>
    </div>

    <div class="div">
    <aside class="car">
        <div class="card bor" >
            <div class="card-body tamaño">
                <img class="foto" src=${objeto.producto2.imagen} alt=${objeto.producto2.nombre}</img>
                <h5 class="card-title text">${objeto.producto2.nombre}</h5>
                <p class="text">${objeto.producto2.descripcion}</p>
                <p class="text">Precio: $${objeto.producto2.precio}</p>
            </div>
        </div>
    </aside>
    </div>

    <div class="div">
    <aside class="car">
        <div class="card bor" >
            <div class="card-body tamaño">
                <img class="foto" src=${objeto.producto3.imagen} alt=${objeto.producto3.nombre}</img>
                <h5 class="card-title text">${objeto.producto3.nombre}</h5>
                <p class="text">${objeto.producto3.descripcion}</p>
                <p class="text">Precio: $${objeto.producto3.precio}</p>
            </div>
        </div>
    </aside>
    </div>

    <div class="div">
    <aside class="car">
        <div class="card bor" >
            <div class="card-body tamaño">
                <img class="foto" src=${objeto.producto4.imagen} alt=${objeto.producto4.nombre}</img>
                <h5 class="card-title text">${objeto.producto4.nombre}</h5>
                <p class="text">${objeto.producto4.descripcion}</p>
                <p class="text">Precio: $${objeto.producto4.precio}</p>
            </div>
        </div>
    </aside>
    </div>
`;













    /*
    let numeroEntrenamiento = prompt("Que entrenamiento queres? escribir 1 o 2")

    while(true) {
    if(numeroEntrenamiento === "1"){
        alert(entrenamientoLibre + " ya puedes empezar a entrenar. Su valor es de : $" + precioLibre);
        document.write("<h3> Precio de " + entrenamientoLibre + ": $"+(precioLibre+(precioLibre * 0.21)) +" mas IVA incluido.")
        break;
    }if(numeroEntrenamiento === "2"){
        alert(entrenamientoPersonalizado + ". Su valor es de : $" + precioPersonalizado + "Quieres agregar alguna clases?" );
        document.write("<h3> Precio de " + entrenamientoPersonalizado + ": $"+(precioPersonalizado+(precioPersonalizado * 0.21)) +" mas IVA incluido.")
        break;
    }else{
        alert("entrenamiento no encontrado")
        break;
    } 
  } 
}

Entrenamiento();

nombre: 'Mancuerna',
    imagen: "./img/tem.png",
    descripcion: 'es una mancuerna',
    precio: 1000

*/
