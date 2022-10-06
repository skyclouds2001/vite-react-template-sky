import Main from '@/views/main'

interface Route {
  path: string
  component: JSX.Element
}

const routes: Route[] = [
  {
    path: '/',
    component: Main()
  }
]

export default routes
