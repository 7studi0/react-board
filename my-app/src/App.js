import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import Header from './Common/Header'
import Main from './Common/Main'

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  )
}

export default App
