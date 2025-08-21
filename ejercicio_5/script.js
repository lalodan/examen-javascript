function myMethod(disponible) {
    const servicio = new Promise((resolve, reject) => {
        const tiempoRespuesta = Math.floor(Math.random() * 15000);

        setTimeout(() => {
            if (disponible) {
                resolve("Esta es la respuesta del servicio");
            } else {
                reject("Error el servicio no está disponible");
            }
        }, tiempoRespuesta);
    });

    const timeout = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Error: el servicio no responde, posible caída o lentitud");
        }, 12000);
    });

    return Promise.race([servicio, timeout])
        .then(respuesta => console.log(respuesta))
        .catch(error => console.log(error));
}

myMethod(true);   
myMethod(false);  
