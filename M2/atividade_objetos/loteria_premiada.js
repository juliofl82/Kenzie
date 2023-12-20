let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
  }

let naoGanhador = [];



function confereGanhador(nome, cpf) {

    let nomeNormalizado = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();

    if (nomeNormalizado === ganhador.nome && cpf === ganhador.cpf) {        
        return 'Exercicio 1 e 2 - O ' + ganhador.nome + ' CPF: ' + ganhador.cpf + ' é o ganhador da loteria.'
    } else {        
        naoGanhador.push({nome: nome, cpf: cpf});        
        return'Exercicio 1 e 2 - O ' + nome + ' CPF: ' + cpf + ' não é o ganhador da loteria.';
    }
}
console.log(confereGanhador('adamastor', '123.321.789-98'));
console.log(confereGanhador('damastor', '123.321.789-98'));
console.log(confereGanhador('amastor', '123.321.789-98'));
console.log('Exercicio 1 e 2 - Foram recebidas ' + naoGanhador.length + ' solicitações de pessoas que não foram aprovadas como ganhadoras do premio');
console.log(naoGanhador);

TextDecoderStream
