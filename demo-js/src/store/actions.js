export default {
  addNewTask({ commit }, text) {
    commit('addNewTask', {
      title: text,
      userId: 3,
      completed: false,
      id: this.state.tasks.length+1
    });
  },
  removeTask({ commit }, task) {
    commit('removeTask', task);
  },
  editTask({ commit }, {task, value}) {
    commit('editTask', {task, title: value});
  },
  initialData({ commit }) {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        commit('initialData', json);
      })
      .catch((error) => {
        console.log('error: ' + error.statusText);
      });
  }
}