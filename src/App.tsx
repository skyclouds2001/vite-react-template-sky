import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import routes from './router'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {
          routes.map(v => (<Route key={v.path} path={v.path} element={v.component} />))
        }
      </Routes>
    </Router>
  )
}

export default App
