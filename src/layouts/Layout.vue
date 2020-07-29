<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-cyan-5">
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Do Stuff
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-cyan-5">
      <q-tabs>
        <q-route-tab
          v-for="link in Links"
          :key="link.title"
          v-bind="link"
          :icon="link.icon"
          :label="link.title"
          :to="link.link"
        /> </q-tabs
    ></q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      show-if-above
      :width="250"
      bordered
      content-class="bg-cyan-5"
    >
      <q-list dark>
        <q-item-label header class="text-purple-1">
          Navigation
        </q-item-label>
        <NavigationLink
          v-for="link in Links"
          :key="link.title"
          v-bind="link"
          :title="link.title"
          :icon="link.icon"
          :to="link.link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import NavigationLink from 'components/NavigationLink.vue';

const linksData = [
  {
    title: 'Todo',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    icon: 'settings',
    link: '/settings'
  }
];

export default {
  name: 'Layout',
  components: { NavigationLink },
  data() {
    return {
      leftDrawerOpen: false,
      Links: linksData
    };
  }
};
</script>

<style lang="scss">
.q-drawer {
  .q-router-link--active {
    color: #fff !important;
  }
}

@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
