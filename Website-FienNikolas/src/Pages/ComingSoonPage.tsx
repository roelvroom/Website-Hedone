import HédonéBanner from '../assets/Hédoné-Light.jpg'
import { FaInstagram } from 'react-icons/fa'

const ComingSoonPage = () => {

  return (
    <div id='Home' className='bg-Primary h-screen flex flex-col justify-center items-center'>
      <div className='text-center font-light'>
        <img src={HédonéBanner} alt='hedone' className='h-72' />
        <h1 className='text-4xl'>Coming soon!</h1>
        <div>
          <h2 className='text-xl'>Volg ons op</h2>
          <a href='het instagram acc' target='_blank' rel='nooper noreferrer'>
            <FaInstagram className='h-8 w-8' aria-hidden='true' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonPage
