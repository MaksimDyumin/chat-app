<template>
  <div class="page-container">
    <h1>Список ваших постов</h1>
    <PostList />
  </div>
</template>
    
<script>
import PostList from '@/components/posts/PostList.vue'

export default {
  name: 'PostsPage',
  components: {
    PostList
  }
}
</script>
  
<style scoped>
.sovet-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
hr {
  margin: 0;
}
</style>