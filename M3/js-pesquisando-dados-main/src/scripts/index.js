function procuraSobremesa(sobremesas, valorDoInput) {
  /* Desenvolva sua lógica a partir aqui */
  const resultados = sobremesas.filter((sobremesa) => sobremesa.nome.toLowerCase().includes(valorDoInput.toLowerCase()))
  return resultados; 
}
const resultado = procuraSobremesa(listaDeSobremesas, valorDoInput);
console.log(resultado);