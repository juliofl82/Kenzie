function cadastro(nome, idade, acompanhado) {
    let visitante = {
        nome: [],
        idade: [],
        acompanhado: true,
    }

    if (idade < 18) {
        console.log('Entrada não permitida para: ' + nome);
    } else if (acompanhado === 's') {
        console.log('Entrada permitida para: ' + nome + ' => Conceder desconto.');
        visitante.nome.push(nome);
        visitante.idade.push(idade);
        visitante.acompanhado = true
    } else {
        console.log('Entrada permitida para: ' + nome + ' => Valor integral.');
        visitante.nome.push(nome);
        visitante.idade.push(idade);
        visitante.acompanhado = false
    }    
    return visitante;    
}
cadastro('Julio', 19, 's');
cadastro('João', 19, 'N');
cadastro('Pedro', 17, 's');











