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
    document.getElementById("num").innerHTML = num_mazo;

    
    var btnDarCarta = document.getElementById('btnDarCarta');
    var btnDetener = document.getElementById('btnDetener');
    var btnRepartir = document.getElementById('btnRepartir');
   
    //var paquete = new paqueteCartas();
    var mesaJugador = new mesa('cartasJugador');
    var mesaContrincante = new mesa('cartasContrincante');

    btnRepartir.onclick = function(){
      
      for(i=0;i<2;i++){

        var nuevaCarta = mazo.darCarta();
        var valora = mesaJugador.insertarCarta(nuevaCarta);
        var total_cartas = mazo.restarPaquete();
        document.getElementById('ptn-uno').innerHTML = valora;
        

        var nuevaCarta = mazo.darCarta();
        var valorb = mesaContrincante.insertarCarta(nuevaCarta);
        document.getElementById('ptn-dos').innerHTML = valorb;
        total_cartas = mazo.restarPaquete();
        document.getElementById("num").innerHTML = total_cartas;
      }
    }

    btnDarCarta.onclick = function () {
        var nuevaCarta = mazo.darCarta();
        var total_cartas = mazo.restarPaquete();

        var suma = mesaJugador.insertarCarta(nuevaCarta);
        document.getElementById('ptn-uno').innerHTML = suma;
        document.getElementById("num").innerHTML = total_cartas;
        if (suma > 21){
          //modal.style.display = "block"
        document.getElementById('punteoJugador').innerHTML = 'PERDIO';
        }
    }

    btnDetener.onclick = function () {
      
        do {
            var nuevaCarta = mazo.darCarta();
            var total_cartas = mazo.restarPaquete();
            var suma = mesaContrincante.insertarCarta(nuevaCarta);
            if (suma > 21)
                document.getElementById('punteoContrincante').innerHTML = 'PERDIO';
        } while (suma < 21);
        document.getElementById('ptn-dos').innerHTML = suma;
        document.getElementById("num").innerHTML = total_cartas;

    }
}
