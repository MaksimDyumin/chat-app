<template>
  <div @click="this.$router.push({name: 'Chat', params: {id: 1}})" class="card">
    <h3>"Имя собеседника"</h3>
    <p>"Последнее сообщение"</p>
  </div>
</template>
  
<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  mounted() {
  },
  methods: {
    showInfo() {
      console.log(this.$router)
    }
    
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  width: 265px;
  height: 220px;
  border: 1px solid rgb(240, 240, 240);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 4px 4px 8px -2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px -2px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px -2px rgba(34, 60, 80, 0.2);
}
</style>
  