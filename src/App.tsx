import './App.scss'
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Navbar items={['Home', 'About', 'Get in touch']} />
      <Home />
    </div>
  );
}

export default App
