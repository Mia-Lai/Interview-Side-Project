import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import DataTable from "@/views/DataTable.vue";
Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      redirect: {
        name: "dashboard",
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        icon: "mdi-monitor-dashboard",
        title: "儀表板",
      },
    },
    {
      path: "/data-table",
      name: "dataTable",
      component: DataTable,
      meta: {
        icon: "mdi-table",
        title: "表格",
      },
    },
  ],
});

export default router;
