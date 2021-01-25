import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun'
import apps from './apps'

// const startQiankun = async () => {
//   registerMicroApps(apps, {
//     beforeLoad: [(app) => {
//       console.log('before load', app.name)
//     }],
//     afterMount: [(app) => {
//       console.log('after mount', app.name)
//     }],
//     afterUnmount: [(app) => {
//       console.log('after unmount', app.name)
//     }],
//   })

//   addGlobalUncaughtErrorHandler((event) => {
//     console.log(event)
//     const { msg } = event
//     if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
//       console.log('微应用加载失败，请检查应用是否可运行')
//     }
//   })

//   return start
// }

registerMicroApps(apps, {
  beforeLoad: [(app) => {
    console.log('before load', app.name)
  }],
  afterMount: [(app) => {
    console.log('after mount', app.name)
  }],
  afterUnmount: [(app) => {
    console.log('after unmount', app.name)
  }]
})

addGlobalUncaughtErrorHandler((event) => {
  console.log(event)
  const { msg } = event
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    console.log('微应用加载失败，请检查应用是否可运行')
  }
})
// const init = async () => {
//   return await startQiankun()
// }

export default start
