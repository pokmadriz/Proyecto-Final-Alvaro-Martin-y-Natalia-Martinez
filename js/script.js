const adultos=document.getElementById("adultos");
const ninos=document.getElementById("ninos");
const ancianos=document.getElementById("ancianos");

const total=document.getElementById("total");

const buyButton=document.getElementById("buyButton");


function calcularTotal(){
let precioAdulto=25;
let precioNino=12;
let precioAnciano=18;
let totalPrecio=


(Number(adultos.value) * precioAdulto) +
(Number(ninos.value) * precioNino) +
(Number(ancianos.value) * precioAnciano);



total.textContent = "€" + totalPrecio.toFixed(2);


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