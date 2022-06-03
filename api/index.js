const api = {
	packages (data) {
		return uni.$u.get(`/api/packages`, data)
	},
	pointsFlow (data) {
		return uni.$u.get(`/api/pointsFlow`, data)
	},
	store (data) {
		return uni.$u.get(`/api/store`, data)
	},
	goods (data) {
		return uni.$u.get(`/api/goods`, data)
	},
	levelBenefits (data) {
		return uni.$u.get(`/api/levelBenefits`, data)
	},
	member (data) {
		return uni.$u.get(`/api/member`, data)
	},
	rechargeCards (data) {
		return uni.$u.get(`/api/rechargeCards`, data)
	},
	addresses (data) {
		return uni.$u.get(`/api/addresses`, data)
	},
	attendance (data) {
		return uni.$u.get(`/api/attendance`, data)
	},
	customPoints (data) {
		return uni.$u.get(`/api/customPoints`, data)
	},
	pointsMall (data) {
		return uni.$u.get(`/api/pointsMall`, data)
	},
	attendanceList (data) {
		return uni.$u.get(`/api/attendanceList`, data)
	},
	todayAttendance (data) {
		return uni.$u.get(`/api/todayAttendance`, data)
	},
	orders (data) {
		return uni.$u.get(`/api/orders`, data)
	},
	customerCoupons (data) {
		return uni.$u.get(`/api/customerCoupons`, data)
	},
	giftCards (data) {
		return uni.$u.get(`/api/giftCards`, data)
	},
}
function fn(name, ...arg) {
	return api[name](...arg)
}
export default fn
