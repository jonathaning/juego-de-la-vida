//validaciones al presionar un botón se arroje un mensaje dependiendo de la acción del usuario

function validar(){

if(document.botones.tiempo.value==" "){
alert("Debes de escoger un tiempo para iniciar la simulacion ");return false;  }
else{
return true;
}
}










//marcar y desmarcar cada celula de la tabla(td)
var interfaz = $('#interfaz');
$('#interfaz').on('click','td',function(){
	$(this).toggleClass('caja');
});
//limpiar la tabla 

var interfaz = $('#interfaz');
$('#limpiar').on('click',function(){
	$interfaz.addClass('caja');
});

//inicialiciar las acciones del boton 
document.getElementById('iniciar').addEventListener('click', ciclo, false);
function ciclo(){
var td = document.getElementsByTagName('td'),
	 i = td.length;
	 while(i--){
	td[i].className ='caja';

}