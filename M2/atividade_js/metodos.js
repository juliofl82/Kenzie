
// Crie uma função que recebe três parâmetros: uma frase, uma palavra antiga e uma palavra nova. A função deve buscar por todas as ocorrências da palavra antiga na frase e substituí-las pela palavra nova. Então, a função deve retornar a nova frase com o resultado da substituição. 

// function atualizacao(frase, antiga, nova){
//     return frase.replace(antiga, nova);    

// }

// const frase = 'Vamos utilizar a frase antiga';
// const antiga = 'antiga';
// const nova = 'nova';

// console.log(atualizacao(frase, antiga, nova));






// Escreva uma função em JavaScript que recebe três parâmetros numéricos: nota1, nota2 e nota3, que representam as notas de um aluno em três avaliações. A função deve calcular a média aritmética das notas e arredondar o resultado para uma casa decimal.
// A função deve retornar a média arredondada em uma mensagem no seguinte formato: "A média do aluno é <media>."

// function media(nota1, nota2, nota3){
//     let resultado = (nota1 + nota2 + nota3) / 3;
//     return resultado.toFixed(2);
// }

// const nota1 = 8.3888
// const nota2 = 8.3888
// const nota3 = 8.3888

// console.log('A média do aluno é ' + media(nota1, nota2, nota3));





// Escreva uma função em JavaScript que recebe dois parâmetros numéricos: valorUnitario e quantidade, que representam o valor unitário de um produto e a quantidade comprada, respectivamente. A função deve calcular o valor total da compra, aplicando um desconto progressivo no valor unitário e formatando o resultado com duas casas decimais.

// O desconto será aplicado de acordo com a quantidade comprada:

// 10% de desconto se a quantidade comprada for maior ou igual a 5;
// 20% de desconto se a quantidade comprada for maior ou igual a 10.
// Em seguida, a função deve substituir o ponto por vírgula na string do valor total, e deve retornar uma mensagem no seguinte formato: "O valor total da compra é R$ <valorTotal>."

// function totalCompra(valorUnitario, quantidade){
//     let valorCompra = valorUnitario * quantidade;
//     return valorCompra;
// }   

// function calcularDesconto(quantidade){
//     if(quantidade >= 10){
//         return .20
//     } else if(quantidade >= 5){
//         return .10
//     } else {
//         return 0
//     }
    
// }

// const valorUnitario = 10.00;
// const quantidade = 7;
// let valorCompra = totalCompra(valorUnitario, quantidade);
// let desconto = calcularDesconto(quantidade);
// let valorFinal = valorCompra - (valorCompra * desconto);
// valorFinal = valorFinal.toFixed(2)


// console.log ('O valor total da compra é R$' + valorFinal + ' e o desconto foi de ' + desconto);

    