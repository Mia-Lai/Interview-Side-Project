<template>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    class="nav-drawer"
  >
    <v-divider />
    <v-list>
      <v-list-item
        v-for="route in routeItems"
        :key="route.title"
        :href="route.path"
      >
        <v-list-item-icon>
          <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ route.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      dashboard: {
        path: '/dashboard'
      },
      routeItems: [],
    }
  },
  mounted (){
    const routes = this.$router.getRoutes()
    this.routeItems = routes.map(item => {
        return {
          icon: item.meta.icon,
          title: item.meta.title,
          path: item.path,
        }
      })
  },
  methods: {
    open () {
      this.drawer = true
    }
  },
}
</script>
<style lang="scss">
.nav-drawer {
  z-index: 9999 !important
}
</style>