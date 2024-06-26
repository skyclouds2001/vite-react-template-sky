import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider, App as Main } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'antd/dist/reset.css'
import { locale } from 'dayjs'
import 'dayjs/locale/zh-cn'
import { Provider } from 'react-redux'
import Routes from '@/router'
import store from '@/stores'

locale('zh-cn')

const App: React.FC = () => (
  <ConfigProvider locale={zhCN}>
    <Main>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </Main>
  </ConfigProvider>
)

export default App
