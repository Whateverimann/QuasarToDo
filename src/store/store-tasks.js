import Vue from 'vue';

const state = {
  tasks: [
    {
      id: 2,
      name: 'workout',
      completed: false,
      dueDate: '2020/08/01',
      dueTime: '20:00'
    },
    {
      id: 3,
      name: 'go to gym',
      completed: false,
      dueDate: '2020/09/01',
      dueTime: '20:00'
    },
    {
      id: 4,
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
  }
};

const actions = {
  updateTask({ commit }, id) {
    commit('UPDATE_TASK', id);
  },
  deleteTask({ commit }, id) {
    commit('DELETE_TASK', id);
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
