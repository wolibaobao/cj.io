import axios from 'axios'
import Router from '../../src/router/index.js'
import {
  Message,
  Loading
} from 'element-ui';
import {
  MessageBox
} from 'element-ui';

let loading //定义loading变量

function startLoading() { //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading() { //使用Element loading-close 方法
  setTimeout(() => {
    loading.close();
  }, 100);
}

// axios.defaults.timeout = 1000;           //超时时间
// axios.defaults.retry = 3;                 //请求次数
// axios.defaults.retryDelay = 1000;         //请求间隙

axios.interceptors.request.use(function(config) { // 每次请求时会从localStorage中获取token
  startLoading()
  // console.log(config)
  let token = localStorage.getItem('token')
  if (token) {
    config.headers.token = localStorage.getItem('token')
  }
  return config
}, function(error) {
  return Promise.reject(error)
})

/* 响应拦截器 */
axios.interceptors.response.use(function(response) { // ①10010 token过期（30天） ②10011 token无效
  // console.log(response.data.msg)
    if(response.data.msg=='权限不足'){
      console.log(Router.push({name:'qxbz'}))
    }
  if(response.data.login==false){
     localStorage.clear()
     Message.error('登录已过期，请重新登录')
     Router.push({name:'login'})
  }
  endLoading()

  return response
}, function(error) {
  // console.log(1)
  endLoading()
  // alert('请求超时')
  return Promise.reject(error)
})

export default axios
