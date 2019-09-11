var cuentaJugador = 0;

window.onload = function () {

   
    var modal = document.getElementById("myModal")
    var span =  document.getElementsByClassName("close")[0]
    
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    window.onclick = function(event) {
      if(event.target == modal) {
        modal.style.display = "none";
      }
    }
     
    var mazo = new paqueteCartas();
    var num_mazo = mazo.cantCartas;
    //console.log("numero de mazo" + num_mazo)
    document.getElementById("num").innerHTML = num_mazo;

    
    var btnDarCarta = document.getElementById('btnDarCarta');
    var btnDetener = document.getElementById('btnDetener');
    var btnRepartir = document.getElementById('btnRepartir');
   
    //var paquete = new paqueteCartas();
    var mesaJugador = new mesa('cartasJugador');
    var mesaContrincante = new mesa('cartasContrincante');

    //btnRepartir.onclick = function(){
    //  var paquete = new paqueteCartas();
    //  console.log(paquete.cantCartas);
    //}

    btnDarCarta.onclick = function () {
        var nuevaCarta = mazo.darCarta();
        var total_cartas = mazo.restarPaquete();

        var suma = mesaJugador.insertarCarta(nuevaCarta);
        document.getElementById('ptn-uno').innerHTML = suma;
        document.getElementById("num").innerHTML = total_cartas;
        //console.log(suma)
        if (suma > 21){
          //modal.style.display = "block"
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
