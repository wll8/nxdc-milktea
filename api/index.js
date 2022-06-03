const install = (Vue, vm) => {
	const table = {
		packages (data) {
			return vm.$u.get(`/api/packages`, data)
		},
		store (data) {
			return vm.$u.get(`/api/store`, data)
		},
		goods (data) {
			return vm.$u.get(`/api/goods`, data)
		},
		levelBenefits (data) {
			return vm.$u.get(`/api/levelBenefits`, data)
		},
		member (data) {
			returnvm.$u.get(`/api/member`, data)
		},
		rechargeCards (data) {
			return vm.$u.get(`/api/rechargeCards`, data)
		},
		addresses (data) {
			return vm.$u.get(`/api/addresses`, data)
		},
		attendance (data) {
			return vm.$u.get(`/api/attendance`, data)
		},
		customPoints (data) {
			return vm.$u.get(`/api/customPoints`, data)
		},
		pointsMall (data) {
			return vm.$u.get(`/api/pointsMall`, data)
		},
		attendanceList (data) {
			return vm.$u.get(`/api/attendanceList`, data)
		},
		todayAttendance (data) {
			return vm.$u.get(`/api/todayAttendance`, data)
		},
		orders (data) {
			return vm.$u.get(`/api/orders`, data)
		},
		customerCoupons (data) {
			return vm.$u.get(`/api/customerCoupons`, data)
		},
		giftCards (data) {
			return vm.$u.get(`/api/giftCards`, data)
		},
	}
	Vue.prototype.$api = (apiName, ...arg) => {
		return table[apiName](...arg)
	}
}
export default {
  install,
}
