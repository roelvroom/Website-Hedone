import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { className } from '../../utils/className'
import { MdNavigateNext } from 'react-icons/md'

import { IoClose } from 'react-icons/io5'

export const Navbar = () => {
  const [show, setShow] = useState(false)
  const [nav, setNav] = useState(false)

  const HandleNav = () => {
    setNav(!nav)
  }

  const toggleShow = () => {
    const yoffset = window.pageYOffset
    if (yoffset > 390) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const links = [
    { name: 'Over ons', link: 'About' },
    { name: 'Menu', link: 'Menu' },
    { name: 'Sfeer', link: 'Gallery' },
    { name: 'Reserveer', link: 'Reserveer' },
    { name: 'Contact', link: 'Contact' },
  ]

  useEffect(() => {
    window.addEventListener('scroll', toggleShow)

    return () => {
      window.addEventListener('scroll', toggleShow)
    }
  }, [])

  return (
    <nav className='flex justify-center m-auto p-4 fixed z-50 font-light'>
      <div className='justify-center'>
        <div onClick={HandleNav} className='block md:hidden'>
          {nav ? <IoClose /> : <MdNavigateNext />}
        </div>
        <ul className={className(show ? 'opacity-100' : 'opacity-0', 'bg-Primary p-2 flex gap-5')}>
          {links.map((link, index) => (
            <li key={index} className=''>
              <Link
                to={link.link}
                spy={true}
                smooth={true}
                offset={50}
                duration={1100}
                className={className(
                  show ? 'opacity-100' : 'opacity-0',
                  'text-black text-lg hover:text-Bronze hover:text-opacity-60 duration-300 cursor-pointer nav-item bg-Primary p-2 rounded-xl ',
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
