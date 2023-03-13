 /* lst = [{
    nombre: "Patricio",
    plata: 500,
},{
    nombre: "Javier",
    plata: 400,
},{
    nombre: "Carlos",
    plata: 700,
}];

localStorage.setItem("Usuarios", JSON.stringify(lst)); */



//PAGINA ENTRADA



const botonIngreso = document.getElementById('boton')

botonIngreso.addEventListener('click', (event) => {
    const rootError = document.getElementById('rootError1')
    const ingreso = document.getElementById('ingreso')
    const nombreIngreso = document.getElementById('input1').value
    const pinIngreso = document.getElementById('input2').value
    rootError.className = "fw-bold text-danger";
    ingreso.className = "btn btn-warning text-white";

    if( nombreIngreso === "Patricio" & pinIngreso === "3435") {
        let pinSeguridad1 = prompt('Ingrese su pin Nuevamente')
        if(pinSeguridad1 = 3435){
            ingreso.innerHTML = `<a href="/Cuentas/cuenta1.html">Continuar</a>`
        }
    } if( nombreIngreso === "Javier" & pinIngreso === "6666") {
        let pinSeguridad1 = prompt('Ingrese su pin Nuevamente')
        if(pinSeguridad1 = 6666){
            ingreso.innerHTML = `<a href="/Cuentas/cuenta2.html">Continuar</a>`
        }
    } if( nombreIngreso === "Carlos" & pinIngreso === "0612") {
        let pinSeguridad1 = prompt('Ingrese su pin Nuevamente')
        if(pinSeguridad1 = 0612){
            ingreso.innerHTML = `<a href="/Cuentas/cuenta3.html">Continuar</a>`
        }
    }else {
    }
}); 

