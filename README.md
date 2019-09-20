# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies( 通过淘宝镜像下载依赖)
npm run i  

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
 				Vue规范
  
  一、文件夹结构化规范

   ├── index.html                      入口页面
   ├── build                           构建脚本目录
   │   ├── build.js                        生产环境构建脚本
   │   ├── utils.js                        构建相关工具方法
   │   ├── webpack.base.conf.js            wabpack基础配置
   │   ├── webpack.dev.conf.js             wabpack开发环境配置
   │   └── webpack.prod.conf.js            wabpack生产环境配置
   ├── config                          项目配置
   │   ├── dev.env.js                      开发环境变量
   │   ├── index.js                        项目配置文件
   │   ├── prod.env.js                     生产环境变量
   │
   ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
   ├── src                             项目源码目录    
   │   ├── main.js                         入口js文件
   │   ├── App.vue                         根组件
   │   ├── config                      公共js (elementUi、接口地址、配置文件)
   │   ├── assets                          资源目录，这里的资源会被wabpack构建
   │   │   ├── css                         公共样式文件目录
   │   │   ├── js                          公共js文件目录
   │   │   └── img                      图片存放目录
   │   ├── routes                          前端路由
   │   │   └── index.js
   │   ├── style                          公共css目录
   │   └── page                           页面目录
   │       ├── common                     公共组件目录
   │       └── homepage                   页面目录
   │       └── mixins                     公共js
   └── static                          纯静态资源，不会被wabpack构建。


 二、 vue文件基本结构

	  <template>
          <div>
            <!--必须在div中编写页面-->
          </div>
        </template>
        <script>
          export default {
            components : {
            },
            data () {
              return {
              }
            },
            methods: {
            },
            mounted() {
        
            }
         }
        </script>
        <!--声明语言，并且添加scoped-->
        <style lang="sass" scoped>
        </style>
 
 三、 注释规范

    1.公共组件使用说明
	2.各组件中重要函数或者类说明
	3.复杂的业务逻辑处理说明
	4.特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的hack、使用了某种算法或思路等需要进行注释描述
	5.注释块必须以/**（至少两个星号）开头**/；
	6.单行注释使用//；

四、  编码规范

       1.使用ES6风格编码源码
        定义变量使用let ,定义常量使用const
        使用export ，import 模块化
       2.组件 props 原子化
        提供默认值
        使用 type 属性校验类型
        使用 props 之前先检查该 prop 是否存在
       3.避免 this.$parent
       4.谨慎使用 this.$refs
       5.无需将 this 赋值给 component 变量
       6.调试信息console.log() debugger 使用完及时删除

五、组件命名规范

	1. 有意义的名词、简短、具有可读性 
	2. 以小写开头，采用短横线分割命名 
	3. 公共组件命名以公司名称简拼为命名空间(app-xx.vue) 
	4. 文件夹命名主要以功能模块代表命名

六、vue 方法放置顺序
	
	components  模板
	props	    父子组件传递信息
	data
	created
	mounted
	activited
	update
	beforeRouteUpdate
	metods
	filter
	computed
	watch

七  HTML 规范
	
     1.结构顺序和视觉顺序基本保持一致
     2.结构，表现，行为三者分离，避免内联
     3.保持良好的简洁的树形结构
     4.结构上如果可以并列书写，就不要嵌套。
		如果可以写成<div></div><div></div>那么就不要写成<div><div></div></div>

     5.如果结构已经可以满足视觉和语义的要求，那么就不要有额外的冗余的结构。
		比如<div><h2></h2></div>已经能满足要求，那么就不要再写成<div><div><h2></h2></div></div>

     6.一个标签上引用的类名不要过多，越少越好。
		比如不要出现这种情况：<div class =“class1 class2 class3 class4”> </ div>

     7.对于一个语义化的内部标签，应尽量避免使用的className。
		比如在这样一个列表中，li标签中的itm应去除：<ul class="m-help"><li class="itm"></li><li class="itm"></li></ul>

八  CSS 规范
	
	1.命名规则
		使用类选择器，放弃ID选择器
		NEC特殊字符："-"连字符
		分类的命名方法：使用单个字母+"-"为前缀
		命名应简约而不失语义
	2.代码格式
		选择器、属性和值都使用小写
		单行写完一个选择器定义
		最后一个值也以分号结尾
		省略值为0时的单位
		使用单引号
		根据属性的重要性按顺序书写
		注释格式：/* 注释文字 */
		选择器顺序
			请综合考虑以下顺序依据：
			从大到小（以选择器的范围为准）
			从低到高（以等级上的高低为准）
			从先到后（以结构上的先后为准）
			从父到子（以结构上的嵌套为准）

九 工程师规范
	
	了解产品和设计
	提出疑问和见解
	技术调研和培训
	预算人力和时间
	职责任务
	页面开发
	提取剥离
	自测联调
	提交验收
	交接说明
	总结分享
	变更维护
    