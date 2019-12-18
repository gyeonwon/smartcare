import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'
import ContractInfo from '@/views/ContractInfo.vue'
import SafeReport from '@/views/SafeReport.vue'
import ShockAlarm from '@/views/ShockAlarm.vue'
import CarRepair from '@/views/CarRepair.vue'
import DriveHistory from '@/views/DriveHistory.vue'
import Notice from '@/views/Notice.vue'
import MyCarLocation from '@/views/MyCarLocation.vue'
import QnA from '@/views/QnA.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Main',
    name: 'Main',
    component: Main
  },
  {
    path: '/ContractInfo',
    name: 'ContractInfo',
    component: ContractInfo
  },
  {
    path: '/SafeReport',
    name: 'SafeReport',
    component: SafeReport
  },
  {
    path: '/ShockAlarm',
    name: 'ShockAlarm',
    component: ShockAlarm
  },
  {
    path: '/CarRepair',
    name: 'CarRepair',
    component: CarRepair
  },
  {
    path: '/DriveHistory',
    name: 'DriveHistory',
    component: DriveHistory
  },
  {
    path: '/Notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/MyCarLocation',
    name: 'MyCarLocation',
    component: MyCarLocation
  },
  {
    path: '/QnA',
    name: 'QnA',
    component: QnA
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 정의된 변수가 사용 안되면 에러를 리턴해서... 로그라도 찍어 줌...
    console.log('position : ', to);
    console.log('position : ', from);
    console.log('position : ', savedPosition);
    return { x:0, y:0}
  }
})

export default router
