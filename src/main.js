import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import toast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
const app = createApp(App)

app.use(router)
app.use(toast)

app.mount('#app')
