const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];


function renderElements(tasks) {
  
  let ulElement = document.querySelector('.tasks__list');  

  tasks.forEach(function(task) {
    let taskItem = createTaskItem(task);
    ulElement.appendChild(taskItem);
  });
  
}

function createTaskItem(task){

  let li = document.createElement('li');
  li.className = 'task__item';

  let taskInfoContainer = document.createElement('div');
  taskInfoContainer.className = 'task-info__container';

  let span = document.createElement('span');
  let taskTypeClass;
  switch (task.type.toLowerCase()) {
    case 'urgente':
      taskTypeClass = 'span-urgent';
      break;
    case 'importante':
      taskTypeClass = 'span-important';
      break;
    case 'normal':
      taskTypeClass = 'span-normal';
      break;
  }
  span.className = 'task-type ' + taskTypeClass;

  let p = document.createElement('p');
  p.textContent = task.title;

  taskInfoContainer.appendChild(span);
  taskInfoContainer.appendChild(p);

  let button = document.createElement('button');
  button.className = 'task__button--remove-task';  
  button.addEventListener('click', function() {
    li.remove();
  });
  li.appendChild(taskInfoContainer);
  li.appendChild(button);

  return li;

}

renderElements(tasks);
