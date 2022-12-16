import { createApp } from 'vue'
import { flexible } from '@/unitls/flexible'
flexible(window, document)
import router from '@/router/index'
import ChartDefine from '@/components/chart/ChartDefine.vue'
import pageList from '@/components/chart/pageList.vue'
import CardChunk from '@/components/chart/CardChunk.vue'
import '@/assets/css/global.less'
import App from './App.vue'
const app = createApp(App)
app.component('ChartDefine', ChartDefine)
app.component('pageList', pageList)
app.component('CardChunk', CardChunk)
app.use(router)
app.mount('#app')

