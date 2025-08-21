const listeners = {};

function myAddEventListener(nombreDelEvento, callback) {
    if (!listeners[nombreDelEvento]) {
        listeners[nombreDelEvento] = [];
    }

    listeners[nombreDelEvento].push(callback);
}

function myDispatchEvent(nombreDelEvento, options) {
    const eventos = listeners[nombreDelEvento];

    if (eventos) {
        eventos.forEach(fn => {
            fn({ data: options.data }); 
        });
    } else {
        console.log('Nadie está escuchando el evento:', nombreDelEvento);
    }
}

myAddEventListener('my-event', ({ data }) => {
    console.log('Hola mi nombre es ' + data.name + ' ' + data.last);
});

myDispatchEvent('my-event', { data: { name: 'Juan', last: 'Gonzalez' } });
