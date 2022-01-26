import { createApp } from 'vue'
import App from './App.vue'
import maska from 'maska'

// import '@vuwi/plugin/vuwi.css'
import './style.css'
import 'virtual:windi.css'

createApp(App).use(maska).mount('#app')
