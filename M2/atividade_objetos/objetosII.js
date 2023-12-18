const carros = [
    {
        modelo: "Ka",
        marca: "Ford",
        ano: "2000",
        cor: "Branco",
        completo: false,
        acessorios: ['Vidro Elétrico'],
        preco: 6799.33
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: false,
        acessorios: ['Trava'],
        preco: 12199.13
    },
    {
        modelo: "Palio",
        marca: "Fiat",
        ano: "1995",
        cor: "Verde",
        completo: false,
        acessorios: [],
        preco: 11099.1
    },
    {
        modelo: "Monza",
        marca: "Chevrolet",
        ano: "1993",
        cor: "Vinho",
        completo: false,
        acessorios: [],
        preco: 14578.25
    },
    {
        modelo: "Saveiro",
        marca: "VW",
        ano: "2013",
        cor: "Prata",
        completo: false,
        acessorios: [],
        preco: 28399.13
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "1996",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 14350.45
    },
    {
        modelo: "Gol",
        marca: "VW",
        ano: "2013",
        cor: "Preto",
        completo: true,
        acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
        preco: 22109.21
    },
    {
        modelo: "Montana",
        marca: "Chevrolet",
        ano: "2011",
        cor: "Azul",
        completo: false,
        acessorios: [],
        preco: 15999.13
    },
    {
        modelo: "Stilo",
        marca: "Fiat",
        ano: "2000",
        cor: "Preto",
        completo: false,
        acessorios: [],
        preco: 17251.36
    }
  ]

function contaTotal() {

    let totalVeiculos = carros.length;
    return 'Exercício 1 -  Temos ' + totalVeiculos + ' veículos no estoque.';

}
console.log(contaTotal());

function precoTotal() {

    let valorEstoque = carros.reduce((soma, carros) => soma + carros.preco, 0);
    let valorFormatado = valorEstoque.toFixed(2);
    return 'Exercício 2 - O valor de carro em estoque é de: R$ ' + valorFormatado;
}
console.log(precoTotal());

function filtraPorMarca(consultaMarca) {

    let carrosFiltrados = carros.filter(function (carro) {
        return carro.marca == consultaMarca
    })
    if (carrosFiltrados.length > 0) {
        return 'Exercicio 3 - Foram encontrados ' + carrosFiltrados.length + ' veículos da marca ' + consultaMarca + '.';
    } else {
        return 'Exercicio 3 - Nenhum carro encontrado para marca'
    }
}
console.log(filtraPorMarca('Fiat'));


function filtraPorAcessorio(consultaAcessorio) {

    if (consultaAcessorio) {
        let carrosComAcessorio = carros.filter(function (carro) {
            return carro.acessorios.includes(consultaAcessorio)
        })
        return 'Exercicio 4 - Existem ' + carrosComAcessorio.length + ' carros com o acessório ' + consultaAcessorio;
    } else {
        let carrosComQualquerAcessorio = carros.filter(function (carro) {
            return carro.acessorios.length > 0
        });
        return 'Exercicio 4 - Existem ' + carrosComQualquerAcessorio.length + ' carros com pelo menos um acessorio cadastrado.'
    }
}
console.log(filtraPorAcessorio(''));

function eCarroCompleto() {

    let carrosCompletos = carros.filter(function (carro) {
        return carro.completo === true;
    });

    return 'Exercicio 5 - Temos ' + carrosCompletos.length + ' carros completos no estoque.'
}
console.log(eCarroCompleto());

function adicionaCarro() {

    const novoCarro = {
        modelo: 'Modelo Teste',
        marca: 'Teste',
        ano: 2023,
        completo: true,
        acessorios: [],
        preco: 10000.00,
    };
    carros.push(novoCarro);

    console.log('Exercicio 6')
    console.log(carros);

}
adicionaCarro();

function removeCarro(indice, numElementos) {

    if (indice >= 0 && indice < carros.length && numElementos > 0) {
        carros.splice(indice, numElementos);
        return 'Veículo no indice ' + indice + 'excluido';
    } else {
        return 'Não existe carro neste indice';
    }    
}
removeCarro(9, 1);
console.log('Exercício 7')
console.log(carros);

function contaCarrosNovos(idade) {

    const anoAtual = new Date().getFullYear();
    const anoLimite = anoAtual - idade;

    const carrosNovos = carros.filter(function (carro) {
        return carro.ano >= anoLimite;
    });
    console.log('Exercicio 8 - Existem ' + carrosNovos.length + ' carros novos no estoque');
}
contaCarrosNovos(10);

function atribuiProprietario(carros, indice) {

    const pessoa = {
        proprietario: 'Julio',
        telefone: '123-456',
    }

    if (indice >= 0 && indice < carros.length) {
        carros[indice].proprietario = pessoa;
        console.log('Exercicio 9 - Alterado o proprietario do veículo no indice ' + indice);
    } else {
        console.log('Exercício 9 - Falha no cadastro. Nenhum veículo foi alterado.'); 
    }
}
atribuiProprietario(carros, 1);
console.log(carros);




