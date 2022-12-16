import { createApp } from 'vue'
import { flexible } from '@/unitls/flexible'
flexible(window, document)
import router from '@/router/index'
import ChartDefine from '@/components/chart/ChartDefine.vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)
app.component('ChartDefine', ChartDefine)
app.use(router)
app.mount('#app')

