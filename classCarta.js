function classCarta(num,sim){
  this.numero=num;
  this.simbolo=sim;
}

classCarta.prototype.darNumero = function(){
	return this.numero;
}

classCarta.prototype.dibujarCarta = function(){
	var nuevaCarta = document.createElement('div');
	nuevaCarta.className='carta';
	var posx = (this.numero-1)*-72;
	var posy = 0;
	if(this.simbolo=="trebol") posy=0;
	if(this.simbolo=="espadas") posy=96;
	if(this.simbolo=="corazones") posy=192;
	if(this.simbolo=="diamantes") posy=288;
	nuevaCarta.style.backgroundPosition=posx+'px '+posy+'px';
	return nuevaCarta;
}
classCarta.prototype.dibujarCartaEspecial = function(){
	var nuevaCarta = document.createElement('div');
	nuevaCarta.className='carta';
	var posx = (this.numero-1)*-72;
	var posy = 0;
	if(this.simbolo=="trebol") posy=0;
	if(this.simbolo=="espadas") posy=96;
	if(this.simbolo=="corazones") posy=192;
	if(this.simbolo=="diamantes") posy=288;
	nuevaCarta.style.backgroundPosition=posx+'px '+posy+'px';
	nuevaCarta.classList.add("oculta");
	return nuevaCarta;
}