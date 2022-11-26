<template>
  <Header />
  <div class="app-container">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"/>
      </transition>
    </router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Header
  }
}
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 100%;
  min-height: 100vh;
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
}
header {
  height: 70px;
}
</style>
