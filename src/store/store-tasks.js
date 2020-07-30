const state = {
  tasks: [
    {
      id: 1,
      name: 'workout',
      completed: false,
      dueDate: '2020/08/01',
      dueTime: '20:00'
    },
    {
      id: 2,
      name: 'go to gym',
      completed: false,
      dueDate: '2020/09/01',
      dueTime: '20:00'
    },
    {
      id: 3,
      name: 'stop eating like a pig',
      completed: false,
      dueDate: '2020/10/01',
      dueTime: '20:00'
    }
  ]
};

const mutations = {};

const actions = {};

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
