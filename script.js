let elementoArrastado = null;

function attachDragListeners(task) {
  task.setAttribute('draggable', 'true');

  task.addEventListener('dragstart', () => {
    console.log('dragstart:', task.innerText);
    elementoArrastado = task;
  });

  task.addEventListener('dragend', () => {
    console.log('dragend:', task.innerText);
    elementoArrastado = null;
  });
}

window.attachDragListeners = attachDragListeners;

const lixeira = document.getElementById('lixeira');

lixeira.addEventListener('dragover', (e) => {
  e.preventDefault();
  lixeira.classList.add('hover');
});

lixeira.addEventListener('dragleave', () => {
  lixeira.classList.remove('hover');
});

lixeira.addEventListener('drop', (e) => {
  e.preventDefault();
  lixeira.classList.remove('hover');

  const elemento = window.elementoArrastado;

  if (elemento && lixeira.contains(e.target)) {
    elemento.remove();
    console.log('Tarefa removida:', elemento.innerText);
  } else {
    console.log('Drop não ocorreu sobre a lixeira corretamente.');
  }

  window.elementoArrastado = null;
});
