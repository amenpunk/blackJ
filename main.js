var cuentaJugador = 0;

window.onload = function () {

       // Get the modal
    var modal = document.getElementById("myModal")
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn")
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0]
    // When the user clicks the button, open the modal 
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
     
   
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
        document.getElementById('ptn-uno').innerHTML = suma;

        console.log(suma)
        if (suma > 21){
        modal.style.display = "block"
        document.getElementById('punteoJugador').innerHTML = 'PERDIO';
        }
    }

    btnDetener.onclick = function () {
        do {
            var nuevaCarta = paquete.darCarta();
            var suma = mesaContrincante.insertarCarta(nuevaCarta);
            if (suma > 21)
                document.getElementById('punteoContrincante').innerHTML = 'PERDIO';
        } while (suma < 21);
        document.getElementById('ptn-dos').innerHTML = suma;

    }
}
