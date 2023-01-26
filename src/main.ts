import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import './assets/styles/base.css';

import * as Chess from "electron-sim-compile";
console.log(Chess.Figure.new());

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
