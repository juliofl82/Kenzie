// Desenvolva uma função chamada verticalText, que receberá uma string como parâmetro. A função deverá imprimir a palavra de forma vertical usando o console.log.

// function verticalText(texto) {

//     let resultado = '';
//     for (let i = 0; i <= texto.length; i++) {
//         resultado += texto[i] + '\n';
//     }
//     return resultado;
// }
// console.log(verticalText('Frontend'));



// Desenvolva uma função chamada incrementText, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando, começando somente pela primeira letra, depois a primeira e a segunda e assim sucessivamente conforme exemplo.

// function incrementText(texto) {

//     let resultado = '';
    
//     for (let i = 0; i <= texto.length -1; i++) {
//         resultado += texto.substring(0, i + 1) + '\n';
//     }
//     return resultado;
// }
// console.log(incrementText('Frontend'));


// Desenvolva uma função chamada incrementTextBackwards, que receberá uma string como parâmetro. A função deverá imprimir a palavra usando o console.log de forma que ela vai se incrementando ao contrário, começando somente pela última letra, depois a última e a penúltimo e assim sucessivamente conforme exemplo.

// function incrementTextBackwards(texto) {

//     let resultado = '';

//     for (let i = texto.length -1; i >= 0; i--) {
//         console.log(texto.substring(i));
//     }
    
// }
// console.log(incrementTextBackwards('Fullstack'));


// ​Desenvolva uma função chamada padEnd, que receberá três parâmetros: uma palavra (string), a quantidade de repetição do caractere (number) e o caractere de repetição (string).
// Sua função deverá retornar a string preenchida com o caractere de acordo com o comprimento passado por parâmetro.

// padEnd("Kenzie", 5, "foo");
// ⁠Retorna "Kenziefoofoofoofoofoo"

// padEnd("Kata", 8, "*");
// ⁠Retorna "Kata********"


// function padend(texto, numero, textoRepeticao) {

//     let repeticao = textoRepeticao.repeat(numero);
//     let retorno = texto + repeticao;

//     return retorno;
// }

// console.log(padend('Kenzie', 5, 'foo'));



// Desenvolva uma função chamada subString, que receberá três parâmetros: uma palavra (string), a posição inicial (number) e a posição final (number). Sua função deverá retornar a parte da string **entre** o início e o fim dos índices passados por parâmetro (não incluindo os caracteres dos próprios índices).
// ⁠ Retorna "ozi"
// padEnd("Mozilla", 0, 4);

// function subString(palavra, posicaoInicial, posicaoFinal) {

//     return palavra.substring(posicaoInicial + 1, posicaoFinal);
// }

// console.log(subString('Mozilla', 0, 4));


// Desenvolva uma função chamada stringRepeater, que receberá dois parâmetros: uma palavra ou frase (string) e a quantidade de repetição (number). Sua função deverá retornar uma nova string que contem o número especificado de cópias concatenadas da palavra passada por parâmetro.


// function stringRepeater(palavraFrase, quantidadeRepeticao) {

//     let retorno =  palavraFrase.repeat(quantidadeRepeticao);
//     return retorno;
// }

// console.log(stringRepeater('Because Im happy - ', 3));


// Desenvolva uma função chamada stringCentralizer, que receberá três parâmetros:​ uma palavra (string), a quantidade de repetição do elemento (number) e o elemento de repetição (string).
// Sua função deverá retornar uma nova string que contem a palavra passada por parâmetro centralizada entre os elementos de repetição com um espaço em branco nas laterais e a quantidade exata passada por parâmetro.

// function stringCentralizer(palavra, quantidadeRepeticao, elemento) {

//     let vezesRepeticao = elemento.repeat(quantidadeRepeticao);
//     let retorno = vezesRepeticao + palavra + vezesRepeticao;
//     console.log(retorno);

// }

// console.log(stringCentralizer(' java ', 5, '='));