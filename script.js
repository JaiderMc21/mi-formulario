document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que se envíe el formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("telefono").value;
    const cargo = document.getElementById("cargo").value;
    const correo = document.getElementById("correo").value;

    // Aquí puedes realizar acciones con los datos (por ejemplo, enviarlos al servidor)
    console.log("Datos del formulario:");
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Teléfono:", telefono);
    console.log("Cargo:", cargo);
    console.log("Correo:", correo);
});