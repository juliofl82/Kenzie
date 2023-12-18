const pessoa = {
    nome: 'Julio',
    anoDeNascimento: "17/08/1982",
    cpf: 123456789,
    cidade: 'Belo Horizonte',
    estado: 'Minas Gerais',
    logradouro: 'Rua do Vale',
}
// console.log (pessoa) === Chamada função

const escola = {
    nome: '1',
    cnpj: '1234',
    areaDeAtuacao: 'Ti',
    cidade: 'BH',
    estado: 'MG',
    logradouro: 'Rua 1',
    curso: 'frontend',
}
// console.log(escola) ===== Chamada função

const carro = {
    placa: 'ABC123',
    classes: ['sedan'],
    luxo: true,
    potencia: 200,
    estacionado: true,
}

function obterPlaca(carro) {    
    console.log(carro.placa);
    return carro.placa;
}
// obterPlaca(carro); ===== Chamada função

function verificarClasses(carro) {
    console.log(carro.classes);
}
// verificarClasses(carro); ===== Chamada função

function potenciaReal(carro) {    
    if(carro.luxo == true) {
        return carro.potencia ** 2 ; return carro.potencia
    }     
}
// console.log(potenciaReal(carro)); ==== Chamada função

function adicionarNovaClasse(carro, novaClasse) {
    const classesPermitidas = ['sedan','hatchback','suv','crossover','cupe'];
    const classeExiste = carro.classes.includes(novaClasse);
    const numeroDeClasses = carro.classes.length;

    if (numeroDeClasses >= 3) {
        return 'Número máximo de classes atingido.';        
    } else if (classeExiste) {
        return 'O carro já possui a classe ' + novaClasse;
    } else if (classesPermitidas.includes(novaClasse)) {
        carro.classes.push(novaClasse);
        return 'Classe ' + novaClasse + ' adicionada com sucesso.';
    } else {
        return 'Classe ' + novaClasse + ' não é permitida';
    }
    let resultado = adicionarNovaClasse(classe, novaClasse);
}
// console.log(adicionarNovaClasse(carro,'cupe'));
// console.log(carro.classes);

function naoMaisLuxo(carro) {
    if (carro.estacionado != true) {
        return 'O carro ' + carro.placa + ' não está estacionado.';
    } else if (carro.luxo != true) {
        return 'O carro ' + carro.placa + ' não é luxuoso';
    } else {
        carro.luxo = false
        return 'O carro ' + carro.placa + ' não é mais considerado um carro de luxo';
    }

}
// let resultado = naoMaisLuxo(carro)
// console.log(resultado);
// console.log(carro)





