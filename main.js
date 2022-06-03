import Vue from 'vue'
import interceptor from '@/api/http.interceptor.js'
import App from './App'
import api from './api'
import util from './common/util'
import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$util = util

const app = new Vue({
	store,
    ...App
})

Vue.use(interceptor, app)
Vue.use(api, app)
app.$mount()
