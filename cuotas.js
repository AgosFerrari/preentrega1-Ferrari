alert("Tu calculador de cuotas");

//funcion

function calcularMontoEnCuotas(valorTotal, cantidadDeCuotas, descuento){

const descuentoAplicado = (valorTotal * descuento) / 100;
const valorConDesc = valorTotal - descuentoAplicado;

const valorDeCadaCuota = valorConDesc / cantidadDeCuotas;

return valorDeCadaCuota;
}

//valores pedidos al cliente
let valorTotal = parseInt(prompt("Ingrese el valor total del producto que desea comprar"));
let cantidadDeCuotas = parseInt(prompt("Ingrese la cantidad de cuotas que prefiere"));
let descuento = parseInt(prompt("¿Tenes un descuento? Ingresa el porcentaje"));


//calculo
const valorDeCadaCuota = calcularMontoEnCuotas(valorTotal, cantidadDeCuotas, descuento);

// resultado
if (valorTotal < 1 || cantidadDeCuotas < 1 || descuento < 0){
    alert("Valores inválidos");
} else{
    alert(`Deberás pagar ${cantidadDeCuotas} cuotas de $ ${valorDeCadaCuota}`);
}