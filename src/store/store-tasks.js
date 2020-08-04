import Vue from 'vue';
import { uuid } from '../utils.js';

const state = {
  tasks: [
    {
      id: uuid(),
      name: 'workout',
      completed: false,
      dueDate: '2020/08/01',
      dueTime: '20:00'
    },
    {
      id: uuid(),
      name: 'go to gym',
      completed: false,
      dueDate: '2020/09/01',
      dueTime: '20:00'
    },
    {
      id: uuid(),
      name: 'stop eating like a pig',
      completed: false,
      dueDate: '2020/10/01',
      dueTime: '20:00'
    }
  ]
};

const mutations = {
  UPDATE_TASK(state, id) {
    state.tasks[id].completed = !state.tasks[id].completed;
  },
  DELETE_TASK(state, id) {
    state.tasks.splice(id, 1)[0];
  },
  ADD_TASK(state, task) {
    state.tasks.push(task);
  },
  EDIT_TASK(state, { id, task }) {
    console.log('mutacja', id, task);
    state.tasks[id] = task;
  }
};

const actions = {
  updateTask({ commit }, id) {
    commit('UPDATE_TASK', id);
  },
  deleteTask({ commit }, id) {
    commit('DELETE_TASK', id);
  },
  addTask({ commit }, task) {
    let taskId = uuid();
    task.id = taskId;
    commit('ADD_TASK', task);
  },
  editTask({ commit }, { id, task }) {
    console.log('akcja2');
    commit('EDIT_TASK', { id, task });
  }
};

const getters = {
  tasks: state => {
    return state.tasks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
