const pointsFlow = require(`./points-flow`)
const packages = require(`./packages`)
const store = require(`./store`)
const goods = require(`./goods`)
const levelBenefits = require(`./level-benefits`)
const member = require(`./member`)
const rechargeCards = require(`./rechargeCards`)
const addresses = require(`./addresses`)
const attendance = require(`./attendance`)
const customPoints = require(`./custom-points`)
const pointsMall = require(`./points-mall`)
const attendanceList = require(`./attendance-list`)
const todayAttendance = require(`./today-attendance`)
const orders = require(`./orders`)
const customerCoupons = require(`./customer-coupons`)
const giftCards = require(`./gift-cards`)

const { wrapApiData } = require(`../util.js`)

/** @type {import('mockm/@types/config').Config} */
module.exports = util => {
  const {
    libObj: { mockjs },
  } = util
  return {
    api: {
      'get /api/pointsFlow': wrapApiData({data: pointsFlow}),
      'get /api/packages': wrapApiData({data: packages}),
      'get /api/store': wrapApiData({data: store}),
      'get /api/goods': wrapApiData({data: goods}),
      'get /api/levelBenefits': wrapApiData({data: levelBenefits}),
      'get /api/member': wrapApiData({data: member}),
      'get /api/rechargeCards': wrapApiData({data: rechargeCards}),
      'get /api/addresses': wrapApiData({data: addresses}),
      'get /api/attendance': wrapApiData({data: attendance}),
      'get /api/customPoints': wrapApiData({data: customPoints}),
      'get /api/pointsMall': wrapApiData({data: pointsMall}),
      'get /api/attendanceList': wrapApiData({data: attendanceList}),
      'get /api/todayAttendance': wrapApiData({data: todayAttendance}),
      'get /api/orders': wrapApiData({data: orders}),
      'get /api/customerCoupons': wrapApiData({data: customerCoupons}),
      'get /api/giftCards': wrapApiData({data: giftCards}),

      // 创建接口并使用 mockjs 生成数据
      'get /api/test': wrapApiData(mockjs.mock({
        'data|3-7': [{
          userId: `@id`,
          userName: `@cname`,
        }],
      })),
    },
  }
}
