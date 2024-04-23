/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import { createApp } from 'vue'

import "aos/dist/aos.css";

const app = createApp(App)

registerPlugins(app)
app.mount('#app')