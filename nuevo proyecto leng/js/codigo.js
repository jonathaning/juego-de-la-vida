
$('#interfaz').on('click','td',function(){
	$(this).toggleClass('caja');
});

//window onload para poder recargar el evento onclick desde un archivo externo sin ponerlo directamente en el archivo html y tendremos q llamar a una funcion anonima tambien


window.onload=function validarjuego(){

document.getElementById("iniciar").onclick= function() {
var finita=document.getElementById('finita').value;
var tiempo =document.getElementById("tiempo").value;
var celulasvivas=document.getElementById("celulasvivas").value;
var celulasmuertas=document.getElementById("celulasmuertas").value;

//tarea del campo tiempo
if(tiempo=="") {
alert(
'Debes introducir un tiempo');
return  ;
}
if(tiempo<300 || tiempo>5000)
{
alert('Debes introducir un tiempo comprendido entre 300 y 5000 mls');
return;
}

//tarea del campo de generaciones de ciclo finito
if(finita=="") {
alert(
'Debes introducir una cantidad de generaciones finita');
return  ;
}
if(finita<100 || tiempo>10000)
{
alert('Debes introducir una cantidad de generaciones finita comprendida entre 100 y 10000 generaciones');
return;
}


//tarea del campo celulas vivas

if(celulasvivas==""){
alert("Debes seleccionar un color para celulas vivas");
return;
}

//tarea del campo celulas muertas

if(celulasmuertas==""){
alert("Debes seleccionar un color para celulas muertas");

}
 
else{
alert('Iniciando simulacion');
return true;
}
}
}





function elegido() {

var celda=document.getElementsByTagName("td");
celda.onclick=function(){
var celda=document.interfaz.celda;
for(x=0;x<celda.length;x++);{
if(celda[x].cheked) {
alerta(celda[x].value);
}}
}}

function color(){

var color=documentos.getElementById("colores");
colores.onclick=function(){
colores=elegido();}}


//funcion pausar(){

//document.getElementByClassName("pausar").onclick= alert('haz pinchado pausar')}

