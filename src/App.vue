<template>
  <v-app>
    <base-layout>
      <v-main>
        <router-view />
      </v-main>
    </base-layout>
  </v-app>
</template>

<script>
import BaseLayout from '@/components/BaseLayout.vue'
export default {
  name: 'App',
  components: {
    BaseLayout
  },

  data: () => ({
    //
  }),
};
</script>