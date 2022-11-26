import { createWebHistory, createRouter } from "vue-router"
import Home from '@/pages/Home'
import Register from '@/pages/auth/Register'
import Authorization from '@/pages/auth/Authorization'
import PostsPage from '@/pages/posts/PostsPage'
import ChatsPage from '@/pages/chat/ChatsPage.vue'
import Chat from '@/pages/chat/Chat'
import Post from '@/pages/posts/Post'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/signUp',
        name: 'Register',
        component: Register
    },
    {
        path: '/signIn',
        name: 'Authorization',
        component: Authorization
    },
    {
        path: '/posts',
        name: 'Posts',
        component: PostsPage,
    },
    {
        path: '/posts/:id',
        name: 'Post',
        component: Post,
    },
    {
        path: '/chat',
        name: 'ChatList',
        component: ChatsPage,
    },
    {
        path: '/chat/:id',
        name: 'Chat',
        component: Chat,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

