import React, { Suspense, useLayoutEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, App as Apps } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'antd/dist/reset.css'
import { locale } from 'dayjs'
import 'dayjs/locale/zh-cn'
import { Provider } from 'react-redux'
import router from '@/router'
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
          <Suspense>
            <RouterProvider router={router} />
          </Suspense>
        </Provider>
      </Apps>
    </ConfigProvider>
  )
}

export default App

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}
