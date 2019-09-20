import config from './index'

let limit = config.urlPrefix
if (limit.length > 0){
  limit += '/'
}
//生产
const production = {
  logout: 'logout', //权限 路径
  login: 'login',
  limit: "permission/queryUserPermission",
  wechatApiGetAppName: limit + "SummaryApi/schedule", //h5测试ktp

}

//开发
const development = {
  logout: 'logout',
  login: 'login',


  wechatApiGetAppName: "SummaryApi/schedule", //h5测试ktp
  // wechatApiGetAppName: "ResourceApi/getResourceList", //pc测试ktp
  getChapteridList: 'Vueproject/MoocApi/getCourseInfo',  //获取章节列表
}

export default {
  production,
  development
}