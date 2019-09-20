import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/page/404'

import editor from '@/page/editorDemo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/',
      redirect: '/editor',
    },
    {
      path: '/editor',
      name: 'editor',
      component: editor,
      meta: {
        title: "测试编辑器公式",
      }
    },
    
  ]
})
