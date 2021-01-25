import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './micro/public-path'

Vue.config.productionTip = false

let instance = null
function render (props = {}) {
  const { container } = props
  const renderContainer = container ? container.querySelector('#app') : '#app'

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(renderContainer)
}

console.log('////////--------', window)
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('vue app bootstraped')
}
export async function mount (props) {
  console.log('vue app mounted', props)
  render(props)
}
export async function unmount () {
  console.log('vue app unmount')
  instance.$destroy()
  instance.$el.innerHtml = ''
  instance = null
}
