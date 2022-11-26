<template>
  <div class="card-list" >
    <ChatCard v-for="item of 5" :key="item" />
  </div>
</template>

<script>
import ChatCard from '@/components/chat/ChatCard.vue'

export default {
  name: 'HelloWorld',
  props: {
  },
  components: {
    ChatCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  width: 1125px;
  margin: 0 auto;
}

@media (max-width: 1200px) {
  .card-list {
    width: 840px;
  }
}
@media (max-width: 992px) {
  .card-list {
    width: 555px;
  }
}
@media (max-width: 576px) {
  .card-list {
    width: 260px;
  }
}
</style>
