import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import router from './router'

import {
  InputText, InputIcon, IconField,
  Button, SpeedDial
} from 'primevue'

const app = createApp(App)

app.use(PrimeVue, { 
  theme: { preset: Aura },
  options: { darkModeSelector: 'html' }
})
app.component('Button', Button)
app.component('SpeedDial', SpeedDial)
app.component('InputText', InputText)
app.component('InputIcon', InputIcon)
app.component('IconField', IconField)

app.use(createPinia())
app.use(router)

app.mount('#app')
