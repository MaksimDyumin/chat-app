<template>
  <div class="page-container">
    <h1>Список ваших постов</h1>
    <hr>
    <div class="post-menu-container">
      <button @click="$router.push({name: 'PostCreate'})" class="btn item">Создать новый пост</button>
    </div>
    <hr>
    <PostList />
  </div>
</template>
    
<script>
import PostList from '@/components/posts/PostList.vue'

export default {
  name: 'PostsPage',
  components: {
    PostList
  },
  methods: {
    async getPosts() {
    }
  }
}
</script>
  
<style scoped>
.post-menu-container {
  display: flex;
  justify-content: center;
}
.post-menu-container img {
  cursor: pointer;
  object-fit: cover;
}
.post-menu-container .item {
  margin: 0 5px;
}

hr {
  margin: 10px 0;
}
</style>