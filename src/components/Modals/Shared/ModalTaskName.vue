<template>
  <div class="row q-mb-sm">
    <q-input
      class="col"
      color="cyan-5"
      outlined
      :value="name"
      @input="$emit('update:name', $event)"
      label="Task name"
      :rules="[val => !!val || 'Field is required']"
      autofocus
      clearable
      clear-icon="close"
      ref="name"
    />
  </div>
</template>

<script>
export default {
  props: ['name']
};
</script>

<style></style>
