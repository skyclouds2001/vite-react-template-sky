import { createBrowserRouter } from 'react-router-dom'

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('@/views/home').then((component) => ({ Component: component.default })),
  },
])

export default router
