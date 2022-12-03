<template>
  <div class="posts-card-list">
    <PostCard v-for="item of items" :key="item" :item="item"/>
  </div>
</template>
<script>
import PostCard from "@/components/posts/PostCard.vue";

export default {
  name: 'PostList',
  components: {
    PostCard
  },
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    await this.$store.dispatch('post/getPosts',{limit: 2, offset: 0})
    this.items = this.$store.getters['post/getPosts']
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.posts-card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 1125px;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .posts-card-list {
    width: 840px;
  }
}
@media (max-width: 992px) {
  .posts-card-list {
    width: 555px;
  }
}
@media (max-width: 576px) {
  .posts-card-list {
    width: 260px;
  }
}
</style>