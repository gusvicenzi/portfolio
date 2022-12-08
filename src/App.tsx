import './App.scss'
import { Navbar } from './components/navbar/Navbar'
import { About } from './pages/about/About'
import { Home } from './pages/home/Home'

function App() {
  return (
    <div className="App">
      <Navbar items={['Home', 'About', 'Skills', 'Education', 'Portfolio', 'Get in touch']} />
      <Home />
      <About />
    </div>
  )
}

export default App
