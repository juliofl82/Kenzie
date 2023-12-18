// const listaDeElementos = [1,5,7,9,3, "10", "11", "15"]

// Escreva uma função chamada retornaTodosElementos que não recebe nenhum parâmetro. Sempre que chamada, a função deverá alertar a lista listaDeElementos em tela.

// function retornaTodosElementos() {
//     alert(listaDeElementos);
// }

// retornaTodosElementos()


// Escreva uma função chamada retornaValorEpecifico. A função deve receber um valor inteiro como parâmetro. Use o valor recebido para acessar a posição na lista e retorne o valor contido na posição.
// Desta forma:
// ⁠"O valor contido nesta posição é: x".

// let listaDeElementos = [1,5,7,9,3, "10", "11", "15"]

// function retornaValorEspecificodaLista(item) {

//     if (Number.isInteger(item)) {
//         if (item >= 0 && item < listaDeElementos.length - 1) {
//             return 'O valor contido nesta posiçaõ é: ' + listaDeElementos[item];
//         } else {
//             return 'Indice fora do intervalo do array.';
//         }
//     } else {
//         return 'O valor fornecido nao é um numero inteiro.'
//     }
// }


// console.log(retornaValorEspecificodaLista(2)); 
// console.log(retornaValorEspecificodaLista("3")); 
// console.log(retornaValorEspecificodaLista(30));



// Escreva uma função chamada retornarTipoElemento. A função deve receber um valor inteiro como parâmetro.
// Use o valor recebido para acessar a posição na lista. Alerte qual o tipo do elemento contido na posição (use o typeof para isso).
// Se for do tipo texto alerte: "O elemento x é um elemento do tipo texto",
// Se for número alerte: "O elemento x é um elemento do tipo número"

// const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"]

// function retornarTipoElemento(item) {

//     if (Number.isInteger(item)) {
//         if (item >= 0 && item < listaDeElementos.length) {
//             let elemento = listaDeElementos[item];
//             let tipo = typeof elemento;
//             return 'O elemento ' + elemento + ' é do tipo ' + tipo + ' e está na posição ' + item 
//         } else {
//             return 'Fora do indice do array';
//         }
//     } else {
//         return 'Numero fornecido precisa ser inteiro.';
//     }
// }

// console.log(retornarTipoElemento(2));
// console.log(retornarTipoElemento(5));
// console.log(retornarTipoElemento(-1));
// console.log(retornarTipoElemento('3'));


// Escreva uma função removeUltimoElementoString. A função não recebe parâmetros.
// Quando chamada, a função deverá remover o último elemento da lista, mas somente se for uma string.
// Caso a remoção seja realizada, retorne: "Elemento deletado com sucesso".
// Caso contrário: "Falha ao remover o elemento da lista".

// const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"]


// function removeUltimoElementoString() {

//     let ultimoElemento = listaDeElementos[listaDeElementos.length - 1]

//     if (typeof ultimoElemento === 'string') {
//         let elementoRemovido = listaDeElementos.pop();
//         return 'Elemento deletado com sucesso ' + elementoRemovido;
//     } else {
//         return 'Falha ao remover o elemento da lista.'
//     }
// }

// console.log(listaDeElementos.length);
// console.log(removeUltimoElementoString());
// console.log(listaDeElementos.length);


// Escreva uma função chamada consultaPosição. A função deve receber um valor como parâmetro. Identifique na lista qual a posição do elemento.
// Caso consiga identificar o elemento na lista: "O valor procurado está na posição: x ".
// ⁠Caso não: "Valor não encontrado".

// const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"]

// function consultaPosição(array, valor){
//     let posicao = array.indexOf(valor);

//     if(posicao !== -1) {
//         return 'O valor procurado está na posição ' + posicao ;
//     } else {
//         return 'valor não encontrado';
//     }
// }

// console.log(consultaPosição(listaDeElementos, 5))


// Escreva uma função chamada removerElementoEspecifico. A função deve receber um valor como parâmetro.
// O valor recebido representa o elemento a ser deletado. ⁠Busque a posição do elemento na lista (use o indexOf()). Use a posição encontrada para realizar a remoção.
// Caso a remoção seja realizada, retorne: "Elemento x deletado com sucesso".
// Caso contrário, retorne: "Elemento não encontrado".

// const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"]

// function removerElementoEspecifico(array, valor) {
//     let indice = array.indexOf(valor);
    
//     if (indice !== -1) {

//         listaDeElementos.splice(indice, 1);
//         return 'Elemento ' + valor + ' deletado com sucesso da posição' + array;
//     } else {
//         return 'Elemento não encontrado.'
//     }
// }
// console.log(listaDeElementos);
// console.log(removerElementoEspecifico(listaDeElementos, 10));
// console.log(listaDeElementos);


// Escreva uma função chamada inserirNaPosicaoCorreta. A função pode receber um valor de 0 a 10 ou uma string.
// Caso o valor recebido seja do tipo número, a função deve conseguir inserir o elemento na primeira posição da lista, caso seja um texto a inserção deve ser feita na última posição.

// // Retorne: "Lista atualizada com sucesso"

// const listaDeElementos = [1, 5, 7, 9, 3, "10", "11", "15"]

// function inserirNaPosicaoCorreta(valor) {
        
//     if(typeof valor === 'string') {
//         listaDeElementos.push(valor);        
//     } else {
//         listaDeElementos.unshift(valor);
//     }
//     return 'Lista atualizada com sucesso';
// }
// console.log(listaDeElementos);
// console.log(inserirNaPosicaoCorreta(2));
// console.log(inserirNaPosicaoCorreta("J"));
// console.log(listaDeElementos);
