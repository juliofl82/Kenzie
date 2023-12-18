
// Desenvolva uma função com apenas um parâmetro. A função deve retornar o valor de caractere P se o parâmetro for positivo, e N se o parâmetro for zero ou negativo.

// function retornaNumero(a){
//     if(a > 0){
//         return "P";
//     } else {
//         return "N";
//     }
// }

// let a = 2
// let resultado = retornaNumero(a)

// console.log(resultado)




// Desenvolva uma função que informe a quantidade de dígitos de um determinado número inteiro informado por parâmetro.


// function contarDigitos(a){
//     return a .toString().length;
// }
// let a = 123456789
// let digitos = contarDigitos(a)
// console.log (digitos)





// Desenvolva uma função que some dois números passados por parâmetro. A soma só deve acontecer se o primeiro número passado por parâmetro for maior que o segundo.
// Caso contrário você deverá retornar a seguinte frase: "O primeiro número não é maior que o segundo."


// function soma(a, b) {
//     if(a > b){ 
//         return a + b;
//     } else {
//         return "O primeiro número não é maior que o segundo.";
//     }
// }

// let a = 10;
// let b = 05;
// let resultado = soma(a, b);
// console.log(resultado);



// Desenvolva uma função com 2 parâmetros. O primeiro deve se chamar palavra, e o segundo deve se chamar letra. Se a palavra passada no primeiro parâmetro começar com a letra passada como segundo parâmetro, retorne true. Se a palavra passada no primeiro parâmetro não começar com a letra passada no segundo parâmetro, retorne false.

// function conferencia(primeiraLetra, letra) {
//     if(primeiraLetra === letra){
//         console.log(true);
//         return true;
//     } else {
//         console.log(false)
//         return false;
//     }
// }

// let palavra = "aalso"
// let primeiraLetra = palavra[0]
// let letra = "a"
// conferencia(primeiraLetra, letra);



// function conferencia(primeiraLetra, letra) {
//     return primeiraLetra === letra;
// }

// let palavra = "axemplo";
// let primeiraLetra = palavra[0];
// let letra = "a";


// console.log(conferencia(primeiraLetra, letra));



// Desenvolva uma função com o parâmetro horaAtendimento para saber se o horário corresponde com o funcionamento do /pergunta. Se o horário de inicio for maior ou igual a 11 e menor ou igual a 23, retorne "O /pergunta está em horário de funcionamento." Caso contrário retorne "O /pergunta não está em horário de funcionamento."

// function atendimento(horaAtendimento) {
//     if (horaAtendimento >= 1100 && horaAtendimento <= 2300) {
//     return "O /pergunta está em horário de funcionamento.";
// }   else {
//     return  "O /pergunta não está em horário de funcionamento.";
//     }
// }

// let horaAtendimento = 2400
// let resultado = atendimento(horaAtendimento)

// console.log(resultado)
