import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import i18n from './i18n'
import './assets/main.css'

const app = createApp(App)

app.use(MotionPlugin)
app.use(i18n)

app.mount('#app')
