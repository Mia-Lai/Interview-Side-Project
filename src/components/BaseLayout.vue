<template>
  <div class="base-layout d-flex flex-column">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="$refs.nav.open()" />
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
    </v-app-bar>
    <nav-drawer ref="nav" />
    <slot />
  </div>
</template>
<script>
import NavDrawer from '@/components/NavDrawer'
export default {
  name: 'Baselayout',
  components: {
    NavDrawer,
  },
}
</script>
<style lang="scss">
.base-layout {
  background-color: aliceblue; 
  height: 100vh;
  width: 100vw;
}
</style>
