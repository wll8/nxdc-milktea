import Vue from 'vue'
import interceptor from '@/api/http.interceptor.js'
import App from './App'
import api from './api'
import util from './common/util'
import store from './store'
import uView from "uview-ui"
Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$util = util
Vue.prototype.$api = api

const app = new Vue({
		store,
		...App
})
if (window) {
		window.$vm = app
}
if (wx) {
		wx.$vm = app
}
Vue.use(interceptor, app)
app.$mount()
