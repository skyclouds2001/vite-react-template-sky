import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Main = lazy(() => import('@/views/main'))

const Router: React.FC = () => {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
    },
  ])
}

export default Router
