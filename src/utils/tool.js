import moment from 'moment';
import {
  parse,
  stringify
} from 'qs';

/**
 * @description 补零
 * @author ChenRuiJuan
 * @export
 * @param {int} val : 待补数
 * @returns 补零后
 */
export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

/**
 * @description 获得日期实例
 * @author ChenRuiJuan
 * @param {string} type : today | week | month | year
 * @returns 日期实例
 */
export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') {
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment().subtract(30, 'days').format('YYYY-MM-DD'),
      moment().format('YYYY-MM-DD'),
    ];
  }

  if (type === 'year') {
    const year = now.getFullYear();

    return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
  }
}

/**
 * @description 获得字符串 字符长度
 * @author ChenRuiJuan
 * @param {string} str : 字符串
 * @returns 字符串字符长度
 */
export function charsLen(str) {
	var len = 0;
	for (var i = 0; i < str.length; ++i) {
		var c = str.charCodeAt(i);
		if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
			++len;
		}else {
			len += 2;
		}
	}
	return len;
}

/**
 * @description 字符串 省略
 * @author ChenRuiJuan
 * @param {string} str : 字符串
 * @returns 新字符串
 */
export function strOmit(str,leg) {
  if(!str || str.length <= 0){
    return ""
  }

  let len = charsLen(str)
  let newStr = ''
  if (len > leg){
    let index = 0
    for (let i = 0; i < leg - 2; ) {
      var c = str.charCodeAt(index);
      if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
        ++i
      } else {
        i += 2;
      }
      newStr += str[index++]
    }
    return newStr + '...';
  }else{
    return str
  }
}

/**
 * @description 冻结对象
 * @author ChenRuiJuan
 * @param {object} obj : 待冻结对象
 */
export function constantize(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, i) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
}


/**
 * @description 深拷贝
 * @author ChenRuiJuan
 * @param {object} p : 要拷贝的对象
 * @param {object} c : 目标对象(缺省 {})
 * @returns 拷贝后生成的新对象
 */
export function deepCopy(p, c) {
  var c = c || {};
  for (var i in p) {
    if (typeof p[i] === 'object') {
      c[i] = (p[i].constructor === Array) ? [] : {};
      deepCopy(p[i], c[i]);
    } else {
      c[i] = p[i];
    }
  }
  return c;
}


/**
 * @description 继承
 * @author ChenRuiJuan
 * @param {object} Child  : 子对象
 * @param {object} Parent ：父对象
 */
export function myExtend(Child, Parent) {
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
}

/**
 * @description 数组快速排序
 * @author ChenRuiJuan
 * @param {Array} arr : 待排序数组
 * @returns 排序后的新数组
 */
