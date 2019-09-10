function mesa(id){
  this.idDiv=id;
  this.suma=0;
}

mesa.prototype.insertarCarta = function(objCarta){
	var areaCartasJugador = document.getElementById(this.idDiv);
	areaCartasJugador.appendChild(objCarta.dibujar());
	this.suma= this.suma + objCarta.darNumero();
	return this.suma;	
}
