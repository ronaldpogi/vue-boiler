import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'

import moment from 'moment';

import App from './App.vue'
import router from './router'

// global components
import DefaultLayout from './layouts/main/MainLayout.vue';
import EmptyLayout from './layouts/empty/EmptyLayout.vue';

const app = createApp(App)

app.component('main-layout', DefaultLayout);
app.component('empty-layout', EmptyLayout);

app.provide('moment', moment);

app.use(createPinia())
app.use(router)

app.mount('#app')
