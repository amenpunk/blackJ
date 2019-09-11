function paqueteCartas(){
  this.cantCartas = 52;
  this.tiposCartas = ["trebol","corazones","diamantes","espadas"];
}


paqueteCartas.prototype.darCarta = function(){
  var numeroCarta = Math.ceil(Math.random()*13);
  console.log(numeroCarta + "from paquete");
  var simboloCarta = Math.ceil(Math.random()*3);  
  var nuevaCarta = new classCarta(numeroCarta,this.tiposCartas[simboloCarta]);
  return nuevaCarta;
}