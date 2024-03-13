//Desenvolva sua lógica aqui utlizando o método de array reduce e verifique o resultado no console do seu navegador.

//1) Vamos começar de uma maneira bem simples. Crie uma função que some todos os números contidos dentro do array [20, 13, 50, 36, 97].
const numbers = [20, 13, 50, 36, 97];

function sumNumbers(array) {
  return array.reduce((accumulator, valorAtual) => accumulator + valorAtual, 0);
}
console.log(sumNumbers(numbers));

//2) Agora utilizaremos o nosso array de produtos. Crie uma função que percorra todos os elementos desse array e retorne o valor total de todos os produtos do carrinho.
function totalProducts(array) {
  return array.reduce((accumulator, product) => accumulator + product.price, 0);
}
console.log(totalProducts(products));

//3) Vamos deixar mais interessante? Utilizando o nosso array products, crie uma função que filtre apenas os produtos com tamanho GG e retorne a soma dos preços desses produtos.
function totalProductsSize(array) {
  const produtosGG = array.filter(product => product.size ==="GG");
  const total = produtosGG.reduce((accumulator, product) => accumulator + product.price, 0);
  return total;
}
console.log(totalProductsSize(products));

//DESAFIO
//4) Crie uma função que filtre os elementos em promoção e aplique 50% de desconto no preço deles. Após isso, some o valor total desses produtos.
function totalProductsSale(array) {
  const onSale = array.filter(product => product.sale === true);
  const total = onSale.reduce((accumulator, product) => accumulator + (product.price * 0.5), 0);
  // const final = (total * 0.5);
  return total;
}
console.log(totalProductsSale(products));