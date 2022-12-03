<template>
  <div class="page-container">
    <h1>Создание поста</h1>
    <hr>
    <div class="post-creater">
      <h2 class="item">Текст вашего поста</h2>
      <textarea v-model="text" class="item" name="" id="" cols="80" rows="10"></textarea>
      <button @click="createPost" class="btn item">Создать пост</button>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'HomeComp',
  components: {
  },
  props: {
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    async createPost() {
      await this.$store.dispatch('post/createPost', {text: this.text})
    }
  },

}
</script>

<style scoped>
textarea {
  font-size: 16px;
}
.post-creater {
  display: flex;
  flex-direction: column;
}
.post-creater .item{
  margin: 10px auto;
}
</style>