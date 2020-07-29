<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        clickable
        v-ripple
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-2' : 'bg-lime-2'"
      >
        <q-item-section side>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strikethrough': task.completed }">{{
            task.name
          }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <div class="row">
            <div class="column justify-center">
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>

            <div class="column">
              <q-item-label class="row justify-end" caption>{{
                task.dueDate
              }}</q-item-label>
              <q-item-label class="row justify-end" caption
                ><small>{{ task.dueTime }}</small></q-item-label
              >
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>
