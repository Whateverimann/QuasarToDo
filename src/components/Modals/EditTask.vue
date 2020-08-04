<template>
  <q-card>
    <ModalHeader>
      Edit Task
    </ModalHeader>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <ModalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName" />

        <ModalDueDate :dueDate.sync="taskToSubmit.dueDate" />

        <ModalDueTime
          :dueTime.sync="taskToSubmit.dueTime"
          v-if="taskToSubmit.dueDate"
        />

        <ModalButtons></ModalButtons>
      </q-card-section>
    </q-form>
  </q-card>
</template>

<script>
import { uuid } from '../../utils.js';
import { mapActions } from 'vuex';
import ModalHeader from './Shared/ModalHeader';
import ModalTaskName from './Shared/ModalTaskName';
import ModalDueDate from './Shared/ModalDueDate';
import ModalDueTime from './Shared/ModalDueTime';
import ModalButtons from './Shared/ModalButtons';

export default {
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {}
    };
  },
  methods: {
    ...mapActions('tasks', ['editTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      console.log('akcja');
      this.editTask({
        id: this.id,
        task: this.taskToSubmit
      });
      this.$emit('close');
    }
  },
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons
  },
  mounted() {
    this.taskToSubmit = this.task;
  }
};
</script>

<style></style>
