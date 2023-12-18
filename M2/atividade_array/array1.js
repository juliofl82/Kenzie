// Escreva uma função que recebe um valor do tipo string e com no mínimo 5 caracteres. Insira o valor recebido em um array e retorne o array gerado.

// function addStringToArray(String) {

//     let arr = [];
//     if (String.length >= 5) {
//         arr.push(String);
//     } else { return 'Nome inválido!' };

//     return arr;
// }

// console.log(addStringToArray('ana'));


// Escreva uma função que recebe um valor do tipo number. Use o valor recebido para acessar uma posição do seguinte array:
// let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]
// Caso a posição exista, retorne o nome que se encontra nela. ⁠Caso não seja acessado nenhuma posição com o valor recebido, ⁠alerte: "Valor não encontrado".⁠


// function returnNumberFromArray(num) {
//     let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]

//     if(num >= 0 && num < arr.length) {
//         return arr[num];
//     } 
//     return 'Valor não encontrado.';
// }

// console.log(returnNumberFromArray(2));


// Crie um array de números, contendo os valores de 1 a 10. Crie uma função que recebe um número inteiro.
// Acesse a posição do array de números usando o valor recebido. Teste se o valor contido na posição é par ou ímpar.
// Caso seja par retorne: "O valor encontrado nesta posição é par",
// Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar".


// function verifyParImpar(num) {
//     let numbers = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 10];

//     if (numbers [num] % 2 === 0 ) {
//         return 'O valor encontrado nesta posição é par. '
//     }   
//         return 'O valor encontrado nesta posição é ímpar.'

// }
//     console.log(verifyParImpar(7));


// Dado o array de nomes:
// ⁠let nomes = ["Pedro", "Rafael", "José"]
// Crie uma função que recebe a lista de nomes como parâmetro. A função deve verificar qual dos nomes da lista tem a maior quantidade de caracteres e retornar o nome.
// Teste cada posição usando estrutura de repetição, a menos que a lista tenha apenas um valor inserido.
// Use este formato: "O nome x é o maior da lista";


// ⁠let nomes = ["Pedro", "Rafael", "José"]

// let nomes = ["Pedro", "Rafael", "José"];

// function findLogestName(names) {
//     if(names.length === 1) {
//         return names [0];
//     }

//     let longestName = names[0]

//     for(let i = 1; i < names.length; i++){
//         if(names [i].length > longestName.length){
//             longestName = names[i];
//         }
//     }

//     return "O nome " + longestName + " é o maior da lista.";

// }

// console.log(findLogestName(nomes));


// Escreva uma função que recebe a lista de números como parâmetro. A função deve realizar a soma dos valores das duas últimas posições da lista e armazenar o valor da soma em uma variável.
// Use a variável para testar se o valor da soma é um múltiplo de 2.
// Se sim, retorne: "A soma é um múltiplo de 2".
// Caso contrário: "A soma não é um múltiplo de 2"
// Dado o array de números como exemplo:
// ⁠numeros = [1,4,6,9,11,8]

// let numeros = [1, 1, 4, 6, 9, 11, 8, 8];

// function sumMultipleOfTwo(numbers) {

//     let lastNumber = numbers[numbers.length - 1];
//     let secondToLastNumber = numbers[numbers.length - 2];
//     let sumOfNumber = lastNumber + secondToLastNumber;

//     if (sumOfNumber % 2 === 0) {
//         return 'A soma é um múltiplo de 2.';
//     } else {
//         return 'A soma não é um multiplo de 2';
//     }
// }

// console.log(sumMultipleOfTwo(numeros))




// Dado o array de nomes como exemplo:
// ⁠let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]
// Escreva uma função que recebe como parâmetros a lista de nomes, um nome (string) e um valor inteiro (number) para representar a posição.
// Acesse a lista na posição que corresponde ao valor inteiro recebido e armazene o valor contido na posição em uma variável.
// Teste se o nome recebido pela função como parâmetro é o mesmo que o armazenado na variável.
// Lembre-se de normalizar os dados antes de testar.
// Caso os valores sejam iguais, retorne: "Acertei".
// Caso não sejam, retorne: "Não é quem eu pensava"

// let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]

// function checkNameAtPosition(names, nameToCheck, position) {

//     if(position < 0 || position >= names.length) {
//         return 'Posição inválida.';
//     }

//     let normalizedStoredName = names[position].toLowerCase();
//     let normalizedGivenName = nameToCheck.toLowerCase();

//     if(normalizedStoredName === normalizedGivenName) {
//         return 'Acertei';
//     } else {
//         return 'Não é quem eu pensava'
//     }
// }

// console.log(checkNameAtPosition(nomes, 'Carla', 7));



// Dado dois arrays numéricos como exemplo.
// ⁠let numeros = [1,2,3,4,5,6,10,7]
// ⁠let outrosNumeros = [5,7,9,4,2,3,9]
// Escreva uma função que recebe as duas listas de números como parâmetro. A função deve conseguir identificar qual dos dois arrays é o maior.
// Após identificar o maior array, retorne o último elemento do array.
// Use este formato: "A maior lista é a lista cujo último número é: x"


// let numeros = [1,2,3,4,5,6,10,7]
// let outrosNumeros = [5,7,9,4,2,3,9]

// function arrLength(arr1, arr2) {
//     let largerArray;
//     let lastElement;

//     if(arr1.length >= arr2.length) {
//         largerArray = arr1;
//     } else {
//         largerArray = arr2;
//     }

//     lastElement = largerArray[largerArray.length - 1];

//     return 'A maior lista é a lista cujo último número é: ' + lastElement;
// }

// console.log(arrLength(numeros, outrosNumeros));
