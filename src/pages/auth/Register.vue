<template>
  <div class="page-container">
    <div class="auth-form-container">
      <form @submit.prevent="register">
        <header>
          <h2>signUp</h2>
        </header>
        <main>
          <label for="e-mail">
            <span class="label-text">e-mail</span>
            <input placeholder="example@yandex.ru" type="text">
          </label>
          <label for="password">
            <span class="label-text">password</span>
            <input placeholder="*********" type="text">
          </label>
          <label for="confirm-password">
            <span class="label-text">confirm password</span>
            <input placeholder="*********" type="text">
          </label>
          <button class="btn reg-btn">Register</button>
        </main>
        <footer>
          <span @click="$router.push({ name: 'Authorization' })" class="footer-nav">already have an account?</span>
        </footer>
      </form>
    </div>
  </div>
</template>
  
<script>
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'RegPage',
  components: {
  },
  methods: {
    register() {

    }
  }
}
</script>

<style scoped>
form {
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: column;
}

label+label {
  margin-top: 30px;
}

label,
.label-text {
  display: flex;
  flex-direction: column;
}

.label-text {
  width: 100%;
  text-align: start;
}

.reg-btn {
  margin: 50px auto;
  width: 110px;
}

.footer-nav {
  cursor: pointer;
  color: #000;
}
</style>