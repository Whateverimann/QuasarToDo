<template>
  <div class="row q-mb-sm">
    <q-input
      label="Due date"
      color="cyan-5"
      outlined
      clearable
      clear-icon="close"
      :value="dueDate"
      @input="$emit('update:dueDate', $event)"
    >
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy
            ref="qDateProxy"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date
              color="cyan-5"
              :value="dueDate"
              @input="$emit('update:dueDate', $event)"
            />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueDate']
};
</script>

<style></style>
