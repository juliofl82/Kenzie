// Escreva uma função chamada renderUpToTwenty. Quando a função for chamada, os números de 0 a 20 devem ser impressos no console.
// Exemplo de
// chamada da função: renderUpToTwenty()
// saída: 0,1,2,3,4,5...20

// function renderUpToTwenty(){
//     for (let i = 0; i <=20; i++){
//         console.log (i);
//     }
// }

// renderUpToTwenty()




// Escreva uma função chamada tenInTenToAHundred(). Quando a função for chamada, os números de 10 a 100, contando de 10 em 10, devem ser impressos no console.
// Exemplo:
// Chamada da função: ⁠tenInTenToAHundred()
// Saída: 10,20,30,40,50... 100


// function tenInTenToAHundred(){
//     for (let i = 10; i <= 100; i += 10) {
//         console.log (i);
//     }

// }

// tenInTenToAHundred();



// Escreva uma função chamada oddUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem ímpares.
// Exemplo:
// Chamada da função: oddUpToTwenty()
// Saída: 1,3,5,7,9 ...19

// function oddUpToTwenty() {
//     for (let i = 1; i <= 20; i++){
//         if (i % 2 !== 0) {
//             console.log (i);
//         }
//     }
// }
     

// oddUpToTwenty();



// Escreva uma função chamada evenUpToTwenty(). Quando a função for chamada, apresente no console os valores entre 0 e 20 que forem pares.
// Exemplo:
// Chamada da função: evenUpToTwenty()
// Saída: 0,2,4,6,8 ...20

// function evenUpToTwenty() {
//     for (let i = 0; i <= 20; i++){
//         if (i % 2 === 0) {
//             console.log (i);
//         }
//     }
// }

// evenUpToTwenty()

// Escreva uma função chamada fromNegativeToPositive(). Quando a função for chamada, apresente os valores de -10 a 0.
// Exemplo:
// Chamada da função: fromNegativeToPositive()
// Saída: -10,-9,-8,-7 ...0

// function fromNegativeToPositive() {
//     for (let i = -10; i <= 0; i++){
//         console.log (i)
//     }
// }
// fromNegativeToPositive()



// Escreva uma função chamada inDescendingDirection. Quando a função for chamada, apresente valores de 10 a 0 no console.
// Exemplo:
// Chamada da função: inDescendingDirection()
// Saída: 10,9,8,7...0

// function inDescendingDirection() {
//     for (let i = 10; i >= 0; i--) {
//         console.log (i);
//     }      
    
// }
// inDescendingDirection()


// Escreva uma função chamada toSquare(). Quando a função for chamada, apresente o quadrado dos valores da sequência de 1 a 10.
// Exemplo:
// Chamada da função: toSquare()
// Saída: 1,4,9,16...100

// function toSquare() {
//     for (let numero = 1; numero <= 10; numero++){
//         console.log (numero * numero);
//     }
// }

// toSquare()


// Escreva uma função que apresente como resultado os quadrados dos números inteiros existentes na faixa de valores de 15 a 200.
// Exemplo:
// chamada da função: nome_da_sua_funcao()
// Saída: 225, 256, 289 ...40000

// function quadradoNumerosInteiros() {
//     for (let numero = 15; numero <= 200; numero++){
//         console.log (numero * numero);
//     }
// }

// quadradoNumerosInteiros()


// Escreva uma função que apresente a soma dos cem primeiros números naturais.
// (1+2+3+...+98+99+100).
// Exemplo:
// chamada da função: nome_da_sua_funcao()
// Saída: 5.050

// function somaNumerosNaturais() {
//     let soma = 0;
//     for (let numero = 1; numero <=100; numero++ ) {
//         soma += numero; 
//     }
//     console.log(soma);
// }

// somaNumerosNaturais()

// Escreva uma função que apresente todos os valores numéricos menores que 200 que são divisíveis por 4.
// Exemplo:
// chamada da função: nome_da_sua_funcao()
// Saída: 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ...196


// function divisivelPorQuatro() {
//     for (let numero = 0; numero <= 196; numero++){
//         if (numero %4 === 0) {
//             console.log (numero);
//         }
//     }
// }

// divisivelPorQuatro()




// Escreva uma função que calcule o resultado da soma e da média aritmética dos valores pares situados na faixa numérica de 50 até 70.
// soma = 50+52+54...+70
// média_aritmética = soma / qtd_numeros_pares_no_intervalo⁠⁠ Exemplo:
// chamada da função: funcao_o_nome_da_sua_funcao()
// Saída: A soma é 660 e a média é 60.


// function resultadoSomaPares() {
//     let soma = 0;
//     let contadorPares = 0
//     for (let numero = 50; numero <= 70; numero++) { 
//         if (numero %2 === 0) {
//            soma += numero;
//            contadorPares++;
//         }
//     }
//     let media = soma / contadorPares;
//     console.log(`A soma é ${soma} e a média é ${media}`);

// }

// resultadoSomaPares()




// Escrever uma função chamada fibonacciNumbers(). A função quando chamada deve apresentar os valores da sequência numérica de Fibonacci até o décimo quinto termo.
// A sequência de Fibonacci é formada por:
// ⁠O, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, ... etc.
// Obtendo-se o termo seguinte a partir da soma do termo atual com o termo anterior, e assim sucessivamente.
// Utilize para este exercício as variáveis
// ATUAL -> Representa o valor atual do contador do laço.
// ANTERIOR -> Representa o valor anterior do contador.
// PRÓXIMO -> Representa o valor seguinte do contador.

// function fibonacciNumbers() {
//     let atual = 1;
//     let anterior = 0; 
//     let proximo;

//     console.log(anterior);
//     console.log(atual);

//     for (let repeticao = 2; repeticao < 15; repeticao++){
//         proximo = anterior + atual;
//         console.log(proximo);

//         anterior = atual;
//         atual = proximo;
//     }

// }

// fibonacciNumbers()




// Escrever um programa que calcule e apresente o somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra:
// Colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior.
// Ou seja, no primeiro quadro coloca-se um grão, no segundo quadro colocam-se dois grãos (neste momento, tem-se três grãos), no terceiro quadro colocam-se quatro grãos (tendo neste momento sete grãos), no quarto quadro colocam-se oito grãos (tendo-se então 15 grãos) até o limite de casas que é 64. A quantidade de grãos adicionados é sempre o dobro da quantidade anterior.
// Resultado esperado: 18.446.744.073.709.552.000 grãos no tabuleiro

// function graosDeTrigo(){
//     let totalGraos = 0;
//     let graosNaCasaAtual = 1;

//     for (let casa = 1; casa <= 64; casa++) {
//         totalGraos += graosNaCasaAtual;
//         graosNaCasaAtual *= 2;
//     }
//     return totalGraos;
// }
// let resultado = graosDeTrigo();
// console.log(resultado);

// graosDeTrigo()