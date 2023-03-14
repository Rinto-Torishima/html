new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data: {
    ActiveBtn: false,
  },
  methods: {
    onClickOutside() {
      this.ActiveBtn = false;
    },
  },
});
