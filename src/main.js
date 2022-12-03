import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import '@/assets/css/index.css'
import store from '@/store'
import VueCookies from 'vue-cookies'


createApp(App).use(store).use(router).use(VueCookies, { expires: '7d'}).mount('#app')
