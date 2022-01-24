import { createApp } from 'vue'
import App from './App.vue'
import maska from 'maska'
// import 'virtual:windi.css'
// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import '@vuwi/theme/dist/vuwi.css'
import './style.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'

createApp(App).use(maska).mount('#app')
