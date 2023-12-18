// function verificaNumero(num) {
//     let str = '';
    
//     if (num % 2 == 0) {  // true
//       str = 'par';
//     } else {
//       str = 'impar';
//     }
  
//     str += ', '; // "par, "
  
//     if (num > 0) {
//       str += 'positivo';
//     } else {
//       str += 'negativo';
//     }
  
//     str += ' e '; //par, negativo e 
  
//     if (num === parseInt(num)) {
//       str += 'não possui casas decimais'; // -12 === -12 => true
//     } else {
//       str += 'possui casas decimais';
//     }
  
//     str = 'O numero ' + num + ' é ' + str;
           
//     return str;
//   }
  
//   console.log(verificaNumero(-12));
//   alert (verificaNumero(-12)) ;


// let valor = 18;
// let result = valor / 2;
// console.log(result); // 9

// result = result / 3; // 9 = 9 / 3
// console.log(result); // 3

// let isPair = ( result == 3 );
// console.log(isPair);

// if (isPair) {
//   result = result * 6;
// } else {
//   result = result * 12;
// }

// console.log(result);


// function algarismosEmUmNumero(n){
//     let str = `${n}`;
//     let contagem = str.length;
//     console.log(contagem); // 8
  
//     if (n != parseInt(n)) {
//       console.log("Entrou aqui");
//       contagem = contagem - 1;
//     }
  
//     console.log(contagem);
  
//     return contagem;
//   }
//   algarismosEmUmNumero(3.141517);