export function quickSort(arr) {
  if (arr.length <= 1) { return arr; }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

/**
 * @description 获取url中的参数
 * @author ChenRuiJuan
 * @returns 要获取的参数值
 */
export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

/**
 * @description
 * @author ChenRuiJuan
 * @param {string} [path='']
 * @param {*} [query={}]
 * @returns
 */
export function getQueryPath(path = '', query = {}) {
  const search = stringify(query);
  if (search.length) {
    return `${path}?${search}`;
  }
  return path;
}

function accMul(arg1, arg2) {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();
  m += s1.split('.').length > 1 ? s1.split('.')[1].length : 0;
  m += s2.split('.').length > 1 ? s2.split('.')[1].length : 0;
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / 10 ** m;
}

/**
 * @description 转大写钱
 * @author ChenRuiJuan
 * @param {*} n
 * @returns
 */
export function digitUppercase(n) {
  const fraction = ['角', '分'];
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟', '万']
  ];
  let num = Math.abs(n);
  let s = '';
  fraction.forEach((item, index) => {
    s += (digit[Math.floor(accMul(num, 10 * 10 ** index)) % 10] + item).replace(/零./, '');
  });
  s = s || '整';
  num = Math.floor(num);
  for (let i = 0; i < unit[0].length && num > 0; i += 1) {
    let p = '';
    for (let j = 0; j < unit[1].length && num > 0; j += 1) {
      p = digit[num % 10] + unit[1][j] + p;
      num = Math.floor(num / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }

  return s
    .replace(/(零.)*零元/, '元')
    .replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
}

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

/**
 * @description 判断是否为url
 * @author ChenRuiJuan
 * @param {string} path
 * @returns true:是url   false:不是url
 */
export function isUrl(path) {
  return reg.test(path);
}


/**
 * @description 日期格式化
 * @author ChenRuiJuan
 * @param {object} date : 待转格式化日期对象（缺省 当前日期）
 * @returns 格式化的日期对象
 * {
 *    year: 年,
 *    monthNoFill: 月（ 不补零）,
 *    month: 月（ 补零）,
 *    dayNoFill: 日（ 不补零）,
 *    day: 日（ 补零）,
 *    hourNoFill: 时（ 不补零 24 小时制）,
 *    hour: 时（ 补零 24 小时制）,
 *    hour12NoFill: 时（ 不补零 12 小时制）,
 *    hour12: 时（ 补零 12 小时制）,
 *    minuteNoFill: 分（ 不补零）,
 *    minute: 分（ 补零）,
 *    secondNoFill: 秒（ 不补零）,
 *    second: 秒（ 补零）,
 *    state: AM / PM,
 *    week: 星期 一 / 二 / 三 / 四 / 五 / 六 / 日 *
 * }
 */
export function formatDate(date) {
  //无参数 默认现在
  date = date ? date : new Date();
  //时间对象
  var dateObj = {};
  //年
  dateObj.year = date.getFullYear();

  dateObj.monthNoFill = date.getMonth() + 1;
  //月 补零
  dateObj.month = dateObj.monthNoFill >= 10 ? dateObj.monthNoFill : ("0" + dateObj.monthNoFill);

  dateObj.dayNoFill = date.getDate();
  //日 补零
  dateObj.day = dateObj.dayNoFill >= 10 ? dateObj.dayNoFill : ("0" + dateObj.dayNoFill);

  dateObj.hourNoFill = date.getHours();
  if(dateObj.hourNoFill > 12){
    dateObj.state = 'PM';
    dateObj.hour12NoFill = dateObj.hourNoFill - 12;
  }else{
    dateObj.state = 'AM';
    dateObj.hour12NoFill = dateObj.hourNoFill;
  }
  //时 补零
  dateObj.hour = dateObj.hourNoFill >= 10 ? dateObj.hourNoFill : ("0" + dateObj.hourNoFill);
  dateObj.hour12 = dateObj.hour12NoFill >= 10 ? dateObj.hour12NoFill : ("0" + dateObj.hour12NoFill);

  dateObj.minuteNoFill = date.getMinutes();
  //分 补零
  dateObj.minute = dateObj.minuteNoFill >= 10 ? dateObj.minuteNoFill : ("0" + dateObj.minuteNoFill);

  dateObj.secondNoFill = date.getSeconds();
  //秒 补零
  dateObj.second = dateObj.secondNoFill >= 10 ? dateObj.secondNoFill : ("0" + dateObj.secondNoFill);

  //星期
  var week = date.getDay();
  if (0 == week) {
    dateObj.week = "日";
  } else if (1 == week) {
    dateObj.week = "一";
  } else if (2 == week) {
    dateObj.week = "二";
  } else if (3 == week) {
    dateObj.week = "三";
  } else if (4 == week) {
    dateObj.week = "四";
  } else if (5 == week) {
    dateObj.week = "五";
  } else if (6 == week) {
    dateObj.week = "六";
  }

  return dateObj;
}

/**
 * @description 日期转字符串（ 格式化）
 * @author ChenRuiJuan
 * @param {string} dateType : 要格式化的日期类型（1 日, 2 月, 3年）
 * @param {string} str ： 格式化拼接符（缺省 /）
 * @param {object} date : 待转日期对象（缺省 当前日期）
 * @returns 格式化的日期字符串
 * eg:
 *      dateToFormatString(1, '-') => '2018-01-01'
 *      dateToFormatString(2, '/') => '2018/01'
 *      dateToFormatString(3) => '2018'
 */
export function dateToFormatString(dateType, str, date) {
  dateType = dateType ? Number(dateType) : 1;
  str = str ? str : '/';
  date = date ? date : new Date();

  var dateObj = formatDate(date);
  var res = dateObj.year + str + dateObj.month + str + dateObj.day + " " + dateObj.hour + ":" + dateObj.minute + ":" + dateObj.second;

  switch (dateType){
    case 1 :
      res = dateObj.year + str + dateObj.month + str + dateObj.day;
      break;
    case 2 :
      res = dateObj.year + str + dateObj.month;
      break;
    case 3 :
      res = dateObj.year;
      break;
  }
  return res;
}

/**
 * @description 数据处理（ 格式化）
 * @author ChenRuiJuan
 * @param {*} val  : 要格式化的数据 （val | arr）
 * @param {string} str ： 格式化提替代符（缺省 --）
 * @returns 格式化后的新数据
 * eg:
 *      dealData("") => "--"
 *      dealData([undefined, null, '', 0], '') => ['', '', '', 0]
 */
export function dealData(val, str) {
  var str = str ? str : "--";
  var isArr = Array.isArray(val);
  if(isArr){
    var newArr = deepCopy(val);
    var leg = 0;
    for( i in newArr){
      ++leg;
    }
    newArr.length = leg;
    newArr = Array.prototype.slice.call(newArr);
    for(var i = 0; i < newArr.length; ++i){
      if(undefined == newArr[i] || null == newArr[i] || '' == newArr[i]){
        newArr[i] = str;
      }
    }
    return newArr;
  }else{
    if(undefined == val || null == val || '' == val){
      return str;
    }
  }
}

function numToDecimal(x, n) {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return '--';
  }
  var multiple = Math.pow(10, n)
  var f = Math.round(x * multiple) / multiple;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + n) {
    s += '0';
  }
  return s;
}

/**
 * @description 保留小数位
 * @author ChenRuiJuan
 * @param {*} x  : 要处理的数据 （val | arr）
 * @param {number} [n=2] : 位数
 * @returns
 */
export function toDecimal(x, n = 2) {
  var isArr = Array.isArray(x);
  if (isArr) {
    var newArr = [];
    x.forEach(function (value, key) {
      newArr.push(numToDecimal(value, n))
    })
    return newArr

  } else {
    return numToDecimal(x, n)
  }
}

/**
 * @description 判断是否为数字
 * @author ChenRuiJuan
 * @param {*} x  : 待判断的数据
 * @returns  boolean
 */
export function isNumber(val) {
  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }
}
//echarts 千分符
/*item = {
  name: barOption.legend.data[1],
  type: "line",
  data: yData[1],
  yAxisIndex: 1,
  itemStyle : {
    normal:{
      lineStyle:{
        width:3
      },
      label : {
        show: true,
        position:'bottom',
        //-----------------------------------------------
        formatter:function(obj){
          var c = obj['value'];
          return (c || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
        },
        //-----------------------------------------------------------
        offset:[0,10]
      }
    }
  }
};*/


