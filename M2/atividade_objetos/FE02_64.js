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
