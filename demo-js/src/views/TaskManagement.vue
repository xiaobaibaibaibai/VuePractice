<template>
  <div class="home">
    <label>Add A Task</label>
    <input
      autofocus
      placeholder="name a task"
      v-on:keyup.enter="addNewTask"
    >
    <br><br>
    <button @click="test">print</button>
    <br><br>
    <ShowTasks />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowTasks from '@/components/ShowTasks.vue'
import { mapActions } from 'vuex';

export default {
  name: 'TaskManagement',
  components: {
    ShowTasks
  },
  methods: {
    ...mapActions([
      'fetchInitialData',
    ]),
    addNewTask(e) {
      const text = e.target.value;
      if (text.trim()) {
          this.$store.dispatch('addNewTask', text);
      }
      e.target.value = '';
    },
    test() {
      console.log(this.$store.state.tasks);
    }
  },
}
</script>
