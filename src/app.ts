import {createApp} from 'vue'
// import {Button, Toast, List, Cell} from '@nutui/nutui-taro'
import NutUI from '@nutui/nutui-taro'

import './app.less'

const App = createApp({
  onShow(options) {
    console.log(options)
  },
})

App.use(NutUI)
// App.use(Button).use(Toast).use(List).use(Cell)

export default App
