<template>
  <q-form @submit.prevent.stop="onSubmit">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-2 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="cyan-5" />
        </template>
        {{ tab | titleCase }} to access your Todos anywhere!
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        v-model="formData.email"
        :rules="[
          val => isValidEmailAdress(val) || 'Please enter a valid email adress'
        ]"
        lazy-rules
        ref="email"
        color="cyan-5"
        outlined
        label="Email"
        stack-label
        class="col"
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        :rules="[
          val => (val !== null && val !== '') || 'Please type password',
          val => val.length >= 6 || 'Please enter at least 6 characters'
        ]"
        lazy-rules
        ref="password"
        color="cyan-5"
        type="password"
        outlined
        label="Password"
        stack-label
        class="col"
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn :label="tab" color="cyan-5" type="submit" />
    </div>
  </q-form>
</template>

<script>
export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    isValidEmailAdress(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    onSubmit() {
      this.$refs.email.validate();
      this.$refs.password.validate();

      if (this.$refs.email.hasError || this.$refs.password.hasError) {
        this.formHasError = true;
        console.log('error');
      } else {
        if (this.tab === 'login') {
          console.log('login user');
        } else {
          console.log('register user');
        }
      }
    }
  },
  filters: {
    titleCase(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style></style>
