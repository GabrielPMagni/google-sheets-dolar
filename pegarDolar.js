/**
 * Retorna o valor do Dólar em Reais atual.
 * 
 * @customfunction
 */
function pegarDolar(){
  
  var folha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var celula = folha.getActiveCell();
  var formulaCelula = "=IMPORTXML(\"https://www.melhorcambio.com/dolar-hoje\"; \"//*[@id='comercial']/@value\")";
  celula.setNumberFormat("R$##0.00");
  var ultimaLinha = folha.getRange(folha.getLastRow()+1, folha.getLastColumn());
  ultimaLinha.setFontLine("line-through");
  return celula.setFormula(formulaCelula);
}
