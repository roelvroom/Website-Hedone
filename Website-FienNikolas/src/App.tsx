import './App.css'
import StickyButton from './Components/StickyButton'
import About from './Pages/About'
import Home from './Pages/Home'
import Menu from './Pages/Menu'

function App() {
  return (
    <div className=''>
      <Home/>
      <About/>
      <Menu/>
      <StickyButton/>
    </div>
  )
}

export default App
