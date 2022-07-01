/*
 * @Description:
 * @Author: Moobye
 * @Date: 2021-09-18 12:28:10
 * @LastEditTime: 2021-09-19 13:49:04
 * @LastEditors: Moobye
 */
/*
 * cargo 说明：
 * key代表类目/子类目名称
 * value 为 number时，代表这个类目的数量，为object 时，代表下一层货物的集合，最多嵌套两层
 * {
 *  productA:{  // 代表货物的类目名称
 *    a:1, // 1 代表子类目 a 的数量
 *    b:2,
 *    c:{   // c 代表货物的子类名称
 *      c1:1, // c1代表货物的子类名称
 *    }
 *   }，
 *  productB:{
 *      e:6
 *   }
 * }
 *
 * 爆仓情况：如转入 {productA:{a:3,c:1}} 转出 {productA:{a:4}},就会发生子类目a爆仓，此时要返回报错。
 *
 */

class Depository {
  /**
   * @param options
   */
  constructor(options) {}
  // 转入货物
  transferIn(cargo) {}
  // 转出货物
  transferOut(cargo) {}
}

class Depos {
  constructor(params = {}) {
    this.store = this.flat(params);
  }

  flat(params = {}) {
    var final = {};
    function baseFlat(params, baseKey) {
      Object.keys(params).forEach((key) => {
        let value = params[key];
        let finalKey = baseKey ? `${baseKey}.${key}` : key;
        if (typeof value === "object" && value !== null) {
          baseFlat(value, finalKey);
        } else {
          final[finalKey] = value;
        }
      });
      console.log(`final`, final)
      return final;
    }
    return baseFlat(params);
  }

  transformIn(params) {
    let flatParams = this.flat(params);
    Object.keys(flatParams).forEach((key) => {
      let value = flatParams[key];
      this.store[key] = this.store[key] ? this.store[key] + value : value;
    });
    console.log('试试', this.store);
  }

  transformOut(params) {
    console.log(`this.store`, this.store)
    let flatParams = this.flat(params);
    // console.log("flatParams", flatParams);
    Object.keys(flatParams).forEach((key) => {
      if (flatParams[key] > (this.store[key] || 0)) {
        console.log(key + "爆仓了");
        throw Error(`${key}已爆仓`);
      } else {
        this.store[key] -= flatParams[key];
      }
    });
    console.log('out', this.store);
  }
}

var c = {
  a: 100,
  b: {
    c: {
      d: 400,
    },
    f: 200,
    g: null,
  },
};
var b = {
  a: 100,
  c: {
    d: 234,
  },
};
var deps = new Depos(b);
deps.transformIn(c);
deps.transformOut({
  b: {
    c: {
      d: 200,
    },
    f: 100,
  },
  a: 200,
});
