<template>
  <div class="home">
    <label>List All Tasks</label>
    <ul>
      <li v-for="(val, key) in filteredTasks" v-bind:key="key" >
        <a
          v-bind:href="'#/' + key"
          v-on:click="visibility = key"
        >{{ key }}</a>
      </li>
    </ul>
    <ul>
      <TaskItem 
        v-for="task in filterTasks" 
        v-bind:key="task.id"
        v-bind:task="task"
      />
    </ul>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue'

const taskFilters = {
  all: allTasks => allTasks,
  completed: allTasks => allTasks.filter(task => task.completed),
  uncompleted: allTasks => allTasks.filter(task => !task.completed),
}

export default {
  name: 'ShowTasks',
  data() {
    return {
      visibility: 'all',
      filteredTasks: taskFilters
    }
  },
  components: {
    TaskItem
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    filterTasks() {
      return taskFilters[this.visibility](this.tasks);
    },
  },
}
</script>