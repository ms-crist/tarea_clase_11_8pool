function ValidaNombre(){
    var campo = document.getElementById("campo").value;
    var mensaje = document.getElementById("msgNombre");

    if(campo.length < 5){
        mensaje.innerText = "El nombre debe de tener al menos 5 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El nombre es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

function Validacorreo(){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var correo = document.getElementById("campo1").value;
    var mensaje = document.getElementById("msgCorreo");

    if(!regex.test(correo)){
        mensaje.innerText = "Ingrese un correo válido!";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El correo ingresado es correcto";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

function Validatel(){
    var campo = document.getElementById("campo2").value;
    var mensaje = document.getElementById("msgTel");

    if(campo.length < 9){
        mensaje.innerText = "El teléfono debe de tener al menos 9 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El teléfono es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

function ValidaTexto(){
    var campo = document.getElementById("text").value;
    var mensaje = document.getElementById("msgText");

    if(campo.length < 5){
        mensaje.innerText = "El mensaje debe tener al menos 5 caracteres";
        mensaje.classList.remove("exito");
        mensaje.classList.add("error");
    }else{
        mensaje.innerText = "El mensaje es correcto.";
        mensaje.classList.remove("error");
        mensaje.classList.add("exito");
    }
}

