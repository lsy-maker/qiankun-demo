const VUE_APP_VUE_KEYWORD = 'vue'
const VUE_APP_REACT_KEYWORD = 'react'

const apps = [
  {
    name: 'VueMicroApp',
    entry: process.env.VUE_APP_VUE_MICRO_APP,
    container: '#frame',
    activeRule: process.env.VUE_APP_BASE_ROUTER + VUE_APP_VUE_KEYWORD
  },
  {
    name: 'ReactMicroApp',
    entry: 'http://localhost:10100',
    // entry: process.env.VUE_APP_REACT_MICRO_APP,
    container: '#frame',
    activeRule: process.env.VUE_APP_BASE_ROUTER + VUE_APP_REACT_KEYWORD
  }
]

export default apps
