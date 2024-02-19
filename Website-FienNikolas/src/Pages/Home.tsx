import { Navbar } from '../Components/Navbar'
import HédonéBanner from '../assets/Hédoné-Light.jpg'
import '../App.css'

const Home = () => {
  return (
    <div
      id='Home'
      className='bg-Primary h-screen 
                text-center flex justify-center align-middle font-light'
    >
      <div>
        <img src={HédonéBanner} alt='hedone' className='mt-32 md:mt-0' />
      </div>
      <Navbar />
    </div>
  )
}

export default Home
