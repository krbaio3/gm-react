const Eventos = require('events');

class Coche extends Eventos {
    constructor() {
        super();
        this.contador=0;
    }

    Arrancar() {
        console.log("El coche arranca");
        this.emit('arranco', this.contador);
        this.contador+=1;
    }

}

var coche1 = new Coche();

coche1.on('arranco', function(c) {
    console.log("El evento fue escuchado y la secuencia ejecutada => ", c);
});

coche1.Arrancar();
coche1.Arrancar();
coche1.Arrancar();
coche1.Arrancar();
