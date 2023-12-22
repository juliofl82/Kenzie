let listaAlunos = [
    {
      nome: 'João',
      curso: 'Ciencia da Computação',
      turno: 'Noturno',
      mediaCorte: 7,
      materias: [
        {
          nome: 'Calculo I',
          avaliacoes: [6, 8, 10, 8]
        },
        {
          nome: 'Pensamento Computacional',
          avaliacoes: [6, 8, 6, 8]
        },
        {
          nome: 'Linguagem Orientada a Objetos',
          avaliacoes: [7, 8, 9, 10]
        },
        {
          nome: 'Arquitetura de Organização de Computadores',
          avaliacoes: [6, 8, 7, 8]
        }
      ]
    }
  ]

function avaliarAlunos(listaAlunos) {

    for (let i = 0; i < listaAlunos.length; i++) {
        let aluno = listaAlunos[i];
        
        let resultadoFinal = true;

        for (let j = 0; j < aluno.materias.length; j++) {
            let materia = aluno.materias[j];
            let soma = 0;

            for (let k = 0; k < materia.avaliacoes.length; k++) {
                soma += materia.avaliacoes[k];
            }
            let media = soma / materia.avaliacoes.length;
            
            if (media < 6) {
                resultadoFinal = false;
            }
        }

        if (resultadoFinal) {
            console.log(aluno.nome, '- Resultado: Aprovado ');
        } else {
            console.log(aluno.nome, '- Resultado: Reprovado');
        }
    }
}
avaliarAlunos(listaAlunos);

//////////////////////////////////////////////////////////////

const onibus = {
    capacidade: 40,
    origem: 'Curitiba-PR',
    destino: 'Rio de Janeiro-RJ',
    paradas: [
      'São Paulo-SP',
      'Campinas-SP',
      'São José dos Campos-SP',
      'Volta Redonda-RJ'
    ],
    passageiros: [
      {
        nome: 'Luis da Silva',
        rg: '1234567890',
        bilhete: {
          origem: 'Curitiba-PR',
          destino: 'São José dos Campos-SP',
          poltrona: 15,
        }
      },
      {
        nome: 'João da Silva',
        rg: '1234567891',
        bilhete: {
          origem: 'São Paulo-SP',
          destino: 'Rio de Janeiro-RJ',
          poltrona: 16,
        }
      }
    ]
  }

//    receber os pontos de parada do objeto onibus
//    receber o ponto de destino de cada passageiros
//    comparar e avisar o passageiro quando for o ponto de destino retornar em array

function alertaDestino(onibus, paradaAtual) {
    console.log("Paradas previstas para o ônibus:", onibus.paradas);

    for (let j = 0; j < onibus.passageiros.length; j++) {
        let passageiro = onibus.passageiros[j];
        if (passageiro.bilhete.destino === paradaAtual) {
            console.log(`${passageiro.nome}, sua parada (${paradaAtual}) chegou!`);
        }
    }
}
alertaDestino(onibus, 'São José dos Campos-SP');




