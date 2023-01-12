import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { Provider } from 'react-redux'
import Routes from '@/router'
import store from '@/store'
import '@/App.css'

const App: React.FC = () => (
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  </ConfigProvider>
)

export default App
