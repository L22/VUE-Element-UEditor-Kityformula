//ChenRuijuan main: chenruijuan@ketangpai.com

// 配置API接口地址
import router from '../router'
import myLoading from './loading'

let root = '';
if (process.env.NODE_ENV === 'production') {
  // 生产环境
  // root = '/JF/'
  root = 'http://webtest.openapi.ketangpai.com/'
  // root = 'http://pc.ketangpai.com/'
}
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  // root = '/JF/'
  // root = 'http://webtest.openapi.ketangpai.com/'
  root = 'http://172.16.123.123:80'
  // root = 'http://pc.ketangpai.com/'
}

// 引用axios
var axios = require('axios')

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

// function JQparam(obj) {
//   var str = ''
//   for (var i in obj) {
//     str += (i + '=' + obj[i] + '&')
//   }

//   if (str.length > 0) {
//     str = str.slice(0, -1)
//   }
//   return str
// }

function JQparam(obj) {
  var str = ''
  for (var i in obj) {
    if (Array.isArray(obj[i])){
      obj[i].forEach( item => {
        str += (i + '%5B%5D=' + item + '&')
      })
    }else{
      str += (i + '=' + obj[i] + '&')
    }
  }
  
  if (str.length > 0) {
    str = str.slice(0, -1)
  }
  return str
}



// 请求拦截器
axios.interceptors.request.use((config) => {
  // if(config.config.showLoading){
    //myLoading.showFullScreenLoading()
  // }
  return config
}, (error) => {
	myLoading.showFullScreenLoading()
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((response) => {
  // if (response.config.config.showLoading) {
  //   myLoading.tryHideFullScreenLoading()
  // }
  return response
}, (error) => {
  myLoading.tryHideFullScreenLoading()
  return Promise.reject(error)
})



//接口处理函数
function apiAxios(method, isForm, url, params, success, config = {
  // showLoading: true,
  isForm: isForm, //表单
  isJson: false, //json 数据
  responseType: 'json' //blob
}, failure, error) {
  //跟路径
  var baseURL = root;
  if (url && ('/' == url[0] || url.indexOf('http') >= 0)) {
    baseURL = '';
  }

  //参数 过滤
  if (params) {
    params = filterNull(params)
  }
  //发送数据 类型
  var headers = {};
  if (!config.isJson && !config.isForm) {
    headers = {
      'Content-Type': 'application/json;charset=utf-8'
    }

    if (params) {
      params = filterNull(params)
    }
  } else {
    headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    if (params && config.isForm) {
      params = JQparam(params)
    }
  }

  axios({
    method: method,
    url: url,
    responseType: config.responseType,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: baseURL,
    config: config,
    headers: headers,
    // withCredentials: true
  })
  .then(function (res) {
    if(200 === res.status){
      if ("GET" === method && !config.isForm) {
        if (undefined != res.data.status || true == config.isJson) {
          if (success) {
            success(res.data)
          }
        }else{
          if (failure) {
            failure(res.data)
          } else {
            console.log('error: ' + JSON.stringify(res.data))
          }
        }
      }else{//post
        if(undefined != res.data.status && 0 == res.data.status){
          if (success) {
            success(res.data)
          }
          // router.replace('/')
        }else{
          if (success) {
            if ("blob" == config.responseType) {
              success(res)
            } else {
              success(res.data)
            }
          }
        }
      }
    }else{
      if (failure) {
        failure(res.data)
      } else {
        console.log('error: ' + JSON.stringify(res.data))
      }
    }
  })
  .catch(function (err) {
    console.log(err);
    if(error){
      error(err.response)
    }
    let res = err.response
    if (err) {
      //console.log('api error, HTTP CODE: ' + res.status)
    }
  })
}



// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, config, failure) {
    params.token=localStorage.token
    return apiAxios('GET',false, url, params, success, config, failure)
  },
  post: function (url, params, success, config, failure, error) {
    params.token=localStorage.token
    return apiAxios('POST', true,url, params, success, config, failure, error)
  },
  put: function (url, params, success, failure) {
    params.token=localStorage.token
    return apiAxios('PUT', false, url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    params.token=localStorage.token
    return apiAxios('DELETE', false, url, params, success, failure)
  }
}
