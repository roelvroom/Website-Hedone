import { Link } from 'react-scroll'
import Banner from '../assets/RestaurantBanner.jpg'
import HédonéLight from '../assets/Hédoné-Dark-Logo.jpg'

const Home = () => {
  const links = [
    { name: 'Home', link: 'Home' },
    { name: 'About', link: 'About' },
    { name: 'Menu', link: 'Menu' },
  ]

  return (
    <div
      id='Home'
      className='relative bg-gradient-to-tr h-full pb-60
                from-gray-600 to-gray-600 w-full 
                text-center'
    >
      <img
        src={Banner}
        alt='testBanner'
        className='w-full h-full object-cover absolute mix-blend-overlay'
      />
      <nav className='flex items-center justify-between p-4 relative'>
        <div>
          <span>
            <img
              className='w-28 rounded-2xl border-2 border-gray-600'
              src={HédonéLight}
              alt='testlogo'
            />
          </span>
        </div>
        <div>
          <ul className='flex gap-8 nav-item'>
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
        <div>
          {/* costum color hier Bronz! achtergrondkleur van logo*/}
          <button className='z-40 p-2 text-white rounded-lg hover:bg-orange-300 hover:text-gray-500 duration-200'>
            Reserveer hier!
          </button>
        </div>
      </nav>

      <div className='p-20 relative'>
        <h1 className='text-gray-300 font-bold text-6xl'>Hédoné</h1>
        <h3 className='text-gray-300 font-bold text-2xl mt-10'>
          In een restaurant vol sfeer en pracht, Waar smaken dansen in de nacht. Een menu vol
          verrassingen en genot, Bij elke hap een nieuwe plot.
        </h3>
      </div>
    </div>
  )
}

export default Home
