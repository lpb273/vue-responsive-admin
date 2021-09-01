import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index'
import Full from '@/containers/Full'
// 把下面的路由 作懒加载处理
const Login = () => import(/* webpackChunkName: "login" */ '@/views/users/Login.vue')
const Register = () => import(/* webpackChunkName: "register" */ '@/views/users/Register.vue')
const ForgetPsd = () => import(/* webpackChunkName: "forget-psd" */ '@/views/users/ForgetPsd.vue')
const NotFind = () => import(/* webpackChunkName: "notfind" */ '@/views/404.vue')

// 系统管理
const UserAdmin = () => import(/* webpackChunkName: "user-admin" */ '@/views/SystemAdmin/UserAdmin') ;
const ActivationCodeAdmin = () => import(/* webpackChunkName: "activation-code-admin" */ '@/views/SystemAdmin/ActivationCodeAdmin');
const ActivationCodeDistribution = () => import(/* webpackChunkName: "activation-code-distribution" */  '@/views/SystemAdmin/ActivationCodeDistribution');
const DealerOrder = () => import(/* webpackChunkName: "dealer-order" */ '@/views/SystemAdmin/DealerOrder');
// 经销管理
const MyActivationCode = () => import(/* webpackChunkName: "my-activation-code" */ '@/views/DistributionAdmin/MyActivationCode');
// 我的商品
const Activation = () => import(/* webpackChunkName: "activation" */ '@/views/MyGoods/Activation');
const MyGoodsActivationCode = () => import(/* webpackChunkName: "my-goods-activation-code" */ '@/views/MyGoods/MyActivationCode');
// 个人中心
const Settings = () => import(/* webpackChunkName: "settings" */ '@/views/PersonalCenter/Settings');
const Address = () => import(/* webpackChunkName: "address" */ '@/views/PersonalCenter/Address');
const Password = () => import(/* webpackChunkName: "password" */ '@/views/PersonalCenter/Password');

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/forget',
      name: 'ForgetPsd',
      component: ForgetPsd,
      meta: {
        title: '忘记密码'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/',
      redirect: '/user-admin',
      name: 'Full',
      component: Full,
      meta: {
        breadcrumb: '首页',
        requireLogin: true
      },
      children: [
        {
          path: '/user-admin',
          name: 'UserAdmin',
          component: UserAdmin,
          meta: {
            breadcrumb: '用户管理',
            title: '用户管理',
            requireLogin: true
          }
        },
        {
          path: '/activation-code-admin',
          name: 'ActivationCodeAdmin',
          component: ActivationCodeAdmin,
          meta: {
            breadcrumb: '激活码管理',
            title: '激活码管理',
            requireLogin: true
          }
        },
        {
          path: '/activation-code-distribution',
          name: 'ActivationCodeDistribution',
          component: ActivationCodeDistribution,
          meta: {
            breadcrumb: '经销商订购',
            title: '经销商订购',
            requireLogin: true
          }
        },
        {
          path: '/dealer-order',
          name: 'DealerOrder',
          component: DealerOrder,
          meta: {
            breadcrumb: '激活码分配',
            title: '激活码分配',
            requireLogin: true
          }
        },
        {
          path: '/my-activation-code',
          name: 'MyActivationCode',
          component: MyActivationCode,
          meta: {
            breadcrumb: '我的激活码',
            title: '我的激活码',
            requireLogin: true
          }
        },
        {
          path: '/activation',
          name: 'Activation',
          component: Activation,
          meta: {
            breadcrumb: '激活',
            title: '激活',
            requireLogin: true
          }
        },
        {
          path: '/my-goods-activation-code',
          name: 'MyGoodsActivationCode',
          component: MyGoodsActivationCode,
          meta: {
            breadcrumb: '我的激活码',
            title: '我的激活码',
            requireLogin: true
          }
        },
        {
          path: '/settings',
          name: 'Settings',
          component: Settings,
          meta: {
            breadcrumb: '基本设置',
            title: '基本设置',
            requireLogin: true
          }
        },
        {
          path: '/address',
          name: 'Address',
          component: Address,
          meta: {
            breadcrumb: '收获地址',
            title: '收获地址',
            requireLogin: true
          }
        },
        {
          path: '/password',
          name: 'Password',
          component: Password,
          meta: {
            breadcrumb: '修改密码',
            title: '修改密码',
            requireLogin: true
          }
        }
      ]
    },
    {
      path: '*',
      name: 'NotFind',
      component: NotFind,
      meta: {
        title: '404'
      }
    }
  ]
})

// 页面刷新时，重新赋值token
if (localStorage.getItem('token')) {
  store.commit('BIND_LOGIN', localStorage.getItem('token'))
}

// 全局导航钩子
router.beforeEach((to, from, next) => {
  if (to.meta.title) { // 路由发生变化修改页面title
    document.title = to.meta.title
  }
  if (to.meta.requireLogin) {
    if (store.getters.token) {
      if (Object.keys(from.query).length === 0) { // 判断路由来源是否有query，处理不是目的跳转的情况
        next()
      } else {
          let redirect = from.query.redirect // 如果来源路由有query
          if (to.path === redirect) { // 避免 next 无限循环
              next()
          } else {
              next({ path: redirect }) // 跳转到目的路由
          }
      }
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
