<template>
  <div class="about">
    <ShowTasks />
  </div>
</template>

<script>
import ShowTasks from '@/components/ShowTasks.vue'

export default {
  name: 'About',
  components: {
    ShowTasks
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    }
  },
}
</script>