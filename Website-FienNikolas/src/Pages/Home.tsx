import { Navbar } from '../Components/Navbar'
import HédonéBanner from '../assets/Hédoné-Light.jpg'
import '../App.css'


const Home = () => {
  

  return (
    <div
      id='Home'
      className='bg-Primary pb-96 
                text-center flex justify-center font-light'
    >
        <img src={HédonéBanner} alt='hedone' className='absolute' />
      <Navbar/>
    </div>
  )
}

export default Home
