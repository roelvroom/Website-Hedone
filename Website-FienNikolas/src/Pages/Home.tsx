import { Navbar } from '../Components/Navbar'
import HédonéBanner from '../assets/Hédoné-Light.jpg'

const Home = () => {
  

  return (
    <div
      id='Home'
      className='bg-Primary pb-96 
                text-center flex justify-center'
    >
        <img src={HédonéBanner} alt='hedone' className='absolute' />
      <Navbar/>
    </div>
  )
}

export default Home
