<template>
  <q-card>
    <ModalHeader>
      Add Task
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
  data() {
    return {
      taskToSubmit: {
        id: '',
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    };
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit('close');
    }
  },
  components: {
    ModalHeader,
    ModalTaskName,
    ModalDueDate,
    ModalDueTime,
    ModalButtons
  }
};
</script>

<style></style>
