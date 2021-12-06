// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'
// 引用page页面
import App from '../App.vue'
import Home from '../components/Home.vue'
import Fav from '../components/Fav.vue'
import Config from '../components/Config.vue'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
// 第三方库需要use一下才能用
Vue.use(VueRouter)


const routes = [
  {
    //catch斜杠，给router-view一个初始值，我也可以不给
    path:"/",
    redirect:"/page1"
  },
  //嵌套路由
  {
    path: '/page1',
    component: Page1,
    children:[
      //如果都不加,相当于/page1的默认值
      {
        path:'/page1/',//page1
        component:Home
      },
      //如果直接往后拼，是绝对路径
      {
        path:'/page1/fav',
        component:Fav
      },
      {
        path:'/page1/config',
        component:Config
      },
    ]
  },
  {
    path: '/page2',
    component: Page2,

  }
]

// 实例化VueRouter并将routes添加进去
const router = new VueRouter({
  // ES6简写 ，等于routes: routes
  routes
})

router.beforeEach((to, from, next) => {
  console.log("from:",from);
  console.log("to:",to);
  if(to.path == "/"){
    //截断
    next({path:"/page1/config"})
  }else{
    //正常走
    next()
  }
})

export default router
