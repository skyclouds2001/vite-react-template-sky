import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'

const Home = lazy(() => import('@/views/home'))

const Router: React.FC = () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <React.Suspense>
          <Home />
        </React.Suspense>
      ),
    },
  ])
}

export default Router
