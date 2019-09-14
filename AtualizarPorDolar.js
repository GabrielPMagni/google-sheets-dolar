/**
 * Retorna um novo valor com base na taxa de dólar.
 *
 * @param {number} entre com o valor base.
 * @param {number} entre com o valor do dólar
 * @return {number} valor em dólar.
 * @customfunction
 */
function AtualizarPorDolar(valor, dolar) {
  if(valor == NaN || dolar == NaN){
    return 0;
  } else {
    return valor / dolar;
  }
}
