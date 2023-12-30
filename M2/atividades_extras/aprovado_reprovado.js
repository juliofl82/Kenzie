function verificaAprovacao(numMaterias) {

    const nome = prompt('Digite o nome do aluno:')
    if (nome.length < 5) {
        return ' Nome invalido.';
    } else {
        const presenca = parseInt(prompt('Informe a presença.'))
        if (presenca < 0 || presenca > 10) {
            return 'Presenca deve ser entre 0 e 10.';
        } else {
            let somaNota = 0;
            for (let i = 1; i <= numMaterias; i++) {
                const materia = prompt('Informe a materia ' + i + ' :');
                const nota = parseInt(prompt('Informe a nota ' + materia + ' :'));
                if (nota < 0 || nota > 10) {
                    return 'Valor da nota informado inválido.'
                } else {
                    somaNota += nota;
                }
            }
            const mediaNota = somaNota / numMaterias;
            if (mediaNota >= 8 && presenca >= 6) {
                return ('A nota do ' + nome + ' é de ' + mediaNota + ' e a presença é de ' + presenca + '. Aluno Aprovado!');
            } else {
                return 'Aluno reprovado'
            }
        }
    }
}
console.log(verificaAprovacao(10));

