<template>
  <div @click="$router.push({name: 'Post', params: {id: 1}})" class="post-card-container">
    <h3>"Тайтл поста"</h3>
    <p>"Описание:"</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-card-container {
  display: flex;
  flex-direction: column;
  width: 265px;
  height: 320px;
  border: 1px solid rgb(240, 240, 240);
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 4px 4px 8px -2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px -2px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px -2px rgba(34, 60, 80, 0.2);
}
</style>