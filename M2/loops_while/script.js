
// Faça um programa que peça um valor entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

// function escolhaNumero() {
//     let escolha = parseInt(prompt('Digite um numero de 0 a 10.'));
//     while (escolha < 0 || escolha > 10) {
//         escolha = parseInt(prompt('O número escolhido é inválido. Escolha um número válido entre 0 e 10.'));
//     }
//     console.log('Numero escolhido é: ' + escolha);
// }

// escolhaNumero()


// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.


// function confirmacaoDeSenha() {
//     let nome = prompt('Digite um nome de usuário.');
//     let senha = prompt('Digite sua senha de acesso.');
//     while (nome === senha) {
//         senha = prompt('A senha não pode ser igual ao nome do usuário. Digite novamente a senha.');
//     }
//     console.log (`O nome de usuário é  ${nome}  e a senha é   ${senha}`);
// }
// confirmacaoDeSenha()



// Faça um programa que enquanto a entrada for números inteiros positivos, menores que 10, continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média.

// function somandoNumerosPositivos() {

//     let soma = 0;
//     let contador = 0;

//     while (true) {
//         let numero = parseInt(prompt('Digite um numero inteiro positivo menor que 10.'));
//         if (numero < 0 || numero > 10){
//             break;
//         }
//         soma += numero;
//         contador++;
//     }

//     let media = contador > 0 ? soma / contador: 0;
//     alert(`A soma dos números inteiros é ${soma} e a média é ${media}`)

// }

// somandoNumerosPositivos()




// Faça um programa que registre votos. Em uma eleição para o grêmio estudantil existem apenas 3 candidatos, o candidato a, o candidato b e o candidato c.
// Solicite ao usuário que entre com a letra correspondente a um candidato e incremente em +1 o número de votos para o candidato. ⁠Caso o usuário entre com um valor que não seja correspondente a um candidato, alerte: "Candidato não encontrado".
// Ao final de cada votação alerte a mensagem: "Voto registrado com sucesso".
// Para encerrar a votação é necessário que entre com uma flag (variável de controle) de parada: use o x para isso.
// Quando o valor x for inserido alerte o número de votos que cada candidato teve.

// function votacao() {

//     let A = 0;
//     let B = 0;
//     let C = 0;


//     while (true) {
//         let voto = prompt('Vote para o candidato A, B ou C. Digite X para sair.')
//         if (voto === "A" || voto === "a") {
//             A++;
//         } else if (voto === "B" || voto === "b") {
//             B++;
//         } else if (voto === "C" || voto === "c") {
//             C++;
//         } else if (voto === "X" || voto === "x") {
//             alert('Votação finalizada');
//             break;
//         } else {
//             alert('Voto inválido. Digite A, B ou C');
//             continue;
//         }
//         alert('Voto registrado com sucesso.')
//     }

//     console.log(`Votos para A = ${A}`);
//     console.log(`Votos para B = ${B}`);
//     console.log(`Votos para C = ${C}`);
// }

// votacao()


