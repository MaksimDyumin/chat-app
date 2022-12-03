<template>
  <div class="page-container">
    <div class="auth-form-container">
      <form @submit.prevent="auth">
        <header>
          <h2>SignIn</h2>
        </header>
        <article>
          <label for="e-mail">
            <span class="label-text">e-mail</span>
            <input v-model="email" placeholder="example@yandex.ru" type="text">
          </label>
          <label for="password">
            <span class="label-text">password</span>
            <input v-model="password" placeholder="*********" type="text">
          </label>
          <button class="btn reg-btn">Register</button>
        </article>
        <footer>
          <span @click="$router.push({ name: 'Register' })" class="footer-nav">No account?</span>
        </footer>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'AuthPage',
  components: {
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async auth() {
      const user = {
        email: this.email,
        password: this.password
      }
      let res = await this.$store.dispatch('user/auth', user)
      if(res === undefined) {
        this.$router.push({name: 'Home'})
      }
    },
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

article {
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
  margin: 40px auto;
  width: 110px;
}

.footer-nav {
  cursor: pointer;
}
</style>