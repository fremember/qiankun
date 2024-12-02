import { createApp } from 'vue'
// import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import { registerMicroApps, start } from 'qiankun'

import App from './App.vue'

/*
// 重写函数
const _wr = function (type: string) {
  const orig = (window as any).history[type]
  return function () {
    const rv = orig.apply(this, arguments)
    const e: any = new Event(type)
    e.arguments = arguments
    window.dispatchEvent(e)
    return rv
  }
}
window.history.pushState = _wr('pushState')
// 在这个函数中做路由跳转后的逻辑
const bindHistory = () => {
  const currentPath = window.location.pathname
  setSelectPath(
    item => currentPath.includes(item.key))?.key || ''
  )
}
window.addEventListener('pushState', bindHistory)
*/

registerMicroApps([
    // {
    //   name: 'reactApp',
    //   entry: '//localhost:3000',
    //   container: '#container',
    //   activeRule: '/app-react',
    // },
    {
      name: 'vueApp', // 子应用名称
      entry: '//localhost:3001', // 默认会加载这个路径下的html，解析里面的js
      container: '#main', // 加载的容器，将子应用显示在哪儿
      activeRule: '/app-vue', // 匹配的路由，匹配的路由是 /app-vue 开头的地址
    },
    // {
    //   name: 'angularApp',
    //   entry: '//localhost:4200',
    //   container: '#container',
    //   activeRule: '/app-angular',
    // },
]);
// setDefaultMountApp('/app-vue');
// 启动 qiankun
start();

createApp(App).mount('#app')
