<template>
  <li>
    <div>
      <input 
        v-bind:value="task.title" 
        style="width: 50%;"
        v-on:keyup.enter="editTitle"
        v-on:keyup.esc="cancelEdit"
        v-on:blur="editTitle"
      />
      <button
        v-on:click="removeTask(task)" 
        style="margin-left: 5px;">
          delete
      </button>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskItem',
  props: ['task'],
  methods: {
    ...mapActions([
      'removeTask',
      'editTask',
    ]),
    editTitle(e) {
      const value = e.target.value.trim();
      const { task } = this;
      if (!value) {
        this.removeTask(task);
      } else {
        this.editTask({task, value});
      }
    },
    cancelEdit (e) {
      e.target.value = this.task.title;
    }
  }
}
</script>