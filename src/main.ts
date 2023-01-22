import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/base.css';
import * as wasm from "electron-sim-compile";

wasm.greet();
wasm.factorial(50);
createApp(App).mount('#app')
