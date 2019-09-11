var cuentaJugador = 0;

window.onload = function () {

    var modal = document.getElementById("myModal")
    var btn =   document.getElementById("myBtn")
    var span =  document.getElementsByClassName("close")[0]
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
    var btnRepartir = document.getElementById('btnRepartir');
    var paquete = new paqueteCartas();
    var mesaJugador = new mesa('cartasJugador');
    var mesaContrincante = new mesa('cartasContrincante');

    btnDarCarta.onclick = function () {
        var nuevaCarta = paquete.darCarta();
        var suma = mesaJugador.insertarCarta(nuevaCarta);
        document.getElementById('ptn-uno').innerHTML = suma;

        //console.log(suma)
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
    btnRepartir.onclick = function(){
       console.log("CLick");
    }

}
