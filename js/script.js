const  precioTicket  =  200 ;
let inputCantidad = document.getElementById("cantidad");
let inputCategoria = document.getElementById("seleccion");
let borrar = document.getElementById("borrar");
let resumen = document.getElementById("resumen");
let total = document.getElementById("total");
let error = document.getElementById("error");

resumen.addEventListener("click", (event) => {
    event.preventDefault();
    let resultado;
    let cantidad = inputCantidad.value;
    let categoria = inputCategoria.value;

    if((cantidad ==  0) || ( isNaN (cantidad))){
        error.textContent = "*Por favor ingrese una cantidad valida";
        inputCantidad.focus();
    } else {
        error.textContent = "";
        if(categoria === "estudiante"){ 
            resultado = cantidad * precioTicket * 0.2;
        } else if (categoria === "trainee") {
            resultado = cantidad * precioTicket * 0.5;
        } else if(categoria === "junior"){
            resultado = cantidad * precioTicket * 0.85;
    
        } else {
            resultado = cantidad * precioTicket
        }
    
        return total.innerHTML= resultado;
    }
    }
);

borrar.addEventListener("click", (event) =>{
    event.preventDefault();
    nombre.value = "";
    apellido.value = "";
    correo.value = "";
    cantidad.value = "";
    inputCategoria.value ="sin_categoria"
    total.innerHTML= "";
});

    
