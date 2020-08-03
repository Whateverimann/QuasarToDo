<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <Task
        v-for="(task, $id) in tasks"
        :key="$id"
        :task="task"
        :id="$id"
      ></Task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from 'components/Tasks/Task';

export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    Task
  }
};
</script>
