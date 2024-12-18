import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import App from './App.vue'
import router from './router'

import {
  Divider, Fluid, FocusTrap,
  InputText, InputIcon, IconField,
  Button, ButtonGroup, Card
} from 'primevue'

const app = createApp(App)

app.use(PrimeVue, { 
  theme: { preset: Aura },
  options: { darkModeSelector: 'html' }
})

app.component('Card', Card)
app.component('Fluid', Fluid)
app.component('Button', Button)
app.component('Divider', Divider)
app.component('InputText', InputText)
app.component('InputIcon', InputIcon)
app.component('IconField', IconField)
app.component('ButtonGroup', ButtonGroup)

app.directive('focustrap', FocusTrap)

app.use(createPinia())
app.use(router)

app.mount('#app')
