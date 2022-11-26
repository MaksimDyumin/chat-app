<template>
  <div class="page-container">
    <h1>Home page</h1>
    <CardList />
  </div>
</template>
  
<script>
import CardList from '@/components/chat/CardList.vue'

export default {
  name: 'HomeComp',
  components: {
    CardList
  }
}
</script>