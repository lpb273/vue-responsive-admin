// axios 配置
import axios from 'axios';
import store from '../store';
import router from '../router';
import { Message } from 'element-ui';

//创建 axios 实例
let instance = axios.create({
  baseURL: 'https://127.0.0.1:8008/api/',
  timeout: 5000, // 请求超过5秒即超时返回错误
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
})

instance

instance.interceptors.request.use(
  config => {
    if (store.getters.token) { // 若存在token，则每个Http Header都加上token
      config.headers.Authorization = `token ${store.getters.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit('BIND_LOGOUT')
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          break
        default:
          Message.error(`服务器出错，请稍后重试:${JSON.stringify(error)}`);
      }
    }
    Message.error(`服务器出错，请稍后重试:${JSON.stringify(error.response)}`);
    return Promise.reject(error.response) // 返回接口返回的错误信息
  }
)

export default instance;
