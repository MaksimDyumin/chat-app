<template>
  <div class="page-container">
    <h1>Список ваших чатов</h1>
    <ChatList />
  </div>
</template>
  
<script>
import ChatList from '@/components/chat/CardList.vue'

export default {
  name: 'ChatsPage',
  components: {
    ChatList
  }
}
</script>