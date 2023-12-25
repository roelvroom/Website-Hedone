import './App.css'
import StickyButton from './Components/StickyButton'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Menu from './Pages/Menu'

function App() {
  return (
    <div className='bg-Primary'>
      <Home />
      <About />
      <Menu />
      <Contact />
      <StickyButton />
    </div>
  )
}

export default App
