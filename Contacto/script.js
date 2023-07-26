function iniciar()
{
    document.getElementById("formulario").onsubmit = alerta;
}

function alerta(e)
{
    var sNombre = document.getElementById("nombres").value;
    var sApellidos = document.getElementById("apellidos").value;
    var sCorreo = document.getElementById("correo").value;
    var sTelefono = document.getElementById("telefono").value;
    alert("Nombre: " + sNombre + "\nApellidos: " + sApellidos + "\nCorreo: " + sCorreo + "\nTelefono: " + sTelefono);
}

window.onload = iniciar