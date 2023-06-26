import { BrowserRouter as Router } from 'react-router-dom'
import './App.scss'
import Header from './Header'
import Main from './Main'

function App() {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  )
}

export default App
