// A função calculaIMC deve receber dois parâmetros, o peso em quilogramas e a altura em metros. É necessário retornar o índice de massa corporal do usuário.

// Dica: Fórmula para o cálculo é: IMC = peso / altura²


// function calculaIMC(peso, altura) {
//     let alturaAoQuadrado = altura * altura;
//     return imc = peso / alturaAoQuadrado;
//   }

//   let peso = 80
//   let altura = 1.80

//   console.log (calculaIMC(peso, altura));
  
  //Ao receber 80 para o peso e 1.80 para altura, a função deve retornar 24.691358024691358


//   A função calculaIdade deve receber três parâmetros: um nome, anoFuturo, que representa um ano no futuro e anoNascimento, que representa o ano de nascimento. O objetivo dessa função é calcular a idade futura de uma pessoa tendo como base o ano de nascimento e o ano futuro.

// function calculaIdade(nome, anoFuturo, anoNascimento) {
//     let idade = anoFuturo - anoNascimento;
//     return `Em ${anoFuturo} ${nome} terá ${idade} anos de idade`;
//   }

//   let nome = "Pedro"
//   let anoFuturo = "2030"
//   let anoNascimento = "2002"

//   console.log (calculaIdade(nome, anoFuturo, anoNascimento));
  
//   //Ao receber os parâmetros: ("Pedro", 2002, 2030) a função deve retornar "Em 2030 Pedro terá 28 anos de idade".


// A função algarismosEmUmNumero deve receber como parâmetro um número inteiro ou com parte decimal e deve retornar a quantidade de algarismos que compõem esse numero.

// Vale relembrar que ao realizarmos a conversão de um número para um texto, o ponto que divide a parte inteira da parte decimal é convertida junto, portanto, é necessário tratar caso o número apresente ponto flutuante.

// function algarismosEmUmNumero(n) {
//     let str = `${n}`;
//     str = str.replace(/[.,]/g, '');
//     let contagem = str.length;
//     return contagem;
  
//     }

//     let numero = 3.14159265
//     console.log(algarismosEmUmNumero(numero));
  
  //Ao receber 3.14159265 a função deve retornar 9.

//   A função diaDaSemana deve receber por parâmetro um valor em formato de número ou texto, e retornar em texto o dia da semana que ele representa, seguindo a lista abaixo:

// Domingo
// Segunda-feira
// Terça-feira
// Quarta-feira
// Quinta-feira
// Sexta-feira
// Sábado
// Caso o número recebido por parâmetro for inválido, você deve retornar o texto: 'Valor Inválido'

// function diaDaSemana(n) {
//     let resultado = "";
  
//     if (n == 1) {
//       resultado = 'Domingo';
//     } else if(n == 2 ) {
//       resultado = 'Segunda-feira';
//     } else if(n == '3') {
//       resultado = 'Terça-feira';
//     } else if(n == 4) {
//       resultado = 'Quarta-feira';
//     } else if(n == 5) {
//       resultado = 'Quinta-feira';
//     } else if(n == '6') {
//       resultado = 'Sexta-feira'; 
//     } else if(n == 7) {
//       resultado = 'Sábado';
//     } else if(n >= 8 || n <= 0) {
//       resultado = 'Valor Inválido';
//     }
  
//     return resultado;
//   }

//   let n = 0
//   console.log (diaDaSemana(n));
  
  //Ao receber '1' a função deve retornar 'Domingo'
  //Ao receber 3 a função deve retornar 'Terça-feira'
  //Ao receber 0 a função deve retornar 'Valor Inválido'