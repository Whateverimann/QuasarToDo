<template>
  <q-page class="q-pa-md">
    <q-list v-if="tasks.length" separator>
      <Task
        v-for="(task, $id) in tasks"
        :key="$id"
        :task="task"
        :id="$id"
      ></Task>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        round
        color="cyan-5"
        size="24px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <AddTask @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import Task from 'components/Task';
import AddTask from 'components/Modals/AddTask';

export default {
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    Task,
    AddTask
  }
};
</script>
