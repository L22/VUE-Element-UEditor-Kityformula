// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import requestUrl from './config/requestUrl'
import store from './store/store' // 引入stor

import Bus from './utils/bus'
window.Bus = Bus

import './config/elementUi'
import config from './config/index'
import $ from 'jquery'
//时间
import moment from 'moment';
import 'moment/locale/zh-cn';

Vue.config.productionTip = false

window.Moment = moment

import {WBT} from "./assets/js/websocket";
window.WBT = WBT
window.lianjie = 'http://webtest.pc.ketangpai.com/'
//上传附件或者图片
window.apiLink = 'http://172.16.123.125:80/'
// window.d_apiLink = 'http://uploadfile.webtest.pc.ketangpai.com'  //测试本地上传

// window.apiLink = 'http://webtest.openapi.ketangpai.com/'
// window.newWeb ="http://localhost:8080/#/"
window.newWeb = "http://172.16.123.123:8080/#/"


// var timer = null
// var addInterval = function(){
//   timer = setInterval(function () {
//     checkDevTools()
//   }, 4000);
// }

// var checkDevTools = function () {
//   function doCheck(a) {
//     if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
//       (function () {}
//         ["constructor"](router.replace('404'))())
//     } else {
//       (function () {}
//         ["constructor"](router.replace('404'))())
//     }
//     doCheck(++a)
//   }
//   try {
//     doCheck(0)
//   } catch (err) {}
// };

router.beforeEach(function (to, from, next) {
  let isOpen = false
  if ("NotFound" == to.name){
    // clearInterval(timer)
    // timer = null
    next();
  }else{
    // if (!timer) {
    //   addInterval()
    // }
    var re = /x/;
    console.log(re)
    re.toString = function () {
      router.replace('404')
      isOpen = true
      return ''
    }

    if (!isOpen){
      next();
    }
  }
})


// Bus.$emit('noticeListDOM');

 // 引入基本模板
 let echarts = require('echarts/lib/echarts')
 // 引入柱状图组件 折线图组件 饼图组件
 require('echarts/lib/chart/bar')
 require('echarts/lib/chart/line')
 require('echarts/lib/chart/pie')
 require('echarts/lib/chart/radar')
 require('echarts/lib/chart/pictorialBar')
 // 引入 图例组件和提示框
 require('echarts/lib/component/legend')
 require('echarts/lib/component/tooltip')
 Vue.prototype.$echarts = echarts
import myOptions from './utils/echarts/options-4.0.4.js'
window.myOptions = myOptions
// 将API方法绑定到全局
Vue.prototype.$api = api
Vue.prototype.$config = config

if (process.env.NODE_ENV === 'production') {
  // 生产环境
  Vue.prototype.$pathUrl = requestUrl.production
} else if (process.env.NODE_ENV === 'development') {
  // 开发环境
  Vue.prototype.$pathUrl = requestUrl.production
  //Vue.prototype.$pathUrl = requestUrl.development
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
