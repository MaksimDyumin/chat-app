<template>
  <header class="header">
    <div class="container header__content">
      <div @click="$router.push({name: 'Home'})" class="logo"><img src="@\assets\logo.png" alt=""></div>
      <nav class="nav">
        <div class="nav__item">
          <router-link :to="{name: 'ChatList'}">Chats</router-link>
        </div>
        <div class="nav__item">
          <router-link :to="{name: 'Posts'}">Posts</router-link>
        </div>
        <div class="nav__item">
          <router-link :to="{name: 'Authorization'}">SignIn</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
    name: "HelloWorld",
    props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
}
.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-left: 15px;
}
.logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav {
  margin: auto 15px;
  display: flex;

}
@media(max-width: 576px) {
  .nav {
    margin: auto 5px;
  }
}
.nav__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media(max-width: 568px) {
  .nav__item {
    width: 70px;
  }
  
}
.nav__item + .nav__item {
  margin-left: 10px;
}
.nav__item a {
  width: 100%;
  height: 100%;
  padding: 10px;
  font-weight: bold;
  text-decoration: none;
  color: black;
}
.nav__item a:focus {
  color: #33CC99;
}
</style>
