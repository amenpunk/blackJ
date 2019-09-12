function mesa(id){
  this.idDiv=id;
  this.suma=0;
}

mesa.prototype.insertarCarta = function(objCarta){
	var areaCartasJugador = document.getElementById(this.idDiv);
	areaCartasJugador.appendChild(objCarta.dibujarCarta());
	this.suma= this.suma + objCarta.darNumero();
	return this.suma;	
}

mesa.prototype.insertarCartaEspecial = function(objCarta){
	var areaCartasJugador = document.getElementById(this.idDiv);
	areaCartasJugador.appendChild(objCarta.dibujarCartaEspecial());
	this.suma= this.suma + objCarta.darNumero();
	return this.suma;
}