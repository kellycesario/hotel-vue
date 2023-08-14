import Hotjar from '@hotjar/browser'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createVuestic } from 'vuestic-ui'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)
const siteId = 3612906
const hotjarVersion = 6

app.use(createVuestic())
app.use(pinia)
app.use(router)
app.mount('#app')
Hotjar.init(siteId, hotjarVersion)
