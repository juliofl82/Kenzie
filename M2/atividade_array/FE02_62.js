
let listaMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro'];

function incluiMes(listaMes, mes) {

    if (listaMes.length <= 11 && mes.length <= 7) {
        listaMes.push(mes);
        console.log('Elemento ' + mes + ' inserido com sucesso.');
    } else {
        console.log('Nao foi possivel inserir este valor => ' + mes);
    }
    console.log(listaMes);
}
incluiMes(listaMes, 'outubro');
incluiMes(listaMes, 'novembro');


let listaA62 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let quadrados = [];

function calculoQuadrados(lista) {

    for (let i = 0; i < lista.length; i++) {
        quadrados.push(lista[i] * lista[i]);
    }
    console.log(listaA62);
    console.log(quadrados);
}
calculoQuadrados(listaA62);


