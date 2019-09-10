var cuentaJugador = 0;

window.onload = function () {
    var objCarta = document.getElementById('micarta');
    objCarta.onclick = function () {
        objCarta.className = 'carta carta1';
    }

    var btnDarCarta = document.getElementById('btnDarCarta');
    var btnDetener = document.getElementById('btnDetener');
    var paquete = new paqueteCartas();
    var mesaJugador = new mesa('cartasJugador');
    var mesaContrincante = new mesa('cartasContrincante');

    btnDarCarta.onclick = function () {
        var nuevaCarta = paquete.darCarta();
        var suma = mesaJugador.insertarCarta(nuevaCarta);

        if (suma > 21)
            document.getElementById('punteoJugador').innerHTML = 'PERDIO';
    }

    btnDetener.onclick = function () {
        do {
            var nuevaCarta = paquete.darCarta();
            var suma = mesaContrincante.insertarCarta(nuevaCarta);
            if (suma > 21)
                document.getElementById('punteoContrincante').innerHTML = 'PERDIO';
        } while (suma < 21);

    }
}
