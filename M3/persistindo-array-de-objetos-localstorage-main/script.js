// Desenvolva sua lógica aqui

// Adicionando Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    carregarTarefas();
    document.getElementById('writeMyTask_form').addEventListener('submit', function(event) {
        event.preventDefault();
        const inputTask = document.getElementById('input_task');
        if (inputTask.value.trim()) {
            adicionarTarefa(inputTask.value.trim());
            inputTask.value = ''; 
        }
    });
});

// Manipulando tarefas

let tarefas = [];

// function adicionarTarefa(texto) {
//     const tarefa = { id: Date.now(), texto, concluida: false };
//     tarefas.push(tarefa);
//     atualizarLocalStorage();
//     renderizarTarefas();
// }

function adicionarTarefa(texto) {
    const tarefa = { id: Date.now(), texto, concluida: false };
    tarefas.unshift(tarefa); // Adiciona a nova tarefa no início do array
    atualizarLocalStorage();
    renderizarTarefas();
}


function removerTarefa(id) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    atualizarLocalStorage();
    renderizarTarefas();
}

function atualizarLocalStorage() {
    localStorage.setItem('listaDeTarefas', JSON.stringify(tarefas));
}

function carregarTarefas() {
    const tarefasSalvas = localStorage.getItem('listaDeTarefas');
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
        renderizarTarefas();
    }
}

// Renderizando tarefas

function renderizarTarefas() {
    const container = document.getElementById('taskListContainer');
    container.innerHTML = ''; // Limpa as tarefas antigas

    if (tarefas.length > 0) {
        container.style.display = 'flex'; // Mostra o container quando há tarefas
        tarefas.forEach(tarefa => {
            const tarefaDiv = document.createElement('div');
            tarefaDiv.className = 'tarefa';

            const textoTarefa = document.createElement('span');
            textoTarefa.textContent = tarefa.texto;
            tarefaDiv.appendChild(textoTarefa);

            const btnExcluir = document.createElement('button');
            btnExcluir.textContent = 'Excluir';
            btnExcluir.className = 'btnExcluir';
            btnExcluir.onclick = function() { removerTarefa(tarefa.id); };

            tarefaDiv.appendChild(btnExcluir);
            container.appendChild(tarefaDiv);
        });
    } else {
        container.style.display = 'none'; // Oculta o container quando não há tarefas
    }

    const mensagemSemTarefas = document.getElementById('noTaskMessage');
    mensagemSemTarefas.style.display = tarefas.length === 0 ? 'block' : 'none';
}





