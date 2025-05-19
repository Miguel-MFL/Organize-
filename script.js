let elementoArrastado = null;

document.querySelectorAll('.task').forEach(task => {
  task.addEventListener('dragstart', () => {
    elementoArrastado = task;
  });

  task.addEventListener('dragend', () => {
    elementoArrastado = null;
  });
});

const lixeira = document.getElementById('lixeira');

lixeira.addEventListener('dragover', (e) => {
  e.preventDefault();
  lixeira.classList.add('hover');
});

lixeira.addEventListener('dragleave', () => {
  lixeira.classList.remove('hover');
});

lixeira.addEventListener('drop', () => {
  if (elementoArrastado) {
    elementoArrastado.remove();
  }
  lixeira.classList.remove('hover');
});
