angular.module('starter.services').factory('dictService', function() {

  var data = {
    //货物类型
    goods_type: [
      {"id": "11001", "name": "普货"},
      {"id": "11002", "name": "重货"},
      {"id": "11003", "name": "泡货"},
      {"id": "11054", "name": "重泡货"}
    ],
    //货物属性
    goods_attr: [
      {"id": "1", "name": "普通"},
      {"id": "2", "name": "加急"}
    ],
    //货物属性
    goods_unit: [
      {"id": "1", "name": "件"},
      {"id": "2", "name": "方"},
      {"id": "3", "name": "吨"}
    ],

    //支付方式
    pay_type: [
        {"id": "xj", "name": "现金"},
        {"id": "ZXZF", "name": "在线支付"},
        {"id": "SK", "name": "刷卡"}
    ],

    //车辆类型
    car_type: [
        {"id": "0", "name": "不限"},
        {"id": "1", "name": "三轮车"},
        {"id": "2", "name": "面包车"},
        {"id": "3", "name": "厢车"},
        {"id": "4", "name": "平板车"},
        {"id": "5", "name": "高低板车"},
        {"id": "6", "name": "高栏车"},
        {"id": "7", "name": "冷藏车"},
        {"id": "8", "name": "危险品车"},
        {"id": "9", "name": "大件车"},
        {"id": "10", "name": "半挂车"},
        {"id": "11", "name": "其它"}
    ],

    //发车班次

    trans_rate: [
        {"id": "92001", "name": "1天一班"},
        {"id": "92002", "name": "1天二班"},
        {"id": "92003", "name": "1天三班"},
        {"id": "92004", "name": "2天一班"},
        {"id": "92005", "name": "3天一班"},
        {"id": "92006", "name": "5天一班"},
        {"id": "92007", "name": "其它"}
    ],

//车辆长度
    car_length: [
        // {"id": "91000", "name": "不限",value: [0,1000]},
        {"id": "91001", "name": "6.8米及以下", value: [0,6]},
        {"id": "91002", "name": "6.8-7.2米", value:[6,7]},
        {"id": "91003", "name": "7.2-9.6米", value: [7,9]},
        {"id": "91004", "name": "9.6-13米", value: [9,13]},
        {"id": "91005", "name": "13-16米", value: [13,16]},
        {"id": "91006", "name": "16-17.5米", value: [16,18]},
        {"id": "91007", "name": "17.5米以上", value:[18,100]}
    ],

     //货物重量
    goods_weight: [
        // {"id":"","name":"不限",value: [0,9999]},
        {"id": "2", "name": "3吨以下", value: [0, 3]},
        {"id": "3", "name": "3-6吨", value: [3, 6]},
        {"id": "4", "name": "6-9吨", value: [6, 9]},
        {"id": "5", "name": "10-20吨", value: [10, 20]},
        {"id": "6", "name": "20-30吨", value: [20, 30]},
        {"id": "7", "name": "30吨以上", value: [30, 9999]}
    ],
     //装货时间
    goods_time: [
        {"id": "10001", "name": "随时"},
        {"id": "10002", "name": "今天"},
        {"id": "10003", "name": "明天"},
        {"id": "10004", "name": "后天"},
        {"id": "10005", "name": "至少3天后"}

    ],

//信息有效期
    validate_type: [
        {"id": "10101", "name": "长期有效", "day": 3650},
        {"id": "10102", "name": "1天", "day": 1},
        {"id": "10103", "name": "7天", "day": 7},
        {"id": "10104", "name": "15天", "day": 15},
        {"id": "10105", "name": "1个月", "day": 30},
        {"id": "10106", "name": "半年", "day": 182},
        {"id": "10107", "name": "1年", "day": 365}
    ],
    getDictItem:function(dict_name,item_name){
        var dict=data[dict_name];
        for (var i =0;i<=dict.length;i++) {
         if(dict[i].name==item_name) return dict[i];
        }
    }
    }
    return data;
})