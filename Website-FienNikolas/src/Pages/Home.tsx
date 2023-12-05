import { Link } from 'react-scroll'
//import Banner from '../assets/RestaurantBanner.jpg'
import HédonéBanner from '../assets/Hédoné-Dark-Logo.jpg'

const Home = () => {
  const links = [
    { name: 'Home', link: 'Home' },
    { name: 'About', link: 'About' },
    { name: 'Menu', link: 'Menu' },
    { name: 'Reserveer', link: 'Reserveer' },
    { name: 'Contact', link: 'Contact' },
  ]

  return (
    <div
      id='Home'
      className='bg-black pb-96 w-full 
                text-center flex justify-center'
    >
        <img height={120} src={HédonéBanner} alt='hedone' className='absolute bg-black' />
      <nav className='flex justify-center p-4'>
        <div>
          <ul className='flex gap-8 nav-item relative'>
            {links.map((link, index) => (
              <li key={index} className=''>
                <Link
                  to={link.link}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1100}
                  className=' text-white text-lg hover:text-orange-300 duration-300 cursor-pointer nav-item'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Home
