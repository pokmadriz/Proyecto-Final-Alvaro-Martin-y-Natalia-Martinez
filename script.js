const adultos=document.getElementById("hamburguesa");
const ninos=document.getElementById("ensalada");
const ancianos=document.getElementById("pizza");

const total=document.getElementById("total");

const buyButton=document.getElementById("buyButton");


function calcularTotal(){
let precioAdulto=25;
let precioNino=12;
let precioAnciano=18;
let totalPrecio=

(adultos.value*precioAdulto)+
(ninos.value*precioNino)+
(ancianos.value*precioAnciano);


total.textContent="€"+totalPrecio;


if(totalPrecio>0){
buyButton.disabled=false;

}else{
buyButton.disabled=true;

}

}

adultos.addEventListener("input",calcularTotal);
ninos.addEventListener("input",calcularTotal);
ancianos.addEventListener("input",calcularTotal);
buyButton.addEventListener("click",()=>{

alert(
"Compra realizada correctamente.\nTotal: "+total.textContent
);

});