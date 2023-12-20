// FE02-58 | 💪 Atividade - Manipulando Objetos e Arrays

const departmentList = [
    {
        departmentName: 'Financial',
        employees:
            [
                {
                    name: 'Rose',
                    age: 26,
                    responsibility: 'Financial director',
                    salary: 5600
                },
                {
                    name: 'Stevem',
                    age: 32,
                    responsibility: 'Financial manager',
                    salary: 4200
                },
                {
                    name: 'Beca',
                    age: 26,
                    responsibility: 'Financial analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Expedition',
        employees:
            [
                {
                    name: 'Rooper',
                    age: 35,
                    responsibility: 'Expedition director',
                    salary: 5600
                },
                {
                    name: 'Maggie',
                    age: 22,
                    responsibility: 'Expedition manager',
                    salary: 4200
                },
                {
                    name: 'Thompson',
                    age: 41,
                    responsibility: 'Expedition analyst',
                    salary: 2800
                }
            ],
        working: true
    },
    {
        departmentName: 'Capitation',
        employees:
            [
                {
                    name: 'Saory',
                    age: 35,
                    responsibility: 'Capitation director',
                    salary: 5600
                },
                {
                    name: 'Silvia',
                    age: 22,
                    responsibility: 'Capitation manager',
                    salary: 4200
                },
                {
                    name: 'Sonem',
                    age: 41,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Havi',
                    age: 41,
                    responsibility: 'Trainee Capitation manager',
                    salary: 1500
                },
                {
                    name: 'Margie',
                    age: 25,
                    responsibility: 'Capitation analyst',
                    salary: 2800
                },
                {
                    name: 'Victoria',
                    age: 18,
                    responsibility: 'Trainee Capitation analyst',
                    salary: 1500
                }
            ],
        working: true
    },
]

function howManyDepartments() {

    let contagemDeDepartamentos = 0;
    let nomeDosDepartamentos = [];

    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[1].hasOwnProperty('departmentName')) {
            contagemDeDepartamentos++;
            nomeDosDepartamentos.push(departmentList[i].departmentName);
        }
    }    
    return 'Exercício 1 - A empresa possui ' + contagemDeDepartamentos + ' departamentos.' + nomeDosDepartamentos.join(',') + '.';
}
console.log(howManyDepartments());

function changeDepartmentName(departmentList, oldName, newName) {

    for (let i = 0; i <= departmentList.length; i++) {
        if (departmentList[1].departmentName == oldName) {
            departmentList[1].departmentName == newName;
            return 'Exercicio 2 - Propriedade ' + oldName + ' alterada com sucesso para ' + newName;
        }
    }
    return 'Exercício 2 - Erro - O departamento ' + oldName + ' não existe.'
}
let resultado = changeDepartmentName(departmentList,'Adm', 'Expedicao');
console.log(resultado);
console.log(departmentList);


function giveTheDepartmentABreak(departmentList, departamento, status) {

    let departmentFound = false;
    let message = '';

    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentName == departamento) {
            departmentFound = true;
            if (departmentList[i].working !== status) {
                departmentList[i].working = status
                message = 'Exercicio 3 - O status de atividade do departamento ' + departamento + ' foi alterado para ' + status;
            } else {
                message = 'Exercicio 3 - Erro - Verifique as informações.'
            }
            break;
        }
    }
    if (!departmentFound) {
        message = 'Exercicio 3 - O departamento ' + departamento + ' informado não existe.'
    }
    console.log(message);
    console.log(departmentList);
}
let statusDepartment = giveTheDepartmentABreak(departmentList, 'teste', false);


function howManyEmployeesInDepartment(departmentList, department) {

    
    let quantFuncionarios = 0;

    for (let i = 0; i < departmentList.length; i++) {
        if (departmentList[i].departmentName === department) {            
                quantFuncionarios = departmentList[i].employees.length;
                return 'Exercicio 4 - Temos ' + quantFuncionarios + ' funcionarios no departamento ' + department;                
            }
        } 
        return ' Exercicio 4 - Verifique se o nome do departamento informado está correto.'
    }  
let resultadoQuantFunci = howManyEmployeesInDepartment(departmentList, 'Capitation');
console.log(resultadoQuantFunci);
console.log(departmentList);


function insertNewEmployeeInDepartment(departmentList, departamento, novoFuncionario) {

    for (let i = 0; i < departmentList.length; i++) {
        if (departamento === departmentList[i].departmentName) {
            departmentList[i].employees.push(novoFuncionario);
            return 'Exercicio 5 - Funcionario ' + novoFuncionario.name + ' inserido no departamento ' + departamento;
        }
    }
    return 'Exercicio 5 - Department not found.';
}

const novoFuncionario = {
    name: 'Julio',
    age: 41,
    responsibility: 'Estagiario',
    salary: 14500.00,
}

console.log(insertNewEmployeeInDepartment(departmentList, 'Financial', novoFuncionario));
console.log(departmentList);
TextDecoderStream

