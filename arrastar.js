const droppables = document.querySelectorAll(".swim-lane");

function attachDragListeners(task) {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
}

const draggables = document.querySelectorAll(".task");
draggables.forEach((task) => {
  attachDragListeners(task);
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask, bottomTask);
    }
  });
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};
function attachDragListeners(task) {
  task.setAttribute("draggable", "true");

  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
    window.elementoArrastado = task;
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
    window.elementoArrastado = null;
  });
}

window.attachDragListeners = attachDragListeners;
