import Vue from "vue";
import "vuetify/dist/vuetify.min.css";
import Vuetify from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
Vue.use(Vuetify);
const theme = {
  primary: "#3f51b5",
  secondary: "#b0bec5",
  accent: "#8c9eff",
  error: "#b71c1c",
};
export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },

  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
  },
});
