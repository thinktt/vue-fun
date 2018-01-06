Vue.use(httpVueLoader); 

new Vue({
  el: '#app',
  components: {
    'app-greeting': 'url:greeting.vue'
  },
  data: {
    greeting: 'Howdy!',
    greetingIsOn: true
  },
  methods: {
    toggleGreeting: function() {
      this.greetingIsOn = !this.greetingIsOn;
    }
  }
});



