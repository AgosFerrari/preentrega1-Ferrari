alert("Tu calculador de cuotas");

//funcion

function calcularMontoEnCuotas(valorTotal, cantidadDeCuotas, descuento){

const descuentoAplicado = (valorTotal * descuento) / 100;
const valorConDesc = valorTotal - descuentoAplicado;

const valorDeCadaCuota = valorConDesc / cantidadDeCuotas;

return valorDeCadaCuota;
}

//valores pedidos al cliente
let valorTotal = parseInt(prompt("Ingresá el valor total del producto que deseás comprar"));
let cantidadDeCuotas = parseInt(prompt("Ingresá la cantidad de cuotas que preferís"));
let descuento = parseInt(prompt("¿Tenés un descuento? Ingresá el porcentaje"));


//calculo
const valorDeCadaCuota = calcularMontoEnCuotas(valorTotal, cantidadDeCuotas, descuento);

// resultado
if (valorTotal < 1 || cantidadDeCuotas < 1 || descuento < 0){
    alert("Valores inválidos");
} else{
    alert(`Deberás pagar ${cantidadDeCuotas} cuotas de $ ${valorDeCadaCuota}`);
}