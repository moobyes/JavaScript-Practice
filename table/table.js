/*
 * @Description:
 * @Author: Moobye
 * @Date: 2022-06-28 10:31:40
 * @LastEditTime: 2022-06-28 10:38:38
 * @LastEditors: Moobye
 */
const oldArr = [
  {
    hotelId: 182333,
    hotelName: "OYO 902019 三桥商务宾馆",
    otaHotelId: "14536301",
    marketingResources: [
      {
        marketingEventId: 24,
        eventCode: "43846",
        eventName: "【阶梯连住】7天享7折，14天享6折，28天享5折",
        roomTypes: "26,30,38",
      },
      {
        marketingEventId: 56,
        eventCode: "15180",
        eventName: "【时令全覆盖】时令特惠，一年四季相伴有你",
        roomTypes: "26,30,38",
      },
    ],
  },
  {
    hotelId: 182333,
    hotelName: "OYO 902019 三桥商务宾馆",
    otaHotelId: "14536301",
    marketingResources: [
      {
        marketingEventId: 24,
        eventCode: "43846",
        eventName: "【阶梯连住】7天享7折，14天享6折，28天享5折",
        roomTypes: "26,30,38",
      },
      {
        marketingEventId: 56,
        eventCode: "15180",
        eventName: "【时令全覆盖】时令特惠，一年四季相伴有你",
        roomTypes: "26,30,38",
      },
    ],
  },
  {
    hotelId: 508913,
    hotelName: "OYO 936208 柏丽湾酒店",
    otaHotelId: "5905795",
    marketingResources: [
      {
        marketingEventId: 56,
        eventCode: "15180",
        eventName: "【时令全覆盖】时令特惠，一年四季相伴有你",
        roomTypes: "20, 29, 26, 37, 30, 28",
      },
      {
        marketingEventId: 48,
        eventCode: "13877",
        eventName:
          "【周末特惠】灵活配比周末折扣，牢牢抓住周末流量，成为商圈顶流必备营销工具",
        roomTypes: "20, 29, 26, 37, 30, 28",
      },
      {
        marketingEventId: 128,
        eventCode: "47152",
        eventName: "【套餐价到】日历房套餐抢先报，订单流量全都要",
        roomTypes: "20, 29, 26, 37, 30, 28",
      },
    ],
  },
  {
    hotelId: 508913,
    hotelName: "OYO 936208 柏丽湾酒店",
    otaHotelId: "5905795",
    marketingResources: [
      {
        marketingEventId: 56,
        eventCode: "15180",
        eventName: "【时令全覆盖】时令特惠，一年四季相伴有你",
        roomTypes: "20, 29, 26, 37, 30, 28",
      },
      {
        marketingEventId: 48,
        eventCode: "13877",
        eventName:
          "【周末特惠】灵活配比周末折扣，牢牢抓住周末流量，成为商圈顶流必备营销工具",
        roomTypes: "20, 29, 26, 37, 30, 28",
      },
      {
        marketingEventId: 128,
        eventCode: "47152",
        eventName: "【套餐价到】日历房套餐抢先报，订单流量全都要",
        roomTypes: "20, 29, 26, 37, 30, 28",
      },
    ],
  },
  {
    hotelId: 508913,
    hotelName: "OYO 936208 柏丽湾酒店",
    otaHotelId: "5905795",
    marketingResources: [
      {
        marketingEventId: 56,
        eventCode: "15180",
        eventName: "【时令全覆盖】时令特惠，一年四季相伴有你",
        roomTypes: "20, 29, 26, 37, 30, 28",
      },
      {
        marketingEventId: 48,
        eventCode: "13877",
        eventName:
          "【周末特惠】灵活配比周末折扣，牢牢抓住周末流量，成为商圈顶流必备营销工具",
        roomTypes: "20, 29, 26, 37, 30, 28",
      },
      {
        marketingEventId: 128,
        eventCode: "47152",
        eventName: "【套餐价到】日历房套餐抢先报，订单流量全都要",
        roomTypes: "20, 29, 26, 37, 30, 28",
      },
    ],
  },
  {
    hotelId: 36797,
    hotelName: "OYO 8172 哥尔曼酒店",
    otaHotelId: "2131873",
    marketingResources: [
      {
        marketingEventId: 45,
        eventCode: "20161",
        eventName:
          "【健康守护】酒店95折起，用户安心预订(酒店需做到健康守护要求)",
        roomTypes: "34, 29, 26, 38, 30, 20",
      },
    ],
  },
  {
    hotelId: 38815,
    hotelName: "OYO 82260 晶都商务酒店",
    otaHotelId: "1713570",
    marketingResources: [
      {
        marketingEventId: 45,
        eventCode: "20161",
        eventName:
          "【健康守护】酒店95折起，用户安心预订(酒店需做到健康守护要求)",
        roomTypes: "26, 29, 30, 20, 33",
      },
    ],
  },
  {
    hotelId: 123005,
    hotelName: "OYO 803568 龙腾酒店",
    otaHotelId: "4661614",
    marketingResources: [
      {
        marketingEventId: 47,
        eventCode: "13159",
        eventName: "【微信会员专享】微信会员专享价，全国酒店享8折",
        roomTypes: "33, 30, 34, 26, 29, 20",
      },
    ],
  },
  {
    hotelId: 125608,
    hotelName: "OYO 810692 欧诗曼酒店",
    otaHotelId: "4662014",
    marketingResources: [
      {
        marketingEventId: 47,
        eventCode: "13159",
        eventName: "【微信会员专享】微信会员专享价，全国酒店享8折",
        roomTypes: "33, 36, 30, 20, 26, 38, 37",
      },
    ],
  },
  {
    hotelId: 40625,
    hotelName: "OYO 86890 宸欣如意酒店",
    otaHotelId: "1577997",
    marketingResources: [
      {
        marketingEventId: 47,
        eventCode: "13159",
        eventName: "【微信会员专享】微信会员专享价，全国酒店享8折",
        roomTypes: "37, 30, 26, 20, 34, 29",
      },
    ],
  },
];


// 把源数据先变成目标数据的规则
let oldDataRule = []
oldArr.forEach(el => {
  let oldObj = {
    hotelId: el.hotelId,
    hotelName: el.hotelName,
    otaHotelId: el.otaHotelId,
    marketingResources:[],
  }
  let marketingResources = [...el.marketingResources]
  oldObj.marketingResources.push(...marketingResources)
  oldDataRule.push(oldObj)
})

// console.log('oldDataRule', oldDataRule)

function filterList (oldArr) {

  let newData = []
  let newObj = {}
  oldArr.forEach((el, i) => {
    if (!newObj[el.hotelId]) {
      newData.push(el);
      newObj[el.hotelId] = true;
    } else {
      newData.forEach(el => {
        if (el.hotelId === oldArr[i].hotelId) {
          el.marketingResources = el.marketingResources.concat(oldArr[i].marketingResources);
        }
      })
    }
  })
  return newData;
}


console.log(newData); // 目标数据