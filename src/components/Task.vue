<template>
  <q-item
    clickable
    v-ripple
    @click="updateTask(id)"
    :class="!task.completed ? 'bg-deep-orange-4' : 'bg-light-green-4'"
  >
    <q-item-section side>
      <q-checkbox
        :value="task.completed"
        class="no-pointer-events"
        color="cyan-5"
      />
    </q-item-section>

    <q-item-section class="text-white">
      <q-item-label :class="{ 'text-strikethrough': task.completed }">{{
        task.name
      }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon color="grey-4" name="event" size="18px" class="q-mr-xs" />
        </div>

        <div class="column">
          <q-item-label class="row justify-end text-white" caption>{{
            task.dueDate
          }}</q-item-label>
          <q-item-label class="row justify-end text-white" caption
            ><small>{{ task.dueTime }}</small></q-item-label
          >
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          flat
          round
          dense
          color="white"
          icon="edit"
          @click.stop="showEditTask = true"
        />
        <q-btn
          flat
          round
          dense
          color="red-9"
          icon="clear"
          @click.stop="promptToDelete(id)"
        />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <EditTask @close="showAddTask = false" :task="task" :id="id" />
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex';
import EditTask from './Modals/EditTask';

export default {
  props: ['task', 'id'],
  data() {
    return {
      showEditTask: false
    };
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: 'Confirm',
          message: 'Really delete?',
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    }
  },
  components: {
    EditTask
  }
};
</script>

<style></style>
