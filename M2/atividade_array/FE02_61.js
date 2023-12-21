// Escreva uma função que receba uma lista a de dimensão 30 composta apenas por números inteiros. A função deve retornar a quantidade de valores pares e ímpares existentes na lista recebida.

const lista = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
];

let listaA = lista[0];
let listaB = lista[1];



function listaAParImpar() {

    let listaAPar = [];
        listaAImpar = [];

    for (i = 0; i < listaA.length; i++) {
        if (listaA[i] % 2 === 0) {
            listaAPar.push(listaA[i]);
        }
        else {
            listaAImpar.push(listaA[i]);
        }
    }
    console.log('Exercicio 1 - Numeros pares ' + listaAPar.length + ' e ' + listaAImpar.length + ' numeros impares.');    
}
listaAParImpar()

function listaBResultados() {

    let listaBSomaImpar = (0);
    let listaBSomaTotal = (0);

    for (let i = 0; i < listaB.length; i++) {
        if (listaB[i] % 2 !== 0) {
            listaBSomaImpar += listaB[i];
        }
        listaBSomaTotal += listaB[i];
    }
    let percentual = (listaBSomaImpar / listaBSomaTotal * 100).toFixed(2);
    percentual = parseFloat(percentual);

    console.log('Exercicio 2 - O total de valores impares é ' + listaBSomaImpar + ' e corresponte a ' + percentual + '% do valor total de ' + listaBSomaTotal + ' da lista ' + listaB);    
}
listaBResultados()


