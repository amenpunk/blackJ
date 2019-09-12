var cuentaJugador = 0;

window.onload = function () {
  
    var modal = document.getElementById("myModal")
    var span =  document.getElementsByClassName("close")[0]
    var oculto = 0;
    
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
  
    
    btnDetener.disabled = true;
    btnDetener.classList.add("noesta");
    
    btnDarCarta.disabled = true;
    btnDarCarta.classList.add("noesta");
    //var paquete = new paqueteCartas();
    var mesaJugador = new mesa('cartasJugador');
    var mesaContrincante = new mesa('cartasContrincante');
    
    function perdio(jugador){
        modal.style.display = "block"
        document.getElementById('loser').innerHTML = "Perdio el jugador "  + jugador;
        
    }
    
    function removeElementsByClass(className){
        var elements = document.getElementsByClassName(className);
        while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
      }
    }

    btnRepartir.onclick = function(){
      
      for(i=0;i<2;i++){

        var nuevaCarta = mazo.darCarta();
        var valora = mesaJugador.insertarCarta(nuevaCarta);
        var total_cartas = mazo.restarPaquete();
        document.getElementById('ptn-uno').innerHTML = valora;

      }

      var nuevaCarta = mazo.darCarta();
      var valorb = mesaContrincante.insertarCarta(nuevaCarta);
      document.getElementById('ptn-dos').innerHTML = valorb;
      total_cartas = mazo.restarPaquete();
      total_cartas = mazo.restarPaquete();
      document.getElementById("num").innerHTML = total_cartas;


      var nuevaCarta = mazo.darCartaEspecial();
      var valorc = mesaContrincante.insertarCartaEspecial(nuevaCarta);
      //document.getElementById('ptn-dos').innerHTML = valorb;
      //total_cartas = mazo.restarPaquete();

        btnRepartir.disabled = true;
        btnRepartir.classList.add("noesta");

        btnDarCarta.disabled = false;
        btnDetener.disabled = false;

        btnDarCarta.classList.remove("noesta");
        btnDetener.classList.remove("noesta");
    }

    btnDarCarta.onclick = function () {
      id = 1;
        var nuevaCarta = mazo.darCarta();
        var total_cartas = mazo.restarPaquete();

        var suma = mesaJugador.insertarCarta(nuevaCarta);
        document.getElementById('ptn-uno').innerHTML = suma;
        document.getElementById("num").innerHTML = total_cartas;
        if (suma > 21){
          perdio(id);
          document.getElementById('punteoJugador').innerHTML = 'PERDIO';
        }
        //padre = document.getElementById("cartasContrincante")
        //padre.parentNode.removeChild("toremove");
    }

    btnDetener.onclick = function () {
        id = 2;
        do {
            var nuevaCarta = mazo.darCarta();
            var total_cartas = mazo.restarPaquete();
            var suma = mesaContrincante.insertarCarta(nuevaCarta);
            if (suma > 21)
                document.getElementById('punteoContrincante').innerHTML = 'PERDIO';
                perdio(id);
        } while (suma < 21);
        document.getElementById('ptn-dos').innerHTML = suma;
        document.getElementById("num").innerHTML = total_cartas;

        removeElementsByClass("toremove")
    }
}


