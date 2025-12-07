<template>
  <AppHeader />
  <router-view />
  <MainFooter />
</template>

<script>
import AppHeader from './components/Header.vue'
import MainFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    MainFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #121212;
}
</style>
