
let higiene = ['pasta de dente', 'papel higienico', 'sabonete', 'shampoo', 'desodorante'];
let alimentacao = ['pao de forma', 'agua', 'barra de ceral', 'macarrao', 'cafe'];
let farmacia = ['band aid', 'repelente', 'aspirina', 'faixa', 'pinca'];
let lazer = ['lanterna', 'bussula', 'baralho', 'camera', 'jogo'];
let teste = []
let suprimentos = [higiene, alimentacao, farmacia, lazer];

if (suprimentos.length == 4) {
    let flag = false;
    for (let i = 0; i < suprimentos.length; i++) {
        let secao = suprimentos[i];
        if (secao.length < 5) {
            console.log('Precisamos de mais itens desta seção. ' + secao);
            flag = true;
        } else if (secao.length > 5) {
            console.log('Tem itens demais, não precisamos de tantos. ' + secao);
            flag = true;
        }
    }
    if (flag == false) {
        console.log('Podemos ir acampar.');
    } else {
        console.log('Ainda não estamos prontos.');
    }
} else if (suprimentos.length < 4) {
    console.log('Algum amigo ainda não retornou com os itens.');
} else {
    console.log('Acho que temos um intruso');
}

 







