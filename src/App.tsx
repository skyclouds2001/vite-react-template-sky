import React, { useLayoutEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider, App as Apps } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'antd/dist/reset.css'
import { locale } from 'dayjs'
import 'dayjs/locale/zh-cn'
import { Provider } from 'react-redux'
import Routes from '@/router'
import store from '@/stores'

locale('zh-cn')

const App: React.FC = () => {
  useLayoutEffect(() => {
    ConfigProvider.config({
      holderRender: (children) => (
        <ConfigProvider locale={zhCN}>
          <Apps>{children}</Apps>
        </ConfigProvider>
      ),
    })
  }, [])

  return (
    <ConfigProvider locale={zhCN}>
      <Apps>
        <Provider store={store}>
          <Router>
            <Routes />
          </Router>
        </Provider>
      </Apps>
    </ConfigProvider>
  )
}

export default App
