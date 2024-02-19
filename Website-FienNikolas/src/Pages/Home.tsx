import { Navbar } from '../Components/Navbar'
import HédonéBanner from '../assets/Hédoné-Light.jpg'
import '../App.css'

const Home = () => {
  return (
    <div
      id='Home'
      className='bg-Primary h-screen
                text-center flex justify-center font-light'
    >
      <div className='items-center'>
        <img src={HédonéBanner} alt='hedone' className='relative' />
      </div>
      <Navbar />
    </div>
  )
}

export default Home
