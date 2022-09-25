import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMobileDetection from 'vue-mobile-detection'

const app = createApp(App).use(router)
app.use(VueMobileDetection)
app.mount('#app')
