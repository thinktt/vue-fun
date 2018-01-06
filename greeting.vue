<template>
  <div>
    <transition name="fade">
      <h1 v-if="show">{{greeting}}</h1>
    </transition>
    <button @click="showGreeting">Show Greeting</button>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        greeting: 'Howdy!',
        show: true
      }
    },
    methods: {
      showGreeting: function() {
        this.show = !this.show; 
      }
    }

  }
</script>

<style>
  .fade-enter {
    opacity: 0;

  }

  .fade-enter-active {
    transition: opacity 1s; 
  }

  .fade-leave {
  }

  .fade-leave-active {
    transition: opacity 1s; 
    opacity: 0; 
  }

  .slide-enter {
    opacity: 0;

  }

  .slide-enter-active {
    transition: opacity 1s; 
  }

  .slide-leave {
  }

  .slide-leave-active {
    transition: opacity 1s; 
    opacity: 0; 
  }

  
</style>