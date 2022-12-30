const usuario = "agustin"
const constraseña = "123456"

const botonEnviar = document.querySelector("#botonEnviar")
botonEnviar.addEventListener("click", login)

function login(){

    var inputUsuario = document.getElementById("usuario").value;
    var inputContraseña = document.getElementById("contraseña").value;

    if ( inputUsuario === usuario && inputContraseña === constraseña ){
        window.location= "productos.html";
    }
    else{
        alert("Introduzca los datos correctamente")
    }
}



