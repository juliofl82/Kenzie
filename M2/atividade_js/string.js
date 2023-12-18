
// Crie um programa que concatene dois nomes e retorne uma frase de saudação.
// Entrada: nome1 = "João", nome2 = "Silva" Saída: "Olá João Silva!"

const nome1 = "João";
const nome2 = 'Silva';
const mensagem = `Olá ${nome1} ${nome2} !`;
console.log (mensagem);


// Crie um programa que adicione uma string ao final de outra string e retorne a string resultante.
// Entrada: string1 = "hello", string2 = "world" Saída: "helloworld"

let string1 = 'hello';
let string2 = 'world';
const saida = string1.concat(' ',string2);
console.log(saida)



// Crie um programa que receba uma string em formato de número decimal e retorne o número inteiro equivalente.
// Entrada: "12.5" Saída: 12

let entrada = 12.5
const saida1 = parseInt(entrada)
console.log(saida1)



// Crie um programa que converta uma string em formato de número inteiro para um número inteiro.
// Entrada: "12" Saída: 12

let entrada1 = '12'
// let saida2 = 12
const resultado = parseFloat(entrada1)
console.log(typeof resultado)
console.log(resultado)



// Crie um programa que converta duas strings em formato de número inteiro para um número inteiro, faça uma soma desses números e apresente o resultado
// Entrada 1: "12" Entrada 2: "3" Saída: 15

let entrada2 = '12';
let entrada3 = '3';
let resultado4 = parseInt(entrada2) + parseInt(entrada3);
console.log(resultado4)