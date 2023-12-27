/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/

const ingredientsList = document.getElementById('ingredients');
console.log(ingredientsList);

/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/

const titulo = document.querySelectorAll('h1');
console.log(titulo);

/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.   
*/

const recipeTeste = document.getElementsByClassName('recipe');
console.log(recipeTeste);

/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/

const h2Elements = document.getElementsByTagName('h2');
for (let i = 0; i < h2Elements.length; i++) {
  h2Elements[i].style.color = 'blue';
}


/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/

const inputElements = document.getElementsByTagName('input');
for (let i = 0; i < inputElements.length; i++) {
  inputElements[i].style.borderColor = 'red';
}