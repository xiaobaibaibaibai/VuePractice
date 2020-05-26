export default {
  addNewTask(state, newTask) {
    state.tasks.push(newTask);
  },
  removeTask(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },
  editTask(state, {task, title = task.title}) {
    const index = state.tasks.indexOf(task);
    state.tasks.splice(index, 1, {
      ...task,
      title
    });
  },
  initialData(state, data) {
    // state.tasks.push(data);
    state.tasks = data;
  }
}