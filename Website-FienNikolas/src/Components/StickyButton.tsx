import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'
import { className } from '../../utils/className'
import { motion } from 'framer-motion'

const StickyButton = () => {
  const [isVisable, setIsVisable] = useState(false)
  const toggleVisibility = () => {
    const yOffset = window.pageYOffset
    if (yOffset > 300) {
      setIsVisable(true)
    } else {
      setIsVisable(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className='fixed bottom-2 right-2' >
      <motion.button
        whileHover={{ scale: 1.1 }}
        type='button'
        onClick={scrollToTop}
        className={className(
          isVisable ? 'opacity-100' : 'opacity-0',
          'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-TextDark transition-opacity hover:bg-TextDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-TextDark',
        )}
      >
        <BiArrowFromBottom className='h-6 w-6' aria-hidden='true' />
      </motion.button>
    </div>
  )
}

export default StickyButton
